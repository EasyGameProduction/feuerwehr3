<template>
    <div id="Footer">
        <a id="HomeButton" :href="backLink">
            <img src="../assets/Icons/HomeButton.svg">
        </a>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    backLink: String
  }
}
</script>

<style lang="scss">
#Footer{
    background-color: #C00000;
    position: fixed;
    margin: 0;
    padding: 0;
    bottom: 0;
    height: 4.5rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#HomeButton img{
    height: 3.6rem;
}
</style>