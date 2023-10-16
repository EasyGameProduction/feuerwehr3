<template>
    <Header ueberschrift="Hydranten"/>
    <div id="hydranten">
        <iframe src="https://www.osmhydrant.org/de/" title="Hydrantenmap"></iframe>
    </div>
    <Footer backLink="/einsatz"/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'HydrantenView',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
#hydranten{
    iframe{
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
    }
}
</style>