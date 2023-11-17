<template>
    <Header ueberschrift="Hydranten"/>
    <div id="hydranten">
        <l-map ref="map" v-model:zoom="zoom" :center="[this.lat, this.long]">
            <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
        </l-map>
    </div>
    <Footer backLink="/einsatz"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"

export default {
    name: 'HydrantenView',
    components: {
        Header,
        Footer,
        LMap,
        LTileLayer
    },
    data(){
        return{
            zoom: 50,
            lat: 0,
            long: 0,
        }
    },
    created(){
        const success = (position) => {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
        };

        const error = (err) => {
            console.log(error);
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }
}
</script>

<style lang="scss">
#hydranten{
    margin-top: 4.5rem;
    width: 100%;
    height: 72vh;
}
</style>