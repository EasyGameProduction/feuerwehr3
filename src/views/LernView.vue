<template>
    <Header ueberschrift="Lern-Hub" />
    <div id="lern-hub">
        <button @click="$router.push('/leistungspruefung-thl/'+this.routeParams)">
            <h1>Leistungsprüfung THL</h1>
        </button>
        <button @click="$router.push('/mta2/'+this.routeParams)">
            <h1>MTA Teil 2</h1>
        </button>
    </div>
    <Footer backLink="/"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'LernView',
    components: {
        Header,
        Footer
    },
    data() {
        return{
            routeParams:String,
        }
    },
    created(){
        this.routeParams = this.$route.params.id;
    }
}
</script>

<style lang="scss">
#lern-hub{
    display: block !important;
    position:absolute !important;
    height:auto !important;
    bottom:0 !important;
    top:0 !important;
    left:0 !important;
    right:0 !important;
    margin-top: 4.5rem !important;
    margin-bottom: 4.5rem !important;
    margin-top: 4.5rem;
    height: 72vh;
    overflow-y: scroll;

    button{
        width: 90%;
        max-width: 17rem;
        margin-top: 0.3rem;
        background-color: white;
        border: solid black 3px;
        border-radius: 13px;
    }
}
</style>