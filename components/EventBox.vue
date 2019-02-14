<style scoped>


.media-left{
  margin:auto;
  padding-right:5px;
}

#event-link{
color:black;
text-shadow: .2px .2px .2px gray;

}

#date{
  text-align:center;
  color:white;
}

.box{
  padding: 1px;
  margin-bottom: 5px;

  background-color: black;
  border: 1px;
}
.media-content{
  background-color:white;
}
.content{
  padding-left:5px;
  padding-top:5px;
}
#date{
  color:white;
  font-family: monospace;

}
.media-left p{
  font-size: .85em;
  color:white;
}
.media-right{
  padding:2.5px;
}


  </style>

  <template>



  <div class="box">
    <article class="media">
      <div class="media-left">
        <p id="date">{{year}}<br>–<br>{{month}} </p>
        <!-- <span class="tag is-info is-medium">{{year}}/{{month}}</span> -->

      </div>
      <div class="media-content">
        <div class="content">
          <div class="media-right">
            <strong>{{ eventTitle }}</strong><br><a v-bind:href="url" target="_blank" id="event-link">{{location}}</a>
            <div v-if="title">'<span v-text="title"></span>'</div>
              <div v-if="abstract">> <span v-text="abstract"></span></div>


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
