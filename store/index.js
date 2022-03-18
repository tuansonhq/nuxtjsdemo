import axios from "axios";

import  Vuex from 'vuex'

const createStore = ()=> {
  return new Vuex.Store({
    state: {
      decks: []
    },
    mutations: {
      setDecks(state, decks){
        state.decks = decks
      }
    },
    actions: {
      nuxtServerInit(vuexContext, ctx){
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(()=>{
            resolve({
              decks: [
                {
                  _id: 1234567891,
                  name: 'HQGROUP',
                  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
                  thumbnail: 'https://wallpaperaccess.com/full/3485271.jpg'
                },
                {
                  _id: 1234567892,
                  name: 'HQ PLAY',
                  description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
                  thumbnail: 'https://wallpapercave.com/wp/wp4040308.jpg'
                },
                {
                  _id: 1234567893,
                  name: 'GLOBALENT',
                  description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
                  thumbnail: 'https://c8.alamy.com/comp/M5565M/english-colorful-alphabets-letters-from-a-to-z-as-background-word-M5565M.jpg'
                }
              ]
            })
          },1500)
        }).then((data) =>{
          vuexContext.commit('setDecks', data.decks)
        })
      },
      setDecks(vuexContext, decks){
        vuexContext.commit('setDecks',decks)
      }
    },
    getters: {
      decks(state){
        return state.decks
      }
    }
  })
}



export default createStore
