<template>
    <Header ueberschrift="Einsatz" />
    <div id="einsatz">
        <button onclick="window.location.href='/hydranten'">
            <img src="../assets/Icons/Hydrant.svg">
        </button>
        <button onclick="window.location.href='/gefahrgut'">
            <img src="../assets/Icons/Gefahrgut.svg">
        </button>
        <button onclick="window.location.href='/hilfeimwald'">
            <img src="../assets/Icons/HilfeImWald.svg">
        </button>
        <button>
            <img src="../assets/Icons/Sammelpunkte.svg">
        </button>
        <button>
            <img src="../assets/Icons/Funk.svg">
        </button>
        <button>
            <img src="../assets/Icons/Brandmeldeanlage.svg">
        </button>
    </div>
    <Footer backLink="/"/>
</template>
  
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'EinsatzView',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="scss">
#einsatz{
    margin-top: 5.5rem;

    button{
        width: 41%;
        max-width: 17rem;
        margin: 0.3rem;
        background-color: white;
        border: solid black 3px;
        border-radius: 13px;

        img{
            width: 100%;
            padding: 0.1rem;
        }
    }
}
</style>
  