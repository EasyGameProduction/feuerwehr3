<template>
  <Header ueberschrift="Hydranten" />
  <div id="hydranten">
    <l-map ref="map" v-model:zoom="zoom" :center="[this.lat, this.long]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker @click="hydrantOnClick('Überflurhydrant:<br><hr>400 l/min', 'Direkt gegenüber vom Haupteingang')" :lat-lng="this.markerPosition">
        <l-icon>
            <img class="iconImg" src="../assets/KartenIcons/Hydrant.svg">
        </l-icon>
      </l-marker>
    </l-map>
  </div>
  <Footer backLink="/einsatz" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import Swal from 'sweetalert2'

export default {
  name: "HydrantenView",
  components: {
    Header,
    Footer,
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },
  data() {
    return {
      zoom: 50,
      lat: 50.10404,
      long: 10.143591,
      markerPosition: [50.104254, 10.143308],
      iconText: "400",
    };
  },
  methods: {
    setGPSPosition: function () {
      const success = (position) => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      };

      const error = (err) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(success, error);
    },
    setHydrant: function (lat, long, durchlaufmenge, bemerkung) {
        console.log("setHydrant");
    },
    hydrantOnClick: function (durchlaufmenge, bemerkung){
        Swal.fire(
            durchlaufmenge,
            bemerkung
        )
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
}
</style>