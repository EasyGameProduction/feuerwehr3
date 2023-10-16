<template>
    <div id="geHome">
        <button @click="$emit('gefahrnummerActive')" id="gefahrnummer">Gefahrnummer</button><br>
        <input type="number" placeholder="UN-Nummer" maxlength="4" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"><br>
        <button @click="$emit('unNummerActive')" id="gefahrgutBestaetigen">Bestätigen</button><br>
        <button @click="$emit('eriActive')" id="eri-cards"><span><img src="../../assets/Icons/ERI-CARDS.svg">ERI-Cards</span></button><br>
        <button @click="$emit('klassenActive')" id="gefahrgutKlassen" class="gefahrgutButtontype"><img src="../../assets/Icons/GefahrgutKlassen.svg"><br>Klassen</button>
        <button @click="$emit('ghsActive')" id="ghs" class="gefahrgutButtontype"><img src="../../assets/Icons/GHS.svg"><br>GHS</button>
    </div>
</template>

<style lang="scss">
#geHome{
    input, #gefahrnummer{
        padding: 0;
        margin: 0;
        width: 80%;
        height: 3.3rem;
        font-size: larger;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align:center;
    }

    #gefahrgutBestaetigen{
        width: 60%;
        height: 3.3rem;
        font-size: larger;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align:center;
        background-color: blue;
        color: white;
    }

    #eri-cards{
        margin-top: 3.3rem;
        width: 80%;
        height: 5rem;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align:center;
        
        span{
            font-size: xx-large;
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .gefahrgutButtontype{
        width: 39%;
        height: 7.5rem;
        font-size:large;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align:center;
    }

    #gefahrgutKlassen{
        margin-right: 2%;
    }

    img{
        height: 70%;
        margin: 0;
        padding: 0;
    }
}
</style>