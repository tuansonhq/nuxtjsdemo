<template>
  <div class="">
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your dacks: </h3>
        <button class="btn btn_success" @click.prevent="openModal">Crate a Deck</button>
      </div>
      <ul class="decks-list">
        <deck-list v-for="deck in decks" :id="deck._id" :key="deck._id" :name="deck.name" :description="deck.description" :thumbnail="deck.thumbnail"/>
      </ul>
    </div>

<!--    Model   -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h3>Create a new Deck</h3>
        <deck-form @submit="onsubmit" />
      </div>
    </v-modal>
  </div>
</template>

<script>
import axios from 'axios'

import DeckForm from "@/components/Decks/DeckForm"
import DeckList from "@/components/Decks/DeckList"

export default {
  name: "IndexDesck",
  components : {
    DeckForm,
    DeckList
  },
  computed:{
    decks() {
      return this.$store.getters.decks;
    }
  },
  methods: {
    openModal(){
      this.$modal.open({ name: 'CreateDeckModal'})
    },
    onsubmit(deckData){
      axios.post('https://nuxtjsdemo-118b2-default-rtdb.firebaseio.com/decks.json',deckData)
        .then((data) =>{
          // eslint-disable-next-line no-console
          console.log(data)
        }).catch((e)=>{
        // eslint-disable-next-line no-console
        console.log(e)
      })
    }
  },
}
</script>

<style lang="scss">
  .decks-list{
    .deck{
      display: block;
    }
    li{
      margin-bottom: 1rem;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .deck-card{
      display: flex;
      height: 120px;
      flex-direction: row;
      img{
        width: 228px;
        height: auto;
      }
    }
  }
  .modal_body{
    background: #ffffff;
    padding: 1rem;
  }
</style>


