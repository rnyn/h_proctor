<style scoped>
.box {
  margin:10px;
}

.image{
  background-position: center center;
  background-repeat: no-repeat;
  overflow:hidden;
}

  </style>

  <template>

  <nuxt-link :to="'/texts/' + slug">

  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img :src="thumbnail" alt="Text Image">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ title }}</strong> <small> {{ publication }}</small> <small> {{ date }}</small>
            <br>
            {{ abstract  }}
          </p>
        </div>
      </div>
    </article>
  </div>

</nuxt-link>
</template>

<script>

export default {
  name: 'TextBox',
    props: ["title", "publication", "thumbnail", "abstract", "date", "slug", "fullText"]
};

</script>
