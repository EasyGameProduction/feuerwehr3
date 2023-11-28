import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      hydranten: [
        {
          id: 1,
          art: "Unterflurhydrant",
          lat: "50.101476",
          lng: "10.142244",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 2,
          art: "Unterflurhydrant",
          lat: "50.100854",
          lng: "10.140927",
          durchlaufmenge: "150 l/min",
          bemerkung: ""
        },
        {
          id: 3,
          art: "Überflurhydrant",
          lat: "50.100342",
          lng: "10.13973",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 4,
          art: "Unterflurhydrant",
          lat: "50.10165",
          lng: "10.142583",
          durchlaufmenge: "80 l/min",
          bemerkung: ""
        },
        {
          id: 5,
          art: "Unterflurhydrant",
          lat: "50.102502",
          lng: "10.143095",
          durchlaufmenge: "125 l/min",
          bemerkung: "Auf der Begrenzung zwischen Gehsteig und Grünstreifen"
        },
        {
          id: 6,
          art: "Unterflurhydrant",
          lat: "50.103287",
          lng: "10.143425",
          durchlaufmenge: "125 l/min",
          bemerkung: ""
        },
        {
          id: 7,
          art: "Unterflurhydrant",
          lat: "50.101910",
          lng: "10.142975",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 8,
          art: "Unterflurhydrant",
          lat: "50.103213",
          lng: "10.144095",
          durchlaufmenge: "80 l/min",
          bemerkung: ""
        },
        {
          id: 9,
          art: "Unterflurhydrant",
          lat: "50.102092",
          lng: "10.144803",
          durchlaufmenge: "80 l/min",
          bemerkung: ""
        },
        {
          id: 10,
          art: "Unterflurhydrant",
          lat: "50.10135",
          lng: "10.14523",
          durchlaufmenge: "80 l/min",
          bemerkung: "Auf der Straße rechts vorm Feldweg"
        },
        {
          id: 11,
          art: "Überflurhydrant",
          lat: "50.10046",
          lng: "10.14563",
          durchlaufmenge: "80 l/min",
          bemerkung: "Links von der Pfarrheim Einfahrt"
        },
        {
          id: 12,
          art: "Unterflurhydrant",
          lat: "50.10150",
          lng: "10.14330",
          durchlaufmenge: "125 l/min",
          bemerkung: "Gegenüber der Stern-Einfahrt am Bordsteinrand"
        },
        {
          id: 13,
          art: "Unterflurhydrant",
          lat: "50.10138",
          lng: "10.14432",
          durchlaufmenge: "80 l/min",
          bemerkung: "Position ungenau!"
        },
        {
          id: 14,
          art: "Unterflurhydrant",
          lat: "50.100937",
          lng: "10.144393",
          durchlaufmenge: "80 l/min",
          bemerkung: "In der Seitenstraße"
        },
        {
          id: 15,
          art: "Überflurhydrant",
          lat: "50.100384",
          lng: "10.144500",
          durchlaufmenge: "125 l/min",
          bemerkung: "Links neben Hauswand"
        },
        {
          id: 16,
          art: "Unterflurhydrant",
          lat: "50.100027",
          lng: "10.145201",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 17,
          art: "Unterflurhydrant",
          lat: "50.099884",
          lng: "10.146112",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 18,
          art: "Unterflurhydrant",
          lat: "50.099666",
          lng: "10.144080",
          durchlaufmenge: "80 l/min",
          bemerkung: "Auf dem Parkplatz"
        },
        {
          id: 19,
          art: "Unterflurhydrant",
          lat: "50.099298",
          lng: "10.142934",
          durchlaufmenge: "200 l/min",
          bemerkung: ""
        },
        {
          id: 20,
          art: "Unterflurhydrant",
          lat: "50.099221",
          lng: "10.141542",
          durchlaufmenge: "100 l/min",
          bemerkung: "Auf dem Gehweg"
        },
        {
          id: 21,
          art: "Unterflurhydrant",
          lat: "50.09975690631743",
          lng: "10.140750515229318",
          durchlaufmenge: "100 l/min",
          bemerkung: "Auf dem Gehweg"
        },
        {
          id: 22,
          art: "Unterflurhydrant",
          lat: "50.098783",
          lng: "10.143942",
          durchlaufmenge: "150 l/min",
          bemerkung: ""
        },
        {
          id: 23,
          art: "Unterflurhydrant",
          lat: "50.097921",
          lng: "10.143825",
          durchlaufmenge: "150 l/min",
          bemerkung: ""
        },
        {
          id: 24,
          art: "Unterflurhydrant",
          lat: "50.097119",
          lng: "10.143716",
          durchlaufmenge: "150 l/min",
          bemerkung: ""
        },
        {
          id: 25,
          art: "Unterflurhydrant",
          lat: "50.096162",
          lng: "10.143590",
          durchlaufmenge: "150 l/min",
          bemerkung: ""
        },
        {
          id: 40,
          art: "Unterflurhydrant",
          lat: "50.104200",
          lng: "10.143333",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
        {
          id: 48,
          art: "Überflurhydrant",
          lat: "50.104254",
          lng: "10.143308",
          durchlaufmenge: "100 l/min",
          bemerkung: ""
        },
      ],

      leitungen: [
        {
          id: 0,
          bezeichnung: "PVC DN 200 PN 10",
          coords:[
          [50.101476, 10.142244], 
          [50.101249, 10.141753], 
          [50.101144, 10.141628], 
          [50.101000, 10.141322], 
          [50.100854, 10.140927],
          [50.100342, 10.13973]]
        }
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
