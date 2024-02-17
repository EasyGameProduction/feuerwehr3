<template>
    <Header ueberschrift="Lern-Hub" />
    <div id="lern-hub">
        <button onclick="window.location.href='/leistungspruefung-thl'">
            <h1>Leistungsprüfung THL</h1>
        </button>
        <button onclick="window.location.href='/mta2'">
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
    }
}
</script>

<style lang="scss">
#lern-hub{
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