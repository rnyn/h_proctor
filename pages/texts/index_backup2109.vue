<style scoped>

/* .TextBox {
    padding-bottom: 10px;
} */

</style>

<template>

<section class="section">
    <div class="container">


                <article class="TextBox">
                <!-- <article class="TextCard"> -->

                    <!-- <TextCard v-for="text in texts" :key="text.slug" :id="text.id" :thumbnail="text.thumbnail" :title="text.title" :slug="text.slug" :abstract="text.abstract" :publication="text.publication" /> -->
                    <TextBox v-for="text in texts" :key="text.slug" :id="text.id" :thumbnail="text.thumbnail" :title="text.title" :slug="text.slug" :abstract="text.abstract" :publication="text.publication" :date="text.date" />


                </article>

        </div>
</section>

</template>

<script>

// import TextCard from '@/components/TextCard'
import TextBox from '@/components/TextBox'
//import TextListSidebar from '@/components/TextListSidebar'

export default {
  components:  {
    // TextCard
    TextBox
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
