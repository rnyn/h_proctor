<style scoped>
#home:active{
  background-color: #f12dff;
  }
.navbar-item:active{
  background-color: #f12dff;
  }


  .navbar {
    font-family: 'Roboto', sans-serif;
    /* font-weight:600; */
  }

  #burnout {
    color: #fe5300;
    font-weight: bold;
}


  </style>

<template>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">

        <div class="navbar-brand">
            <a class="navbar-item is-size-5" href="/" id="home">Hannah Proctor</a>
            <button @click="makeBurger" class="button navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">

                <!-- <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"> -->
                        <!-- <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span> -->
                      <!-- </a> -->
              <span></span>
              <span></span>
              <span></span>
</button>
        </div>
        <div class="navbar-menu" id="navMenu" v-bind:class="{ 'is-active': activator }">
            <div class="navbar-end">
                <nuxt-link class="navbar-item" to="/texts">Texts</nuxt-link>
                <nuxt-link class="navbar-item" to="/media">Media</nuxt-link>
               <!-- <nuxt-link class="navbar-item" to="/events">Events</nuxt-link> -->
                <nuxt-link class="navbar-item" to="/bio">Bio</nuxt-link>
                <nuxt-link class="navbar-item" to="/burnout" id="burnout">Burnout</nuxt-link>

            </div>
        </div>
</div>
    </nav>


</template>

 <script>
 export default {
  name: 'Navbar',
  data () {
    return {
      msg: '',
      activator: false
    }
  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
  }
}
 </script>
