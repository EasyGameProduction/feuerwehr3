<template>
    <Header ueberschrift="Login" />
    <div id="login">
        <input v-model="emailAdresse" placeholder="Email" ref="emailAdresse"><br>
        <input v-model="passwort" placeholder="Passwort" ref="passwort"><br>
        <button @click="login()">Anmelden</button>
        Test
    </div>
</template>
  
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

export default {
    name: 'EinsatzView',
    components: {
        Header,
        Footer
    },
    created() {
        //this.getUser('sebastianpfuelb@gmail.com');
    },
    methods: {
        async login() {
            var verschluesselung = await this.getUser();
            if (verschluesselung != false) {
                window.localStorage.setItem("konvKey", verschluesselung);
                window.location.href='/home/:' + verschluesselung;
            }
        },
        async getUser(){
            try{
                const response = await axios.get(
                    'http://192.168.178.65:5000/benutzer',
                    { params: { email: this.emailAdresse, passwort: this.passwort } }
                );
                console.log(response.data);
                if(response.data.freigeschalten){
                    return response.data.konvKey;
                } else{
                    Swal.fire(
                        'Fehler beim Anmelden!',
                        'Ihr Account muss erst vom Administrator freigeschalten werden!',
                        'error'
                    )
                    return false;
                }
            } catch (err){
                console.log(err);
                Swal.fire(
                    'Fehler beim Anmelden!',
                    'Überprüfen Sie Ihre Anmeldedaten!',
                    'error'
                )
                return false;
            }
        }

    },
    created(){
        const router = useRouter()
        if(localStorage.getItem("konvKey") != undefined){
            var path = '/:'+ localStorage.getItem("konvKey");
            router.push({ path: path });
        }
    }
}
</script>

<style lang="scss">
#login {
    margin-top: 8.6rem !important;

    button {
        width: 60%;
        height: 3.3rem;
        font-size: larger;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align: center;
        background-color: blue;
        color: white;
    }

    input {
        padding: 0;
        margin: 0;
        width: 80%;
        height: 3.3rem;
        font-size: larger;
        margin-bottom: 0.4rem;
        border: solid black 2px;
        border-radius: 8px;
        text-align: center;
    }
}
</style>
  