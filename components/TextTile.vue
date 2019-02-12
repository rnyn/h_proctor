<style scoped>
@import url('https://fonts.googleapis.com/css?family=Alegreya');

/* #tile-container{
  margin: 0 auto;
  width:100%;
} */
.image{
  font-family: 'Alegreya', serif;
}

.tile {
  padding:1px;
  max-width:400px;
  max-height:500px;
  float: left;
  position: relative;
  margin: 0 auto;
  margin-top:20px;
  margin-right:20px;
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
  color:#FB3C62;
   background-color:rgb(0,0,0,0.9);
   text-shadow: .5px .5px 1px pink;
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
   background-color:rgb(0,0,0,0.25);
   z-index: 1;

}
/* p{
  visibility: hidden;
} */

/* #abstract:hover {
   position: absolute;
   bottom: 50;
   left: 0;
   width: 100%;
   color:white;
   font-size:25px;
   background-color:rgb(0,0,0,0.3);
   z-index: 1;

} */

/* .notification{
  font-size: .85em;
} */

  </style>

  <template>
  <!-- <div class="container is-fullwidth" id="tile-container"> -->
  <a :href="url" target="_blank">

  <div class="tile is-parent">
    <article class="tile is-child" id="image-tile">

          <figure class="image">
            <img :src="thumbnail">
          <h3>{{publication}} <br> {{year}}/{{month}}</h3>

            <h2>{{title}}</h2>

          <!-- <p id="abstract"> {{ abstract }} </p> -->

          </figure>

        </article>
  </div>

</a>
<!-- </div> -->
</template>

<script>

export default {
  name: 'TextTile',
    props: ["title", "publication", "thumbnail", "abstract", "year", "month", "id", "url"]
};

</script>
