<template>
  <Header ueberschrift="Hydranten" />
  <div id="hydranten">
    <l-map ref="map" v-model:zoom="zoom" :center="[this.lat, this.long]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <span v-for="leitung in this.leitungen" :key="leitung.id">
        <Leitung v-if="this.leitungenVisible" :coords="leitung.coords" :bezeichnung="leitung.bezeichnung"/>
      </span>
      <span v-for="item in this.hydranten" :key="item.id">
        <Hydrant v-if="this.hydrantenVisible" :art="item.art" :durchlaufmenge="item.durchlaufmenge" :bemerkung="item.bemerkung" :lat="item.lat" :lng="item.lng"/>
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
    </span>
  </div>
  <Footer backLink="/einsatz" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Hydrant from "@/components/Hydrant.vue";
import Leitung from "@/components/Leitung.vue";
import Position from "@/components/Position.vue";

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
      hydranten: this.$store.state.hydranten,
      leitungen: this.$store.state.leitungen,
      hydrantenVisible: true,
      leitungenVisible: false,
      mapControlVisible: false,
      positionVisible: false,
    };
  },
  methods: {
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
    switchMapControl(){
      this.mapControlVisible = !this.mapControlVisible;
    }
  },
  created() {
    this.setGPSPosition();
  }
};
</script>



<style lang="scss">
#hydranten {
  margin-top: 4.5rem;
  width: 100%;
  height: 72vh;

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
</style>
