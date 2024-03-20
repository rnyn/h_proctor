<style scoped>
@import url('https://fonts.googleapis.com/css?family=Alegreya');


.image{
  font-family: 'Alegreya', serif;
  position:relative; /* placeholder */
}

.tile{
  padding:1px;
  width:300px;
  margin-top:20px;
}
#image-tile{
  background-color: black;

}


.image:hover:after {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);

}

.image:hover h1{
  color:#FB3C62;
   background-color:rgb(0,0,0,0.9);
text-shadow: 1px 1px 2px pink, 0 0 1em blue, 0 0 0.1em blue;
}
.image:hover h3{
  color:#f12dff;
   background-color:rgb(0,0,0,0.9);
   /* text-shadow: .5px .5px 1px pink; */
}

h3 {
   position: absolute;
   top: 0px;
   text-align:center;
   width: 100%;
   color:white;
   font-size:1em;
   background-color:rgb(0,0,0,0.5);
   z-index:1;

}
h2 {
   position: absolute;
   top: 35%;
   left: 0;
   /* width: 100%; */
   color:white;
   text-shadow: 1px 1px 2px black;
   font-size:25px;
   background-color:rgb(0,0,0,0.27);
   z-index: 1;

}
/* placeholder */
 /* .image {
    position: relative;
  } */
  
  .image-placeholder {
    width: 100%;
    height: 0;
    /* padding-top: 56.25%;  */
    background-color: #f0f0f0; 
  }

  </style>

  <!-- <template>
  <a :href="url" target="_blank">

  <div class="tile is-parent">
    <article class="tile is-child" id="image-tile">

          <figure class="image">
            <img :src="thumbnail" loading="lazy">
          <h3>{{publication}} <br> {{year}}/{{month}}</h3>

            <h2>{{title}}</h2>


          </figure>

        </article>
  </div>

</a>
</template>

<script>

export default {
  name: 'TextTile',
    props: ["title", "publication", "thumbnail", "abstract", "year", "month", "id", "url"]
};

</script> -->

<template>
  <a :href="url" target="_blank">
    <div class="tile is-parent">
      <article class="tile is-child" id="image-tile">
        <figure class="image">
          <div class="image-placeholder"></div> <!-- Placeholder -->
          <img :src="thumbnail" loading="lazy" @load="imageLoaded"> <!-- Lazy loading -->
          <h3>{{ publication }} <br> {{ year }}/{{ month }}</h3>
          <h2>{{ title }}</h2>
        </figure>
      </article>
    </div>
  </a>
</template>

<script>
export default {
  name: 'TextTile',
  props: ["title", "publication", "thumbnail", "abstract", "year", "month", "id", "url"],
  methods: {
    imageLoaded() {
      const placeholder = document.querySelector('.image-placeholder');
      if (placeholder) {
        placeholder.style.opacity = '0';
      }
    }
  }
};
</script>