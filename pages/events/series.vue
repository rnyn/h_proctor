
  <template>
    <section class="section">
      <div class="container">
          <EventLevel />
  <div class="columns">
      <div class="column is-half">
      <div class="card">
        <div class="image is-4by3">
          <figure>
      <img src="~/static/images/under-the-moon.jpg">
        </figure>
      </div>
        <div class="card-header">
        <div class="card-header-title">Under the Moon</div>
  </div>
        <div class="content"><blockquote><strong>MayDay Rooms</strong><br>London<br>2014-2016</blockquote></div>
        <!-- <div class="media-content"><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/178572763&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe></div> -->
      </div>

    </div>



      <div class="column is-half">
      <div class="card">
        <div class="card-image">
          <figure class="is-4by3">
          <img src="~/static/images/au-hasard.jpg">
        </figure>
      </div>
        <div class="card-header">
          <div class="card-header-title">Au Hasard Cine Club  <a href="https://auhasardcineclub.blogspot.com/" target="_blank"><i class="fas fa-link"></i></a></div>
            </div>
            <div class="content"><blockquote><strong>Chapel Cinema, Bethnal Green / Birkbeck Cinema, Gordon Square </strong><br>London<br>2011-2012</blockquote>
            </div>


        <div class="media-content">
          <div class="video-container">
        <!-- <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O45xCFvMKv0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
      </div>
    </div>


      </div>
    </div>
  </div>
  </div>

  </section>

  </template>

  <script>
  import EventLevel from '@/components/EventLevel'
  export default {
    components:  {

      EventLevel
    }
  }

  </script>
