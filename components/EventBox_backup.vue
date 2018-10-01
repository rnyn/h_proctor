<style scoped>
.media-left{
  margin:auto;
  padding-right:15px;
}
  </style>

  <template>



  <div class="box">
    <article class="media">
      <div class="media-left">
        {{year}}/{{month}}
        <!-- <figure class="image is-128x128">
          <img :src="thumbnail" alt="Text Image">
        </figure> -->
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ eventTitle }}</strong> <br> {{ location }} <br> <i>{{title}}</i> <br> <small> {{ abstract }}</small><br>
            <a v-bind:href="url" target="_blank"><img src="images/baseline-link-24px.svg"></a>
            <br>
          </p>
        </div>
      </div>
    </article>
  </div>


</template>

<script>


  export default {
    name: 'EventBox',
      props: ["year", "month", "location", "eventTitle", "title", "abstract", "url"]
  };

</script>
