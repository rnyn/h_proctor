

<template>

<section class="section">

    <div class="container">

      <EventLevel />

                <article class="EventBox">


                    <EventBox v-for="event in events" :key="event.id" :id="event.id" :eventTitle="event.eventTitle" :location="event.location" :title="event.title" :month="event.month" :abstract="event.abstract" :url="event.url" :year="event.year" />


                </article>

        </div>
</section>

</template>

<script>
// import EventTable from '@/components/EventTable'
import EventBox from '@/components/EventBox'
import EventLevel from '@/components/EventLevel'
export default {
  components:  {
    EventBox,
    EventLevel
  },

    fetch ({store}) {
      store.dispatch('getEvents')
    },
  computed: {
    events () {
      return this.$store.state.events
    }
  }


}

</script>
