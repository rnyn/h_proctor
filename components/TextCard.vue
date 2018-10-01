<style scoped>
.card {
  margin:20px;
  }</style>

<template>

<nuxt-link :to="'/texts/' + slug">


    <div class="card">

        <div class="card-image">
            <figure class="image is-2by1">
            <!-- <figure class="image is-2by1"> -->
                <!-- <img src="@/assets/720x240.png" alt="Placeholder image"> -->
                <!-- <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}" alt="Placeholder image"></div> -->
                <img :src="thumbnail" alt="PlaceholderImage" />
            </figure>
        </div>
        <div class="card-content">

            <p class="title is-3">{{ title }}</p>
            <!-- <p class="subtitle is-5"> {{ publication }}</p> -->
            <p class="text is-5"> {{ publication }}</p>
            <p class="text is-6"><i> {{ abstract }}</i></p>



        </div>
    </div>



</nuxt-link>

</template>

<script>

export default {
  name: 'TextCard',
    props: ["title", "publication", "thumbnail", "abstract", "date", "slug", "fullText"]
};

</script>
