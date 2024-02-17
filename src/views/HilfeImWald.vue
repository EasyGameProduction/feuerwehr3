<template>
    <Header ueberschrift="Hilfe im Wald"/>
    <div id="hilfeimwald">
        <iframe src="https://rettungspunkte.com/" title="Karte"></iframe>
    </div>
    <Footer backLink="/einsatz/"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'HilfeImWaldView',
    components: {
        Header,
        Footer
    },
    data() {
        return{
        }
    },
    created(){
    }
}
</script>

<style lang="scss">
#hilfeimwald{
    display: block !important;
    position:absolute !important;
    height:auto !important;
    bottom:0 !important;
    top:0 !important;
    left:0 !important;
    right:0 !important;
    margin-top: 4.5rem !important;
    margin-bottom: 4.5rem !important;
    width: 100%;
    iframe{
        //height: 72vh;
        width: 100vw !important;
        height: 100% !important;
        margin: 0;
        padding: 0;
    }
}
</style>