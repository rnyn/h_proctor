<style scoped>

#tile-container{
  display:flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: space-evenly;
}

[v-cloak] > * {display:none;}

</style>

<template>


<section class="section">
<div class="container" v-cloak id="tile-container">


                <!-- <article class="TextTile"> -->
                <!-- <article class="TextCard"> -->
                    <!-- <div class="tile-container"> -->
                    <!-- <TextCard v-for="text in texts" :key="text.slug" :id="text.id" :thumbnail="text.thumbnail" :title="text.title" :slug="text.slug" :abstract="text.abstract" :publication="text.publication" /> -->
                    <TextTile v-for="text in texts" :key="text.id" :id="text.id" :thumbnail="text.thumbnail" :title="text.title" :abstract="text.abstract" :publication="text.publication" :year="text.year" :month="text.month" :url="text.url" />
                    <!-- </div> -->

                <!-- </article> -->
</div>

</section>


</template>

<script>

// import TextCard from '@/components/TextCard'
import TextTile from '@/components/TextTile'


export default {
  components:  {
    TextTile
  },

   fetch ({store}) {
      store.dispatch('getTexts')
    },
  computed: {
    texts () {
      return this.$store.state.texts
    }
  }


}

</script>
