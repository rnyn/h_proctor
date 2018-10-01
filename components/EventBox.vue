<style scoped>
.media-left{
  margin:auto;
  padding-right:5px;
}

#event-link{
  float:right;
}

#date{
  text-align:center;
  color:white;
}

.box{
  padding: 1px;
  margin-bottom: 5px;
  /* max-width: 1080px; */
  /* background-color:#FB3C62; */
  background-color: black;
  border: 1px;
}
.media-content{
  background-color:white;
}
.content{
  padding-left:10px;
  padding-top:5px;
}
#date{
  color:white;
  /* font-family: 'IBM Plex Mono', monospace; */
  font-family: monospace;
}
.media-left p{
  font-size: .85em;
  color:white;
}


  </style>

  <template>



  <div class="box">
    <article class="media">
      <div class="media-left">
        <p id="date">{{year}}<br>{{month}} </p>
        <!-- <span class="tag is-info is-medium">{{year}}/{{month}}</span> -->

      </div>
      <div class="media-content">
        <div class="content">
          <div class="media-right">
            <strong>{{ eventTitle }}</strong> <small>  {{ location }} </small> <a v-bind:href="url" target="_blank" id="event-link"><img src="images/baseline-link-24px.svg"></a>
              <br> <i>{{title}}</i><br> {{ abstract }}


          </div>
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
