<template>
  <form action="" @submit.prevent="onSave">
    <div class="form_group">
      <label for="name">Name:</label>
      <input
        id="name"
        v-model="editedDeck.name"
        class="name form_control" name="name" type="text" placeholder="Please enter name deck">
    </div>
    <div class="form_group">
      <label >Description:</label>
      <textarea
        v-model="editedDeck.description"
        class="desc form_control" name="desc" placeholder="Please enter description" />
    </div>
    <div class="form_group">
      <label for="file">Thumbnail:</label>
      <input
         id="file"
         v-model="editedDeck.thumbnail"
         class="file form_control" name="file" type="text" placeholder="https:example.com/foo.png">
      <div class="preview"></div>
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" @click.prevent="closeModal">Close</button>
      <button class="btn btn_success ml_3" type="submit">Create</button>
    </div>

  </form>
</template>

<script>
export default {
  name: "DeckForm",
  props: {
    deck: {
      type: Object,
      required: false,
      default: () =>({
          name: '',
          description: '',
          thumbnail: ''
        })
    }
  },
  data(){
    return{
      editedDeck: this.deck
        ? { ...this.deck}
        : {
        name: '',
        description: '',
        thumbnail: ''
      }
    }
  },
  methods:{
    closeModal(){
      this.$modal.close({ name: 'CreateDeckModal'})
    },
    onSave(){
      this.$emit('submit',this.editedDeck)
    }
  }
}
</script>

