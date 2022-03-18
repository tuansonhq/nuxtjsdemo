<template>
  <div class="c_3" >
    <div class="card">
      <div class="front-card">
        <img :src="picture">
      </div>
      <div class="back-card pt_2">
        <h6>{{ keyword }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    keyword: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  }
}
</script>


