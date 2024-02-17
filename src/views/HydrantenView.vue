<template>
  <Header v-show="randVisible" ueberschrift="Hydranten" />
  <div id="hydranten" :class="randVisible?'margin':'noMargin'">
    <l-map ref="map" v-model:zoom="zoom" :center="[this.lat, this.long]">
      <l-tile-layer
        :url="this.activeURL"
        layer-type="base"
      ></l-tile-layer>
      <span v-for="leitung in this.leitungen" :key="leitung.id">
        <Leitung v-if="this.leitungenVisible" :coords="leitung.coords" :bezeichnung="leitung.bezeichnung" :url="this.activeURL"/>
      </span>
      <span v-for="item in this.hydranten" :key="item.wasserquellenID">
        <Hydrant v-if="this.hydrantenVisible" :art="item.name" :durchlaufmenge="item.durchlaufmenge.toString()" :bemerkung="item.bemerkung" :lat="item.positionX.toString()" :lng="item.positionY.toString()"/>
      </span>
      <span>
        <Position v-if="this.positionVisible" :lat="this.lat" :lng="this.long"/>
      </span>
    </l-map>
    <button id="controlButton" @click="switchMapControl()" class="fa">&#xf013;</button>
    <span id="mapControl" v-if="mapControlVisible">
      <button :class="hydrantenVisible?'buttonOn':'buttonOff'" @click="switchHydrantenVisibility()">Hydranten</button>
      <br>
      <button :class="leitungenVisible?'buttonOn':'buttonOff'" @click="switchLeitungenVisibility()">Leitungen</button>
      <br>
      <button :class="randVisible?'buttonOn':'buttonOff'" @click="switchRandVisibility()">Rand</button>
      <br>
      <button @click="switchLayer()">{{layer}}</button>
    </span>

    <button v-if="bearbeitungsberechtigung" id="hydrantenBearbeitungsButton" @click="switchHydrantenBearbeitungsmodus()" class="fa">&#xf044;</button>
    <span id="hydrantenBearbeitungsControl" v-if="bearbeitungsmodusAktiv">
      <button :class="hydrantenHinzufuegenBoolean?'buttonOn':'buttonOff'" @click="switchHydrantenVisibility()">Hydranten hinzufügen</button>
      <br>
      <button :class="hydrantenBearbeitenBoolean?'buttonOn':'buttonOff'" @click="switchHydrantenVisibility()">Hydranten bearbeiten</button>
      <br>
      <button :class="hydrantenEntfernenBoolean?'buttonOn':'buttonOff'" @click="switchHydrantenVisibility()">Hydranten entfernen</button>
      <br>
      <button :class="leitungenHinzufuegenBoolean?'buttonOn':'buttonOff'" @click="switchLeitungenVisibility()">Leitungen hinzufügen</button>
      <br>
      <button :class="leitungenBearbeitenBoolean?'buttonOn':'buttonOff'" @click="switchLeitungenVisibility()">Leitungen bearbeiten</button>
      <br>
      <button :class="leitungenEntfernenBoolean?'buttonOn':'buttonOff'" @click="switchLeitungenVisibility()">Leitungen entfernen</button>
      <br>
    </span>
  </div>
  <Footer v-show="randVisible" backLink="/einsatz/" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Hydrant from "@/components/Hydrant.vue";
import Leitung from "@/components/Leitung.vue";
import Position from "@/components/Position.vue";
import axios from 'axios';

export default {
  name: "HydrantenView",
  components: {
    Header,
    Footer,
    LMap,
    LTileLayer,
    Hydrant,
    Leitung,
    Position
  },
  data() {
    return {
      zoom: 50,
      lat: 50.10404,
      long: 10.143591,
      hydranten: [],
      leitungen: this.$store.state.leitungen,
      hydrantenVisible: true,
      leitungenVisible: false,
      mapControlVisible: false,
      positionVisible: false,
      randVisible: true,
      bearbeitungsberechtigung: false,
      bearbeitungsmodusAktiv: false,
      hydrantenHinzufuegenBoolean: false,
      hydrantenBearbeitenBoolean: false,
      hydrantenEntfernenBoolean: false,
      leitungenHinzufuegenBoolean: false,
      leitungenBearbeitenBoolean: false,
      leitungenEntfernenBoolean: false,
      card: 0,
      layer: "Satelit",
      activeURL: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      baseMaps: [
        {
          name: 'Straße',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        },
        {
          name: 'Satelit',
          url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
        }
      ],
    };
  },
  methods: {
    async getHydranten(){
      var konvKey = this.$route.params.id.replace(":","");
      try{
          const response = await axios.get(
              'http://192.168.178.65:5000/hydrant',
              { params: { konvKey: konvKey } }
          );
          return response.data;
      } catch (err){
          console.log(err);
          //return false;
          return JSON.parse(localStorage.getItem("hydranten"));
      }
    },
    setGPSPosition: function () {
      const success = (position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.positionVisible = true;
      };

      const error = (err) => {
        this.positionVisible = false;
        console.log(error);
      };

      navigator.geolocation.watchPosition(success, error, {
        //timeout: 2000, 
        maximumAge: 0,
        enableHighAccuracy:true,
      });
    },
    switchHydrantenVisibility(){
      this.hydrantenVisible = !this.hydrantenVisible;
    },
    switchLeitungenVisibility(){
      this.leitungenVisible = !this.leitungenVisible;
    },
    switchRandVisibility(){
      this.randVisible = !this.randVisible;
    },
    switchMapControl(){
      this.mapControlVisible = !this.mapControlVisible;
      this.bearbeitungsmodusAktiv = false;
    },
    switchHydrantenBearbeitungsmodus(){
      this.bearbeitungsmodusAktiv = !this.bearbeitungsmodusAktiv;
      this.mapControlVisible = false;
    },
    switchLayer(){
      if(this.card == 0){
        this.card = 1;
        this.layer = "Straßen";
        this.activeURL = this.baseMaps[1].url;
      } else{
        this.card = 0;
        this.layer = "Satelit";
        this.activeURL = this.baseMaps[0].url;
      }
    },
    async getBerechtigungen(){
      try{
        var konvKey = this.$route.params.id.replace(":","");
        const response = await axios.get(
            'http://192.168.178.65:5000/berechtigungen',
            { params: { konvKey: konvKey } }
        );
        //return response.data;
        this.bearbeitungsberechtigung = response.data.hydrantenBearbeiten;
      } catch (err){
        console.log(err);
        //return false;
      }
    }
  },
  async created() {
    this.hydranten = await this.getHydranten();
    await this.getBerechtigungen();
    console.log(this.hydranten);
    localStorage.setItem("hydranten", JSON.stringify(this.hydranten));
    localStorage.setItem("leitungen", JSON.stringify(this.leitungen));
    this.setGPSPosition();
  },
  onMounted() {
    //this.hydranten = this.getHydranten();
    //this.getBerechtigungen();
  }
}
</script>



<style lang="scss">
#hydranten {
  width: 100%;

  .iconImg{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -100%;
    max-height: 2.5rem !important;
  }

  .leaflet-marker-icon{
    background: none !important;
    border: none !important;
  }

  #hydrantenBearbeitungsButton{
    background-color: white !important;
    position: absolute !important;
    top: 7.5rem !important;
    right: 0.5rem !important;
    z-index: 1000 !important;
    padding: 0.5rem !important;
    border-radius: 7px !important;
  }

  #hydrantenBearbeitungsControl{
    background-color: white !important;
    position: absolute !important;
    top: 9rem !important;
    right: 2rem !important;
    z-index: 999 !important;
    padding: 1rem !important;
    border-radius: 7px !important;
    border: solid grey 1px;

    button{
      width: 100%;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-top: 3px;
      margin-bottom: 3px;
      font-size:medium;
      padding-right: 3px;
      padding-left: 3px;
    }

    .buttonOn{
      background-color: green;
      color: white;
    }

    .buttonOff{
      background-color: rgb(238, 238, 238);
      color: black;
    }
  }
  
  #controlButton{
    background-color: white !important;
    position: absolute !important;
    top: 5rem !important;
    right: 0.5rem !important;
    z-index: 1000 !important;
    padding: 0.5rem !important;
    border-radius: 7px !important;
  }

  #mapControl{
    background-color: white !important;
    position: absolute !important;
    top: 6.5rem !important;
    right: 2rem !important;
    z-index: 999 !important;
    padding: 1rem !important;
    border-radius: 7px !important;
    border: solid grey 1px;

    button{
      width: 100%;
      padding-top: 2px;
      padding-bottom: 2px;
      margin-top: 3px;
      margin-bottom: 3px;
      font-size:medium;
      padding-right: 3px;
      padding-left: 3px;
    }

    .buttonOn{
      background-color: green;
      color: white;
    }

    .buttonOff{
      background-color: #C00000;
      color: white;
    }
  }
}

.margin{
  display: block !important;
  position:absolute !important;
  height:auto !important;
  bottom:0 !important;
  top:0 !important;
  left:0 !important;
  right:0 !important;
  margin-top: 4.5rem !important;
  margin-bottom: 4.5rem !important;
  //height: 72vh;
}

.noMargin{
  margin-top: 0rem !important;
  height: 100vh;
}
</style>
