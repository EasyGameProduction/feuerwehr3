<template>
    <Header ueberschrift="Gefahrgut"/>
    <div id="gefahrgut">
        <GeHome class="geHome" v-show="gefahrgutHome" @gefahrnummerActive="openGeNumber" @unNummerActive="openGeUN" @eriActive="openGeERI" @klassenActive="openGeKlassen" @ghsActive="openGeGHS"/>
        <GeNumber v-if="gefahrgutNumber"/>
        <GeERI v-if="gefahrgutERI"/>
        <GeKlassen v-if="gefahrgutKlassen"/>
        <GeGHS v-if="gefahrgutGHS"/>
        <GeUN v-if="gefahrgutUN"/>
    </div>
    <Footer :backLink="gefahrgutHome?`/einsatz/`:`/gefahrgut/`"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GeHome from '@/components/Gefahrgut/GeHome.vue'
import GeNumber from '@/components/Gefahrgut/GeNumber.vue'
import GeERI  from '@/components/Gefahrgut/GeERI.vue'
import GeKlassen from '@/components/Gefahrgut/GeKlassen.vue'
import GeGHS from '@/components/Gefahrgut/GeGHS.vue'
import GeUN from '@/components/Gefahrgut/GeUN.vue'

export default {
    name: 'GefahrgutView',
    props:{
        
    },
    data() {
        return{
            gefahrgutHome: true,
            gefahrgutNumber: false,
            gefahrgutERI: false,
            gefahrgutKlassen: false,
            gefahrgutGHS: false,
            gefahrgutUN: false
        }
    },
    components: {
        Header,
        Footer,
        GeHome,
        GeNumber,
        GeERI,
        GeKlassen,
        GeGHS,
        GeUN
    },
    methods: {
        openGeHome: function(){
            this.gefahrgutNumber = false;
            this.gefahrgutHome = true;
            this.gefahrgutERI = false;
            this.gefahrgutKlassen = false;
            this.gefahrgutGHS = false;
            this.gefahrgutUN = false;
        },
        openGeNumber: function(){
            this.gefahrgutNumber = true;
            this.gefahrgutHome = false;
            this.gefahrgutERI = false;
            this.gefahrgutKlassen = false;
            this.gefahrgutGHS = false;
            this.gefahrgutUN = false;
        },
        openGeERI: function(){
            this.gefahrgutNumber = false;
            this.gefahrgutHome = false;
            this.gefahrgutERI = true;
            this.gefahrgutKlassen = false;
            this.gefahrgutGHS = false;
            this.gefahrgutUN = false;
        },
        openGeKlassen: function(){
            this.gefahrgutNumber = false;
            this.gefahrgutHome = false;
            this.gefahrgutERI = false;
            this.gefahrgutKlassen = true;
            this.gefahrgutGHS = false;
            this.gefahrgutUN = false;
        },
        openGeGHS: function(){
            this.gefahrgutNumber = false;
            this.gefahrgutHome = false;
            this.gefahrgutERI = false;
            this.gefahrgutKlassen = false;
            this.gefahrgutGHS = true;
            this.gefahrgutUN = false;
        },
        openGeUN: function(){
            this.gefahrgutNumber = false;
            this.gefahrgutHome = false;
            this.gefahrgutERI = false;
            this.gefahrgutKlassen = false;
            this.gefahrgutGHS = false;
            this.gefahrgutUN = true;
        },
        setup() {
            const emits = ['gefahrnummerActive', 'unNummerActive', 'eriActive', 'klassenActive', 'ghsActive', 'unActive'];
            return { emits };
        }
    },
    created(){
    }
}
</script>

<style lang="scss">
#gefahrgut{
    display: block !important;
  position:absolute !important;
  height:auto !important;
  bottom:0 !important;
  top:0 !important;
  left:0 !important;
  right:0 !important;
  margin-top: 4.5rem !important;
  margin-bottom: 4.5rem !important;
    button{
        background-color: white;
    }
    .geHome{
        margin-top: 4.1rem;
        position: absolute !important;
        bottom: auto;
        top: auto;
        right: 0;
        left: 0;
    }
}
</style>