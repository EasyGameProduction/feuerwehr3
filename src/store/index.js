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
          id: 6,
          art: "Unterflurhydrant",
          lat: "50.101910",
          lng: "10.142975",
          durchlaufmenge: "100 l/min",
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
