<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck #{{ $route.params.id}}: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">Create a card</button>
        </div>
        <hr class="divider"/>
        <div class="r">
          <card-list v-for="card in cards" :key="card._id" :keyword="card.keyword" :picture="card.picture"/>
        </div>
      </div>
    </div>
    <!--    Model   -->
    <v-modal name="CreateCardModal">
      <div class="modal_body">
        <h3>Create a new Deck</h3>
        <form action="">
          <div class="form_group">
            <label for="name">Name:</label>
            <input id="name" class="name form_control" name="name" type="text" placeholder="Please enter name deck">
          </div>
          <div class="form_group">
            <label >Description:</label>
            <textarea  class="desc form_control" name="desc" placeholder="Please enter description" />
          </div>
          <div class="form_group">
            <label for="file">Thumbnail:</label>
            <input id="file" class="file form_control" name="file" type="file">
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
            <button class="btn btn_success ml_3" @click.prevent="createDeck">Create</button>
          </div>

        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import CardList from "~/components/Card/CardList";
export default {
  name: "IndexDemoId",
  components: {CardList},
  // validate({params}) {
  //   return test(params.id)
  // },
  asyncData(ctx) {
    return new Promise((resolve,reject) =>{
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(()=>{
        resolve({
          deck: {
            _id: 1234567891,
            // eslint-disable-next-line nuxt/no-this-in-fetch-data
            name: `HQGROUP ${ctx.params.id}`,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.',
            thumbnail: 'https://wallpaperaccess.com/full/3485271.jpg'
          },
        })
      },1500)
    }).then((data) =>{
      return data
    }).catch((e) =>{
      // eslint-disable-next-line no-console
      console.log(e)
    })

  },
  data() {
    return {
      cards: [
        {
          _id: 12345678901,
          picture: 'https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg',
          keyword: 'PHP Devoloper'
        },
        {
          _id: 12345678902,
          picture: 'https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg',
          keyword: 'Maketting'
        },
        {
          _id: 12345678903,
          picture: 'https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg',
          keyword: 'BA'
        },
        {
          _id: 12345678904,
          picture: 'https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg',
          keyword: 'Testter'
        },
        {
          _id: 12345678905,
          picture: 'https://www.rd.com/wp-content/uploads/2017/10/This-Is-the-Real-Difference-Between-Streets-Roads-and-Avenues_394392439-TTstudio.jpg',
          keyword: 'CEO'
        }
      ]
    }
  },
  methods: {
    closeModal(){
      this.$modal.close({ name: 'CreateCardModal'})
    },
    openModal(){

      this.$modal.open({ name: 'CreateCardModal'})
    },
  }
  // validate(ctx) {
  //   // eslint-disable-next-line no-console
  //   console.log(ctx)
  //   return /^[0-9]{9,12}$/.test(ctx.params.id)
  // }
}
</script>

<style lang="scss">
  section{
    padding-top: 3rem;
    .card{
      padding: 1rem;
      img{
        width: 60%;
      }
    }
    .divider{
      margin: 2rem 0;
    }
  }

  .modal_body{
    background: #ffffff;
    padding: 1rem;
  }
</style>
