<style scoped>
#portrait {
  max-width:300px;
  border: 1px solid black;
  margin: 0 auto;
}

.image{
  margin: 0 auto;
  /* width: 100%; */
}

/* Placeholder styles */
.image-placeholder {
  width: 100%;
  height: 0;
  padding-top: 100%; /* Maintain aspect ratio */
  background-color: #f0f0f0; /* Placeholder color */
}

.container{
  font-family: 'Alegreya', serif;
  text-align:justify;
  margin:0 auto;
  max-width: 800px;
  min-width: 280px;
}

.container h4{
  /* font-style:italic; */
  max-width: 420px;
  margin:0 auto;
  padding:10px;
  text-align: center;
  font-family: 'Alegreya Sans SC', sans-serif;
}

#emailaddr{
  font-family:  monospace;
}

.content p{
  max-width:400px;
  margin:0 auto;
  padding-top:10px;
}

.level{
  padding:10px;
}
</style>

<template>
  <div class="container">
    <figure class="image">
      <div class="image-placeholder"></div> <!-- Placeholder -->
      <img src="~/assets/hp-marx.jpg" alt="Hannah Proctor" id="portrait" loading="lazy" @load="imageLoaded">
    </figure>

    <h4>Revolutionary psychologies, communist neurologies, red therapies </h4>
    <div class="content">
      <p>
        I'm a historian of the human sciences interested in intersections between left-wing politics and the psy’ disciplines, Communist and anti-Communist theories of the mind, histories and theories of radical psychiatry, theories and practices of Freudo-Marxism, and emotional histories of the left.
      </p>
      <p>My book <a href="https://www.versobooks.com/en-gb/products/970-burnout" target="_blank"><i>Burnout: The Emotional Experience of Political Defeat</i></a> (Verso, 2024) explores the psychological toll of political struggle in historical perspective, asking how activists have made sense of or worked through the emotional impacts of their political experiences, whether collectively or in isolation. </p>
      <p> I write an irregular newsletter called 'Unconsciousness raising' that explores overlaps, contradictions and antagonisms between left-wing political movements and psychoanalysis (and other psy sciences). You can sign up <a href="https://hhnnccnnll.substack.com/" target="blank">here</a>. </p>
      <p>
        My first monograph <a href="https://www.palgrave.com/gp/book/9783030350277#:~:text=Psychologies%20in%20Revolution%20%2D%20Alexander%20Luria's,History%20%7C%20Hannah%20Proctor%20%7C%20Palgrave%20Macmillan" target="_blank"><i>Psychologies in Revolution: Alexander Luria's 'Romantic
          Science' and Soviet Social History</i></a> was published as part of the Palgrave Macmillan series 'Mental Health in Historical Perspective' in 2020. 
      </p>
      <p>
        I hold a Wellcome Trust University Award at the Centre for the Social History of Health and Healthcare at the University of Strathclyde in Glasgow. I joined Strathclyde in 2019 to work on a project on Cold War era social science projects based in the US that investigated the ‘Soviet mind’ and am now researching international campaigns against the political abuse of psychiatry in the USSR. I was previously a postdoctoral fellow at the ICI Berlin, a Wellcome ISSF Fellow at Birkbeck and the University of Leeds, and taught at Bard College Berlin and Leuphana University in Germany. I completed my PhD at Birkbeck, University of London. Before that I worked in theatre admin and production for five years.          </p>
      <p>
        I've written for both academic and non-academic publications on topics including rayon stockings, gender and the death drive, utopian pedagogy, Communist motherhood, wrinkles, the aesthetics of fMRI, Soviet babies, revolutionary commemoration, British antipsychiatry, mourning, Carl Jung's influence on Jordan Peterson, depression, perfume and Ulrike Meinhof’s brain. I'm on the editorial collective of <i>Radical Philosophy</i>. I’m also a contributing editor at <i>Parapraxis Mag</i> and web/reviews editor of <i>History of the Human Sciences</i>.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Email</p>
          <p class="title is-size-6" id="emailaddr">proctor.hannah@gmail.com</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
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
