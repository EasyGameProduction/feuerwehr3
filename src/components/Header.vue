<template>
    <div id="Header">
        <h1>{{ ueberschrift }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    ueberschrift: String
  }
}
</script>

<style lang="scss">
#Header{
    background-color: #C00000;
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    height: 4.5rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1{
        color: white;
    }
}
</style>