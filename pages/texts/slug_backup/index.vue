

<template>

<div class="container">

    <section class="section">
      <div class="container">


        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="/texts">Texts</a></li>
                <li class="is-active"><a href="#" aria-current="page">{{text.title}}</a></li>
            </ul>
        </nav>


        <div class="columns">
            <div class="column is-narrow">


            </div>


            <div class="column is-half">

                <!-- <TextView/> -->
                <section class="section">

                    <div class="text">
                      <div v-html="textContent"></div>
                      <!-- <disqus ref="disqus" v-bind:shortname="disqusShortname" :identifier="disqusId"></disqus> -->
                    </div>

                </section>

            </div>
            <div class="column is-one-quarter"> </div>
        </div>
      </div>

    </section>
</div>

</template>

<script type="text/babel">


import TextView from '@/components/TextView'

export default {
  layout: 'slug',
  components: {
      TextView,
},
head () {
     let text = this.text
     return {
       title: 'Hannah Proctor',
       meta: [
         {
           hid: text.meta.id,
           name: text.meta.name,
           content: text.meta.content
         }
       ]
     }
   },
  fetch ({store, params}) {
    store.dispatch('getTexts')
    store.dispatch('getTextWithSlug', params.slug)
  },
  computed: {
    text () {
      return this.$store.state.text
    },
    textContent () {
      let text = this.$store.state.text
      return require(`@/content/texts/${text.id}.md`)
    }
     

    // asyncData(context) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 text: [{
    //                         slug: "malibu-dumb",
    //                         title: "Catherine Malibu is real Dumbbbb",
    //                         abstract: "CM=RD, sincerely HP",
    //                         thumbnail: "@/assets/720x240.png",
    //                         fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sodales nulla, a sodales orci. Curabitur rhoncus rutrum ligula eget bibendum. Morbi facilisis gravida ipsum, eu condimentum ante. Ut ornare cursus urna, ut lacinia nulla tempus et. Maecenas ligula dolor, consectetur porttitor ligula id, ultrices posuere nisi. Nullam laoreet mi risus, a mattis est faucibus ac. Quisque eu ornare risus. Ut sed nisi quis lectus vestibulum placerat in sed enim. Fusce in ligula ligula. Cras id risus tristique, mollis tellus ac, finibus ipsum. Praesent enim risus, feugiat vel risus consectetur, elementum posuere nisi. Pellentesque habitant morbi tristique senectus et netus."
    //                     }, {
    //                         slug: "hp-ending",
    //                         title: "Notes on HP Ending",
    //                         abstract: "Now=RB ... Later=Cool",
    //                         thumbnail: "@/assets/720x240.png",
    //                         fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sodales nulla, a sodales orci. Curabitur rhoncus rutrum ligula eget bibendum. Morbi facilisis gravida ipsum, eu condimentum ante. Ut ornare cursus urna, ut lacinia nulla tempus et. Maecenas ligula dolor, consectetur porttitor ligula id, ultrices posuere nisi. Nullam laoreet mi risus, a mattis est faucibus ac. Quisque eu ornare risus. Ut sed nisi quis lectus vestibulum placerat in sed enim. Fusce in ligula ligula. Cras id risus tristique, mollis tellus ac, finibus ipsum. Praesent enim risus, feugiat vel risus consectetur, elementum posuere nisi. Pellentesque habitant morbi tristique senectus et netus."
    //
    //                     }, {
    //                         slug: "marx-freud-hp",
    //                         title: "Marx + Freud = Me",
    //                         abstract: "Memoirs of Dr. Proctor",
    //                         thumbnail: "@/assets/720x240.png",
    //                         fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sodales nulla, a sodales orci. Curabitur rhoncus rutrum ligula eget bibendum. Morbi facilisis gravida ipsum, eu condimentum ante. Ut ornare cursus urna, ut lacinia nulla tempus et. Maecenas ligula dolor, consectetur porttitor ligula id, ultrices posuere nisi. Nullam laoreet mi risus, a mattis est faucibus ac. Quisque eu ornare risus. Ut sed nisi quis lectus vestibulum placerat in sed enim. Fusce in ligula ligula. Cras id risus tristique, mollis tellus ac, finibus ipsum. Praesent enim risus, feugiat vel risus consectetur, elementum posuere nisi. Pellentesque habitant morbi tristique senectus et netus."
    //
    //                     }, {
    //                         slug: "rich-hp",
    //                         title: "Dildos Are Money",
    //                         abstract: "I'm rich",
    //                         thumbnail: "@/assets/720x240.png",
    //                         fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu sodales nulla, a sodales orci. Curabitur rhoncus rutrum ligula eget bibendum. Morbi facilisis gravida ipsum, eu condimentum ante. Ut ornare cursus urna, ut lacinia nulla tempus et. Maecenas ligula dolor, consectetur porttitor ligula id, ultrices posuere nisi. Nullam laoreet mi risus, a mattis est faucibus ac. Quisque eu ornare risus. Ut sed nisi quis lectus vestibulum placerat in sed enim. Fusce in ligula ligula. Cras id risus tristique, mollis tellus ac, finibus ipsum. Praesent enim risus, feugiat vel risus consectetur, elementum posuere nisi. Pellentesque habitant morbi tristique senectus et netus."
    //
    //                     }
    //
    //                 ].find(el => el.slug === context.params.slug)
    //             })
    //         }, 1500)
    //     })
    // }
}
}
</script>
