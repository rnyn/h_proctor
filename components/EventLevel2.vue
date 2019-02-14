<style scoped>
.event-link{
  color:#f12dff;
  text-decoration:underline;
}
.event-link:hover{
  color:#0000ff;
  text-decoration:none;
}

/* .event-link:active{
  color:black;
  text-decoration:none;
} */
</style>


<template>
  <nav class="level">
    <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <nuxt-link to="/events" class="event-link" router-link-exact-active><strong>&larr;Talks, Readings, Conferences</strong></nuxt-link>
          </p>
        </div>
      </div>
      <div class="level-right">
          <!-- <div class="level-item">
            <p class="subtitle is-5">
              <nuxt-link to="/events/series" class="event-link" router-link-exact-active><strong>Organized events and series</strong></nuxt-link>
            </p>
          </div> -->
        </div>
      </nav>

    </template>

    <script>


      export default {
        name: 'EventLevel2'
        };

    </script>
