<template>
  <Header ueberschrift="Hydranten" />
  <div id="hydranten">
    <l-map ref="map" v-model:zoom="zoom" :center="[this.lat, this.long]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <span v-for="item in this.hydranten" :key="item.id">
        <Marker :art="item.art" :durchlaufmenge="item.durchlaufmenge" :bemerkung="item.bemerkung" :lat="item.lat" :lng="item.lng"/>
      </span>
    </l-map>
  </div>
  <Footer backLink="/einsatz" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Marker from "@/components/Marker.vue";

export default {
  name: "HydrantenView",
  components: {
    Header,
    Footer,
    LMap,
    LTileLayer,
    Marker
  },
  data() {
    return {
      zoom: 50,
      lat: 50.10404,
      long: 10.143591,
      hydranten: this.$store.state.hydranten,
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