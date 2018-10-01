<style scoped>
.event-link{
  color:#FB3C62;
  text-decoration:underline;
}
.event-link:hover{
  color:#0000ff;
  text-decoration:none;
}
</style>


<template>
  <nav class="level">
    <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <nuxt-link to="/events" class="event-link"><strong>Talks, Readings, Conferences</strong></nuxt-link>
          </p>
        </div>
      </div>
      <div class="level-right">
          <div class="level-item">
            <p class="subtitle is-5">
              <nuxt-link to="/events/series" class="event-link"><strong>Organized events and series</strong></nuxt-link>
            </p>
          </div>
        </div>
      </nav>

    </template>

    <script>


      export default {
        name: 'EventLevel'
        };

    </script>
