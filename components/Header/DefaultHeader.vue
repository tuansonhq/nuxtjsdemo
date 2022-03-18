<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Setting</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "DefaultHeader"
}
</script>

<style lang="scss">
  header{
    background: #000;
    color: #fff;
    height: 60px;
    nav,ul{
      height: inherit;
    }
    ul{
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0;
      list-style: none!important;
      text-decoration: none;
      margin: auto 0;
      line-height: 60px;
      li{
        margin: 0 1.5rem;
        list-style: none!important;
        a{
          text-decoration: none;
          color: white;
          &:hover{
            text-decoration: underline;
          }
          &.nuxt-link-exact-active{
            color: red;
          }
        }
      }
    }
  }
</style>

