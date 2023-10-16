<template>
    <Header ueberschrift="Hilfe im Wald"/>
    <div id="hilfeimwald">
        <iframe src="https://rettungspunkte.com/" title="Karte"></iframe>
    </div>
    <Footer backLink="/einsatz"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'HilfeImWaldView',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
#hilfeimwald{
    margin-top: 4.5rem;
    iframe{
        width: 100%;
        height: 72vh;
        margin: 0;
        padding: 0;
    }
}
</style>