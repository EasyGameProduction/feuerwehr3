<template>
    <Header ueberschrift="Leistungsprüfung THL" />
    <div id="leistungspruefung-thl">
        <div id="Geraet">
            <center>
                <h2 id="Geraetename">Spreizer</h2>
            </center>
        </div>
        <div id="Eingabe">
            <center>
                <div class="row">
                    <div class="col-3"></div>
                    <h3 class="col-6">
                        <div id="fahrzeugEingabe">
                            <label for="fahrzeuge">Fahrzeug:</label>
                            <select id="fahrzeuge" name="fahrzeuge" @change="fahrzeugChanged">
                                <option value="RW">RW</option>
                                <option value="TLF">TLF</option>
                            </select>
                        </div>
                    </h3>
                    <div class="col-2">
                        <!--<button id="imageButton" onclick="showImage()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-card-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path
                                    d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                            </svg>
                        </button>-->
                    </div>
                    <div class="col-1"></div>
                </div>
                <div id="RW">
                    <!--<span class="col-1"></span>-->
                    <span class="buttonsFahrzeugLinks col-3">
                        <button class="buttonTop mada buttonLinks fahrzeugButton" @click="RW('Da')">Da</button>
                        <button class="buttonLinks fahrzeugButton" @click="RW('G1')">G1</button>
                        <button class="buttonLinks fahrzeugButton" @click="RW('G3')">G3</button>
                        <button class="buttonLinks fahrzeugButton" @click="RW('G5')">G5</button>
                        <button class="buttonLinks fahrzeugButton" @click="RW('G7')">G7</button>
                    </span>
                    <!--<span class="col-6 fahrzeugContainer">-->
                    <img class="Fahrzeug" src="../assets/LeistungspruefungTHL/RW.png">
                    <!--</span>-->
                    <span class="buttonsFahrzeugRechts col-3">
                        <button class="buttonTop mada buttonRechts fahrzeugButton" @click="RW('Ma')">Ma</button>
                        <button class="buttonRechts fahrzeugButton" @click="RW('G2')">G2</button>
                        <button class="buttonRechts fahrzeugButton" @click="RW('G4')">G4</button>
                        <button class="buttonRechts fahrzeugButton" @click="RW('G6')">G6</button>
                        <button class="buttonRechts fahrzeugButton" @click="RW('G8')">G8</button>
                    </span>
                    <!--<span class="col-1"></span>-->
                </div>
                <div id="TLF" class="row">
                    <!--<span class="col-1"></span>-->
                    <span class="buttonsFahrzeugLinks col-3">
                        <button style="visibility: hidden;" class="buttonTop fahrzeugButton" @click="TLF('Da')">Da</button>
                        <button class="mada buttonLinks fahrzeugButton" @click="TLF('Da')">Da</button>
                        <button class="buttonLinks fahrzeugButton" @click="TLF('G1')">G1</button>
                        <button class="buttonLinks fahrzeugButton" @click="TLF('G3')">G3</button>
                        <button class="buttonLinks fahrzeugButton" @click="TLF('G5')">G5</button>
                    </span>
                    <img class="Fahrzeug" src="../assets/LeistungspruefungTHL/TLF.png">
                    <span class="buttonsFahrzeugRechts col-3">
                        <button style="visibility: hidden;" class="buttonTop fahrzeugButton" @click="TLF('Ma')">Ma</button>
                        <button class="mada buttonRechts fahrzeugButton" @click="TLF('Ma')">Ma</button>
                        <button class="buttonRechts fahrzeugButton" @click="TLF('G2')">G2</button>
                        <button class="buttonRechts fahrzeugButton" @click="TLF('G4')">G4</button>
                        <button class="buttonRechts fahrzeugButton" @click="TLF('G6')">G6</button>
                    </span>
                    <!--<span class="col-1"></span>-->
                </div>
            </center>
        </div>
        <div class="Aufgabenzahl">
            <center>
                <h5 id="Aufgabe"></h5>
            </center>
        </div>
    </div>
    <Footer backLink="/lern-hub/" />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2'

export default {
    name: 'MTA2',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            gegenstaende: [["Trennschleifer", "RW", "G2", "TLF", ""],
            ["Gurtmesser", "RW", "G2", "TLF", "G1"],
            ["Flutlichtstrahler", "RW", "G2", "TLF", ""],
            ["Glassäge", "RW", "G2", "TLF", "G1"],
            ["Leitungsroller/- trommeln", "RW", "G2", "TLF", "G4"],
            ["Warndreieck", "RW", "G2", "TLF", ""],
            ["Warn-/Sicherungsleuchte", "RW", "G2", "TLF", ""],
            ["Hydraulische Winde", "RW", "G3", "TLF", ""],
            ["Mehrzweckzug", "RW", "G3", "TLF", ""],
            ["Rettungszylinder", "RW", "G4", "TLF", "G1"],
            ["Hydraulischer Rettungssatz", "RW", "G4", "TLF", "G1"],
            ["Schuttmulden", "RW", "G4", "TLF", "G4"],
            ["Brechstange", "RW", "G6", "TLF", ""],
            ["Motorkettensäge", "RW", "G6", "TLF", ""],
            ["Werkzeugkasten", "RW", "G6", "TLF", "Ma"],
            ["Unterbaumaterial", "RW", "G6", "TLF", ""],
            ["Verkehrsleitkegel", "RW", "G7", "TLF", "G1"],
            ["Feuerlöscher", "RW", "G8", "TLF", "G2"],
            ["Kübelspritze", "RW", "", "TLF", "G2"],
            ["Schaumstrahlrohr", "RW", "", "TLF", "G6"],
            ["Strahlrohre", "RW", "", "TLF", "G6"],
            ["Warnweste", "RW", "Ma", "TLF", "Ma"],
            ["Abschleppseil", "RW", "", "TLF", "Ma"],
            ["Verbandkasten", "RW", "", "TLF", "Ma"],
            ["Krankentrage", "RW", "", "TLF", "Ma"],
            ["Schaufeltrage", "RW", "", "TLF", "Da"],
            ["Bolzenschneider", "RW", "", "TLF", "Ma"]],
            fehler: 0,
            index: 0,
        }
    },
    methods: {
        startGame: function () {
            this.index = 0;
            this.fehler = 0;
            this.gegenstaende = this.shuffle(this.gegenstaende);
            document.getElementById("Geraetename").innerHTML = this.gegenstaende[0][0];
            document.getElementById("Aufgabe").innerHTML = "Aufgabe: " + (+this.index + +1).toString() + "/" + this.gegenstaende.length.toString();
        },
        Next: function () {
            if (this.index < this.gegenstaende.length - 1) {
                this.index++;
                document.getElementById("Geraetename").innerHTML = this.gegenstaende[this.index][0];
                document.getElementById("Aufgabe").innerHTML = "Aufgabe: " + (+this.index + +1).toString() + "/" + this.gegenstaende.length.toString();
            } else {
                if (this.fehler == 0) {
                    Swal.fire({
                        title: 'Fehlerfrei',
                        text: 'Du hast alle ' + this.gegenstaende.length.toString() + ' richtig beantwortet.',
                        icon: 'success',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                } else if (this.fehler <= 2) {
                    Swal.fire({
                        title: 'Naja',
                        text: 'Du hast ' + (+this.gegenstaende.length - +this.fehler).toString() + ' von ' + this.gegenstaende.length.toString() + ' richtig beantwortet.',
                        icon: 'warning',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                } else if (this.fehler >= 3) {
                    Swal.fire({
                        title: 'Übungsbedarf',
                        text: 'Du hast nur ' + (+this.gegenstaende.length - +this.fehler).toString() + ' von ' + this.gegenstaende.length.toString() + ' richtig beantwortet.',
                        icon: 'error',
                        timerProgressBar: true,
                        timer: 4000,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                }
                this.startGame();
            }
        },

        fahrzeugChanged: function () {
            var fahrzeug = document.getElementById("fahrzeuge").options[document.getElementById("fahrzeuge").selectedIndex].text;

            if (fahrzeug == "RW") {
                this.activateRW();
                this.deactivateTLF();
            } else if (fahrzeug == "TLF") {
                this.activateTLF();
                this.deactivateRW();
            }
        },

        activateRW: function () {
            document.getElementById("RW").style.display = "flex";
        },

        activateTLF: function () {
            document.getElementById("TLF").style.display = "flex";
        },

        deactivateRW: function () {
            document.getElementById("RW").style.display = "none";
        },

        deactivateTLF: function () {
            document.getElementById("TLF").style.display = "none";
        },

        RW: function (Gate) {
            if (this.gegenstaende[this.index][2] == Gate) {
                if (this.gegenstaende[this.index][4] == "") {
                    //alert("Richtig");
                    Swal.fire(
                        'Richtig',
                        '',
                        'success'
                    )
                } else {
                    //alert("Richtig, ist außerdem noch auf dem TLF Fach " + this.gegenstaende[this.index][4]);
                    Swal.fire(
                        'Richtig',
                        'Zusätzlich in TLF Fach ' + this.gegenstaende[this.index][4],
                        'success'
                    )
                }
            } else if (this.gegenstaende[this.index][2] == "") {
                this.fehler++;
                //alert("Falsch! Das richtige Fach war auf dem TLF das Fach " + this.gegenstaende[this.index][4]);
                Swal.fire(
                    'Falsch!',
                    'Das richtige Fach war auf dem TLF das Fach ' + this.gegenstaende[this.index][4],
                    'error'
                )
            } else {
                this.fehler++;
                //alert("Falsch! Das richtige Fach war auf dem RW das Fach " + this.gegenstaende[this.index][2]);
                Swal.fire(
                    'Falsch!',
                    'Das richtige Fach war auf dem RW das Fach ' + this.gegenstaende[this.index][2],
                    'error'
                )
            }
            this.Next();
        },

        TLF: function (Gate) {
            if (this.gegenstaende[this.index][4] == Gate) {
                if (this.gegenstaende[this.index][2] == "") {
                    //alert("Richtig");
                    Swal.fire(
                        'Richtig',
                        '',
                        'success'
                    )
                } else {
                    //alert("Richtig, ist außerdem noch auf dem RW Fach " + this.gegenstaende[this.index][2]);
                    Swal.fire(
                        'Richtig',
                        'Zusätzlich in RW Fach ' + this.gegenstaende[this.index][2],
                        'success'
                    )
                }
            } else if (this.gegenstaende[this.index][4] == "") {
                this.fehler++;
                //alert("Falsch! Das richtige Fach war auf dem RW das Fach " + this.gegenstaende[this.index][2]);
                Swal.fire(
                    'Falsch!',
                    'Das richtige Fach war auf dem RW das Fach ' + this.gegenstaende[this.index][2],
                    'error'
                )
            } else {
                this.fehler++;
                //alert("Falsch! Das richtige Fach war auf dem TLF das Fach " + this.gegenstaende[this.index][4]);
                Swal.fire(
                    'Falsch!',
                    'Das richtige Fach war auf dem TLF das Fach ' + this.gegenstaende[this.index][4],
                    'error'
                )
            }
            this.Next();
        },

        shuffle: function (array) {
            let counter = array.length;

            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                let index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                let temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }

            return array;
        }
    },
    created() {
    },
    mounted() {
        document.onreadystatechange = () => {
            this.startGame();
        }
    }
}
</script>

<style lang="scss">
#leistungspruefung-thl {
    display: block !important;
    position:absolute !important;
    height:auto !important;
    bottom:0 !important;
    top:0 !important;
    left:0 !important;
    right:0 !important;
    margin-top: 4.5rem !important;
    margin-bottom: 4.5rem !important;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 4.5rem;
    height: 72vh;
    overflow-y: scroll;
    background-color: white;

    .Ueberschrift {
        text-align: center;
    }

    #RW,
    #TLF {
        /* font-family:'Courier New', Courier, monospace !important; */
        display: flex;
        justify-content: center;
    }

    #TLF {
        display: none;
    }

    .buttonsFahrzeugLinks {
        height: 100%;
        padding-right: 0px !important;
    }

    .buttonsFahrzeugRechts {
        height: 100%;
        padding-left: 0px !important;
    }

    .buttonTop {
        margin-top: 1rem;
    }

    .fahrzeugButton {
        display: inline-block;
        /*width: 3.8rem;*/
        width: 95%;
        height: 3.8rem;
        margin-bottom: 0.15rem !important;
        font-size: 1.4rem !important;
    }

    .buttonRechts {
        border-right: 3px solid black;
        border-top: 3px solid black;
        border-bottom: 3px solid black;
        background-color: inherit;
        color: black;
        border-left: transparent;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline: none !important;


        border-left: 3px solid black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    .buttonLinks {
        border-left: 3px solid black;
        border-top: 3px solid black;
        border-bottom: 3px solid black;
        background-color: inherit;
        color: black;
        border-right: transparent;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: none !important;


        border-right: 3px solid black;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .mada {
        margin-bottom: 2rem !important;
    }

    .Fahrzeug {
        /*height: auto;
    width: 100% !important;
    max-width:80% !important;*/
        height: 25rem;
        width: auto;
    }

    .fahrzeugContainer {
        padding: 0px !important;
    }
}
</style>