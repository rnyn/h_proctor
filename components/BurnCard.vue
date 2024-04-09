<style scoped>
#cover {
  max-width: 300px;
  margin: 0 auto;
}

.image {
  margin: 0 auto;
  /* width: 100%; */
}



.container {
  font-family: 'Alegreya', serif;
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  min-width: 280px;
}

.container h4 {
  max-width: 420px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  font-family: 'Alegreya Sans SC', sans-serif;

}

.content h4 {
  max-width: 420px;
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  font-family: 'Alegreya Sans SC', sans-serif;

}

#preorderblock {
  padding-top: 10px;
  text-align: center;
}



#preorderlinks {
  padding-top: 5px;

}

.content p {
  max-width: 400px;
  margin: 0 auto;
  padding-top: 10px;
}


/* blockquote styling */

blockquote {
  margin: 0;
  padding: 5px 20px;
  /* 15px top/bottom, 20px left/right */
  background: none;
  /* Remove default background */
}


blockquote p::before {
  content: '\201C';
}

blockquote p::after {
  content: '\201D';
}

.content blockquote {
  border-left: 2px solid #CCCCCC;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 10px;
}
</style>
<template>
  <div class="container">
    <figure class="image">
      <img src="~/assets/burnout-cover.png" alt="Burnout: The Emotional Cover of Political Defeat - Book Cover"
        id="cover">
    </figure>
    <h4>Burnout: The Emotional Experience of Political Defeat</h4>
    <!-- preorder here -->
    <div class="block" id="preorderblock">
      <p class="heading">Order here:</p>
      <p class="title is-size-6" id="preorderlinks">
        <a href="https://www.versobooks.com/en-gb/products/970-burnout" target="_blank"><small>Verso Books</small></a>
      </p>
    </div>
    <div class="content">


      <p>
        <b>How to maintain hope in the face of despair.</b><br>
        In the struggle for a better world, setbacks are inevitable. Defeat can feel overwhelming at times, but it has to
        be endured. How then do the people on the front line keep going? To answer that question, Hannah Proctor draws on
        historical resources to find out how revolutionaries and activists of the past kept a grip on hope.
      </p>

      <p> <i>Burnout</i> considers despairing former Communards exiled to a penal colony in the South Pacific; exhausted
        Bolsheviks recuperating in sanatoria in the aftermath of the October Revolution; an ex-militant on the analyst’s
        couch relating dreams of ruined landscapes; Chinese peasants engaging in self-criticism sessions; a political
        organiser seeking advice from a spiritual healer; civil rights movement activists battling weariness; and a group
        of feminists padding a room with mattresses to scream about the patriarchy. Jettisoning self-help narratives and
        individualizing therapy talk, Proctor offers a different way forward - neither denial nor despair. Her cogent
        exploration of the ways militants have made sense of their own burnout demonstrates that it is possible to mourn
        and organise at once, and to do both without compromise.
      </p>
      <h4>Reviews</h4>

      <div class="block">
        <blockquote>
          <p>Hannah Proctor is one of the best writers on the left today, and this is an extraordinary and extremely
            timely book – a kaleidoscopic work of revolutionary history on what happens when our day doesn’t come and we
            have to cope with the consequences. Refusing both the easy temptations of left melancholia and forced ‘just
            another push, comrades!’ optimism, this is a book full of unromantic communist longing, deadpan humor, and
            hard-won wisdom.</p>
          <footer>
            <cite><small>— Owen Hatherley, author of The Ministry of Nostalgia</small></cite>
          </footer>
        </blockquote>
      </div>

      <div class="block">
        <blockquote>
          <p>Not since Freud first described war neurosis have we been treated to such an astonishing taxonomy of the
            human mind. In <i>Burnout</i>, Hannah Proctor takes that feeling we all have, and names it again and again,
            helping us to resee the past and present of revolutionary struggle. A must-read.</p>
          <footer>
            <cite><small>— Hannah Zeavin, Founding Editor, <i>Parapraxis</i></small></cite>
          </footer>
        </blockquote>
      </div>


      <h4>Events</h4>

      <p>10 April 2024, <a
          href="https://www.peeruk.org/talks-events-workshops/2024/4/10/book-launch-for-burn-out-by-hannah-proctor">London
          launch</a>, Peer Gallery</p>
      <p>11 April 2024, <a
          href="https://events.maydayrooms.org/e/13/burn-out-documenting-and-dealing-with-defeat-with-hannah-proctor">London
          talk</a>, MayDay Rooms</p>
      <p>18 April 2024, <a href="https://www.cca-glasgow.com/programme/book-launch-burnout">Glasgow launch</a>, CCA</p>

      <h4>Excerpts</h4>

      <p>

        "Beyond Left Melancholy" — <a href="https://thebaffler.com/salvos/beyond-left-melancholy-proctor" target="_blank">The Baffler</a>


      </p>

      <h4> Interviews </h4>
      <p>
      "We Can’t Ignore the Difficult Emotions of Political Defeat" — <a href="https://jacobin.com/2024/04/burnout-left-political-defeat-emotions" target="_blank">Jacobin</a>
    </p>
    <h4> Podcasts </h4>
    <p>
    "With or Without Hope" — <a href="https://www.versobooks.com/blogs/news/with-or-without-hope-hannah-proctor-ajay-singh-chaudhary" target="_blank">Verso Podcast</a>
    </p>
    
    </div>

  </div>
</template>