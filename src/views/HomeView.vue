<template>
  <div id="home">
    <img src="../assets/FeuerwehrLogo.png">
    <h1>FEUERWEHR</h1>
    <button class="EinsatzButton" onclick="window.location.href='/einsatz'">
      <img src="../assets/Icons/Einsatz.png">
      <h1>Einsatz</h1>
    </button><br>
    <button class="LernButton" onclick="window.location.href='/lern-hub'">
      <img src="../assets/Icons/lern-hub.svg">
      <h1>Lern-Hub</h1>
    </button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style lang="scss">
  #home{
    margin-top: 10%;
    img{
      width: 6.4rem;
      margin: 0;
      padding: 0;
    }

    h1{
      color: white;
      margin-top: 0.4rem;
      margin-bottom: 0.5rem;
    }

    button{
        width: 90%;
        margin: 0.3rem;
        background-color: white;
        border: solid black 3px;
        border-radius: 13px;

        img{
            height: 75%;
            max-width: 83vw;
            width: auto;
            padding: 0rem;
        }

        h1{
          color: black;
          margin-top: 0;
        }
    }

    .EinsatzButton{
      height: 40vh;
    }

    .LernButton{
      height: 24vh;
    }
  }
</style>
