<template>
  <div class="ct">
    <div class="banner">
      <div class="thumbnail-banner">

      </div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">3 Popular Decks For You</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo.vue'

export default {
  name: 'IndexPage',
  Logo
}
</script>

<style lang="scss">
  .banner{
    height: 220px;
    margin-top: 2rem;
    .thumbnail-banner{
      background-size: cover;
      //background-position: center;
      height: inherit;
      background: url('~assets/images/banner.jpg') center center;
    }
  }
</style>

