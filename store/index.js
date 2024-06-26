import Vuex from "vuex";

const makeStore = () => {
  return new Vuex.Store({
    state: {
      texts: [],
      text: {},
      events: [],
      event: {}
    },
    mutations: {
      updateTexts(state, { texts }) {
        state.texts = texts;
      },
      updateText(state, { text }) {
        state.text = text;
      },

      updateEvents(state, { events }) {
        state.events = events;
      },
      updateEvent(state, { event }) {
        state.event = event;
      }
    },
    actions: {
      // getTextWithSlug({ commit, state }, slug) {
      //   let text = state.texts.find(text => {
      //     return text.slug === slug;
      //   });
      //   commit("updateText", { text: text });
      // },
      getTexts({ commit }) {
        commit("updateTexts", {
  texts: [
    {
      id: 56,
      slug: "final-prophecy",
      title: "Walter Benjamin’s Final Prophecy",
      thumbnail: require("~/assets/final-prophecy.jpg"),
      publication: "Jacobin",
      abstract:
        "",
      year: "2024",
      month: "04",
      url:
        "https://jacobin.com/2024/04/walter-benjamins-final-prophecy",
      meta: {
        author: "Hannah Proctor",
        title: "Walter Benjamin’s Final Prophecy",
        content: "",
        keywords: "Walter Benjamin, Judaism, marxism, revolution, religion, theory"
      }
    },
    {
      id: 55,
      slug: "psychic-numbing",
      title: "Psychic Numbing",
      thumbnail: require("~/assets/psychic-numbing.jpg"),
      publication: "Boston Review",
      abstract:
        "",
      year: "2024",
      month: "04",
      url:
        "https://www.bostonreview.net/articles/psychic-numbing/",
      meta: {
        author: "Hannah Proctor",
        title: "Psychic Numbing",
        content: "",
        keywords: "war, psychology, mind, national security, review, book"
      }
    },
    
    {
      id: 54,
      slug: "space-crone-review",
      title: "Ursula Le Guin's Space Crone",
      thumbnail: require("~/assets/space-crone-review.jpg"),
      publication: "Jacobin",
      abstract:
        "",
      year: "2023",
      month: "09",
      url:
        "https://jacobin.com/2023/09/ursula-le-guin-space-crones-review-science-fiction-feminism",
      meta: {
        author: "Hannah Proctor",
        title: "Ursula Le Guin's Space Crone",
        content: "",
        keywords: "Ursula Le Guin, SciFi, science ficiton, review, novel, literature, book"
      }
    },    
    {
      id: 53,
      slug: "science-social-history",
      title: "The Science of Social History",
      thumbnail: require("~/assets/science-social-history.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2023",
      month: "05",
      url:
        "https://tribunemag.co.uk/2023/05/the-science-of-social-history",
      meta: {
        author: "Hannah Proctor",
        title: "The Science of Social History",
        content: "",
        keywords: "Alexander Luria, psychology, communism, revolution, Soviet Union"
      }
    },
    {
      id: 52,
      slug: "nothing-but-defeats",
      title: " ‘Nothing but defeats’: Fassbinder beyond fragments",
      thumbnail: require("~/assets/nothing-but-defeats.jpg"),
      publication: "Another Gaze",
      abstract:
        "",
      year: "2023",
      month: "06",
      url:
        "https://www.anothergaze.com/nothing-defeats-fassbinder-beyond-fragments/",
      meta: {
        author: "Hannah Proctor",
        title: "Nothing but defeats: Fassbinder beyond fragments",
        content: "",
        keywords: "Fassbinder, criticism, essay, autobiography, film"
      }
    },
    {
      id: 51,
      slug: "never-been-postmodern",
      title: "We Have Never Been Postmodern",
      thumbnail: require("~/assets/never-been-postmodern.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2023",
      month: "03",
      url:
        "https://tribunemag.co.uk/2023/03/we-have-never-been-postmodern",
      meta: {
        author: "Hannah Proctor",
        title: "We Have Never Been Postmodern",
        content: "",
        keywords: "Stuart Jeffries, criticism, review, culture, postmodernity"
      }
    },
    {
      id: 52,
      slug: "road-to-nowhere",
      title: "Road to nowhere: Sergei Loznitsa and Russia’s wartime ghosts",
      thumbnail: require("~/assets/road-to-nowhere.jpg"),
      publication: "Klassiki",
      abstract:
        "",
      year: "2023",
      month: "02",
      url:
        "https://klassiki.online/road-to-nowhere-sergei-loznitsa-and-russias-wartime-ghosts/",
      meta: {
        author: "Hannah Proctor",
        title: "",
        content: "",
        keywords: "history, criticism, politics, war, film, Sergei, Loznitsa, Russia, England"
      }
    },{
      id: 51,
      slug: "sympathetic-devils",
      title: "Sympathetic Devils",
      thumbnail: require("~/assets/sympathetic-devils.jpg"),
      publication: "Parapraxis",
      abstract:
        "",
      year: "2023",
      month: "01",
      url:
        "https://www.parapraxismagazine.com/articles/sympathetic-devils",
      meta: {
        author: "Hannah Proctor",
        title: "Sympathetic Devils: The psychic life of Britain between Godard and the Queen",
        content: "",
        keywords: "history, criticism, politics, psychoanalysis, film, Godard, UK, England"
      }
    },{
      id: 50,
      slug: "coming-up-for-air",
      title: "Coming Up for Air",
      thumbnail: require("~/assets/coming-up-for-air.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2022",
      month: "12",
      url:
        "https://tribunemag.co.uk/2022/12/coming-up-for-air",
      meta: {
        author: "Hannah Proctor",
        title: "A new speculative fiction about a revolutionary near future takes the form of an oral history project with inhabitants of the New York Commune, and imagines how abolitionist theories might play out in practice.",
        content: "",
        keywords: "history, criticism, politics, fiction, abolitionism, utopia, New York Commune"
      }
    },{
      id: 49,
      slug: "flowers-through-concrete",
      title: "Flowers Through Concrete",
      thumbnail: require("~/assets/flowers-through-concrete.jpg"),
      publication: "Journal of Contemporary History",
      abstract:
        "",
      year: "2022",
      month: "12",
      url:
        "https://journals.sagepub.com/doi/full/10.1177/00220094221130400g",
      meta: {
        author: "Hannah Proctor",
        title: "Book Review: Flowers Through Concrete: Explorations in Soviet Hippieland by Juliane Fürst",
        content: "",
        keywords: "history, criticism, politics, book review, counterculture, Soviet Union, communism, hippies"
      }
      },{
      id: 48,
      slug: "revolutionary-patience",
      title: "Revolutionary Patience",
      thumbnail: require("~/assets/revolutionary-patience.jpg"),
      publication: "Another Screen",
      abstract:
        "",
      year: "2022",
      month: "09",
      url:
        "https://www.another-screen.com/and-who-do-you-hit-helga-reidemeister",
      meta: {
        author: "Hannah Proctor",
        title: "Revolutionary Patience Housing, violence and the family in two films by Helga Reidemeister",
        content: "",
        keywords: "history, criticism, politics, film, Berlin, Helga Reidemeister"
      }
    },{
      id: 47,
      slug: "your-move",
      title: "Your Move, Creep!",
      thumbnail: require("~/assets/your-move.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2022",
      month: "8",
      url:
        "https://tribunemag.co.uk/2022/08/your-move-creep",
      meta: {
        author: "Hannah Proctor",
        title: "Your Move, Creep!",
        content: "",
        keywords: "history, film, gender, criticism, Paul Verhoeven"
      }
    },{
      id: 46,
      slug: "dancing-ruins",
      title: "Dancing in the Ruins",
      thumbnail: require("~/assets/dancing-ruins.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2022",
      month: "05",
      url:
        "https://tribunemag.co.uk/2022/05/dancing-in-the-ruins",
      meta: {
        author: "Hannah Proctor",
        title: "Dancing in the Ruins",
        content: "",
        keywords: "history, book review, politics, Berlin, Ulrich, Gutmair"
      }
    },{
      id: 45,
      slug: "lost-at-sea",
      title: "Lost at Sea",
      thumbnail: require("~/assets/lost-at-sea.jpg"),
      publication: "Radical Philosophy",
      abstract:
        "",
      year: "2022",
      month: "04",
      url:
        "https://www.radicalphilosophy.com/reviews/individual-reviews/lost-at-sea",
      meta: {
        author: "Hannah Proctor",
        title: "Lost at sea: Review of Enzo Traverso, Revolution: An Intellectual History ",
        content: "",
        keywords: "history, book review, politics, revolution"
      }
    },{
      id: 44,
      slug: "coming-of-age",
      title: "Free: Coming of Age at the End of History",
      thumbnail: require("~/assets/coming-of-age.jpg"),
      publication: "Red Pepper",
      abstract:
        "",
      year: "2022",
      month: "01",
      url:
        "https://www.redpepper.org.uk/review-free-coming-of-age-at-the-end-of-history/",
      meta: {
        author: "Hannah Proctor",
        title: "Free: Coming of Age at the End of History",
        content: "",
        keywords: "history, book review, politics, freedom"
      }
    },{
      id: 43,
      slug: "smells-like-world-spirit",
      title: "Smells Like World Spirit",
      thumbnail: require("~/assets/smells-like-world-spirit.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2021",
      month: "12",
      url:
        "https://tribunemag.co.uk/2021/12/smells-like-world-spirit",
      meta: {
        author: "Hannah Proctor",
        title: " Smells Like World Spirit",
        content: "",
        keywords: "history, book review, perfume"
      }
    },{
      id: 42,
      slug: "economies-without-libidos",
      title: "Economies Without Libidos",
      thumbnail: require("~/assets/economies-without-libidos.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2021",
      month: "10",
      url:
        "https://tribunemag.co.uk/2021/10/economies-without-libidos",
      meta: {
        author: "Hannah Proctor",
        title: "Economies Without Libidos",
        content: "",
        keywords: "Keti Chukhrov, book review, Soviet Union, socialism, desire"
      }
    },{
      id: 41,
      slug: "unbreak-our-hearts",
      title: "Unbreak our Hearts",
      thumbnail: require("~/assets/unbreak-hearts.png"),
      publication: "Tribune",
      abstract:
        "",
      year: "2021",
      month: "06",
      url:
        "https://tribunemag.co.uk/2021/06/unbreak-our-hearts",
      meta: {
        author: "Hannah Proctor",
        title: "Unbreak Our Hearts",
        content: "",
        keywords: "Depression, Jonathan, Sadowsky, politics, mental illness"
      }
    },{
      id: 40,
      slug: "notes-anti-fascism-psychology",
      title: "Notes on Anti-Fascism and Psychology",
      thumbnail: require("~/assets/notes-anti-fascism-psychology.png"),
      publication: "Verso Blog",
      abstract:
        "",
      year: "2021",
      month: "04",
      url:
        "https://www.versobooks.com/blogs/5045-notes-on-anti-fascism-and-psychology",
      meta: {
        author: "Hannah Proctor",
        title: "Notes on Anti-Fascism and Psychology",
        content: "",
        keywords: "Psychology, fascism, childhood, Adorno, Authoritarian, Personality"
      }
    },{
      id: 39,
      slug: "ruins-mind",
      title: "Ruins of the Mind",
      thumbnail: require("~/assets/ruins-mind.png"),
      publication: "Tribune",
      abstract:
        "",
      year: "2021",
      month: "03",
      url:
        "https://tribunemag.co.uk/2021/03/ruins-of-the-mind",
      meta: {
        author: "Hannah Proctor",
        title: "The Ruins of the Mind",
        content: "",
        keywords: "Abi-Rached, psychiatry, Lebanon"
      }
    },{
      id: 38,
      slug: "care-manifesto",
      title: "The Care Manifesto",
      thumbnail: require("~/assets/care-manifesto.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2020",
      month: "12",
      url:
        "https://tribunemag.co.uk/2020/12/the-care-manifesto",
      meta: {
        author: "Hannah Proctor",
        title: "The Care Manifesto",
        content: "",
        keywords: "Covid-19, care, book review, capitalism"
      }
    },{
      id: 37,
      slug: "marx-coca-cola",
      title: "Between Marx and Coca-Cola",
      thumbnail: require("~/assets/marx-coca-cola.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2020",
      month: "11",
      url:
        "https://tribunemag.co.uk/2020/11/between-marx-and-coca-cola",
      meta: {
        author: "Hannah Proctor",
        title: "Between Marx and Coca-Cola",
        content: "",
        keywords: "Situationist International, Situationists, book review, Guy Debord"
      }
    },{
      id: 36,
      slug: "dizzy-defeat",
      title: "Dizzy with Defeat",
      thumbnail: require("~/assets/dizzy-defeat.jpg"),
      publication: "Tribune",
      abstract:
        "",
      year: "2020",
      month: "06",
      url:
        "https://tribunemag.co.uk/2020/06/dizzy-with-defeat",
      meta: {
        author: "Hannah Proctor",
        title: "Dizzy with Defeat",
        content: "",
        keywords: "Victor Serge, communism, book review, USSR"
      }
    },
    {
      id: 35,
      slug: "gornick-romance",
      title: "Read Vivian Gornick’s Romance of American Communism",
      thumbnail: require("~/assets/gornick-romance.jpg"),
      publication: "Jacobin",
      abstract:
        "",
      year: "2020",
      month: "04",
      url:
        "https://www.jacobinmag.com/2020/04/vivian-gornick-romance-of-american-communism-review",
      meta: {
        author: "Hannah Proctor",
        title: "Read Vivian Gornick’s Romance of American Communism",
        content: "",
        keywords: "Vivian Gornick, communism, book review"
      }
    },
    {
      id: 34,
      slug: "tzk-freud-reich",
      title: "Why Love Your Neighbour? The Dissent on Private Property between Freud and Reich",
      thumbnail: require("~/assets/tzk-freud-reich.jpg"),
      publication: "Texte zur Kunst",
      abstract:
        "",
      year: "2020",
      month: "04",
      url:
        "https://www.textezurkunst.de/117/",
      meta: {
        author: "Hannah Proctor",
        title: "Why Love Your Neighbour? The Dissent on Private Property between Freud and Reich",
        content: "",
        keywords: "Sigmund Freud, Wilhelm Reich, private property"
      }
    },
    {
      id: 33,
      slug: "bleierne-zeit",
      title: "Women on the Edge: History, Temporality, Sisterhood and Political Militancy",
      thumbnail: require("~/assets/bleierne-zeit.jpg"),
      publication: "Another Gaze",
      abstract:
        "History, Temporality, Sisterhood and Political Militancy in Marge Piercy’s Vida and Margarethe von Trotta’s Die bleierne Zeit",
      year: "2019",
      month: "12",
      url:
        "https://www.anothergaze.com/women-edge-history-temporality-sisterhood-political-militancy-marge-piercys-vida-margarethe-von-trottas-die-bleierne-zeit/",
      meta: {
        author: "Hannah Proctor",
        title: "Women on the Edge: History, Temporality, Sisterhood and Political Militancy",
        content: "",
        keywords: "Marge Piercy, Margarethe von Trotta, politics, sexuality"
      }
    },
    {
      id: 32,
      slug: "dialectical-fairyland",
      title: "A Dialectical Fairyland: An Interview with Hannah Proctor and Sam Dolbear",
      thumbnail: require("~/assets/dialectical-fairyland.png"),
      publication: "Tribune",
      abstract:
        "Hannah Proctor and Sam Dolbear talk to Tribune about Arcades Materials, a series of pamphlets sparking off from Walter Benjamin's Arcades Project.",
      year: "2019",
      month: "10",
      url:
        "https://tribunemag.co.uk/2019/10/a-dialectical-fairyland",
      meta: {
        author: "Hannah Proctor, Sam Dolbear",
        title: "A Dialectical Fairyland",
        content: "",
        keywords: "Dialectics, Walter Benjamin"
      }
    },
    {
      id: 31,
      slug: "thinking-differently-ussr",
      title: "Thinking Differently in the USSR",
      thumbnail: require("~/assets/thinking-differently-ussr.jpg"),
      publication: "History of the Human Sciences",
      abstract:
        "Review: Rebecca Reich. State of Madness: Psychiatry, Literature and Dissent After Stalin",
      year: "2019",
      month: "10",
      url:
        "http://www.histhum.com/thinking-differently-in-the-ussr/",
      meta: {
        author: "Hannah Proctor",
        title: "Thinking Differently in the USSR",
        content: "",
        keywords: ""
      }
    },
    {
      id: 30,
      slug: "everything-is-true",
      title: "Everything is True, Nothing is Permitted",
      thumbnail: require("~/assets/everything-is-true.jpg"),
      publication: "Tribune",
      abstract:
        "The results of the notorious ‘Stalinist Stanford Prison Experiment’, DAU, were finally shown to the public this spring. What does this blurring of fantasy and reality achieve?",
      year: "2019",
      month: "07",
      url:
        "https://tribunemag.co.uk/2019/07/everything-is-true-nothing-is-permitted",
      meta: {
        author: "Hannah Proctor",
        title: "Everything is True, Nothing is Permitted",
        content: "",
        keywords: "Tribune, DAU"
      }
    },
    {
      id: 29,
      slug: "marx-freud",
      title: "From Marx to Freud",
      thumbnail: require("~/assets/marx-freud.jpeg"),
      publication: "Tribune",
      abstract:
        "In 1969, Herbert Marcuse's ‘Essay on Liberation’ combined Marx and Freud, and inspired thousands of radicals. How liberating is it fifty years later?",
      year: "2019",
      month: "05",
      url:
        "https://tribunemag.co.uk/2019/05/from-marx-to-freud",
      meta: {
        author: "Hannah Proctor",
        title: "From Marx to Freud",
        content: "",
        keywords: "Karl Marx, Sigmund Freud, Herbert Marcuse, Essay on Liberation, politics, sexuality"
      }
    },
    {
      id: 28,
      slug: "varda-obit",
      title: "Agnès Varda (1928–2019)",
      thumbnail: require("~/assets/varda-obit.jpg"),
      publication: "Jacobin",
      abstract:
        "Agnès Varda’s films evinced a love of, rather than mere fascination with, people.",
      year: "2019",
      month: "04",
      url:
        "https://www.jacobinmag.com/2019/04/agnes-varda-obituary-filmmaking",
      meta: {
        author: "Hannah Proctor",
        title: "Agnès Varda (1928–2019)",
        content: "",
        keywords: "film, obituary, obit, Agnès Varda, film, photography"
      }
    },
    {
      id: 27,
      slug: "exhausting-concepts",
      title: "Pascal Chabot, Global Burnout",
      thumbnail: require("~/assets/exhausting-concepts.jpg"),
      publication: "Radical Philosophy",
      abstract:
        "Philosophers have often described society as being either physically sick or mentally ill, but the diagnoses differ. Metaphors proliferate and medical paradigms shift but neurological and psychological pathologies seem to predominate.",
      year: "2019",
      month: "04",
      url:
        "https://www.radicalphilosophy.com/reviews/individual-reviews/exhausting-concepts",
      meta: {
        author: "Hannah Proctor",
        title: "Exhausting Concepts",
        content: "",
        keywords: "Philosophy, Catherine Malabou, Mark Fisher, Tiziana Terranova, Pascal Chabot, book review"
      }
    },
    {
      id: 26,
      slug: "review-woman-myth",
      title: "Angela M. Sells, Sabina Spielrein: The Woman and the Myth",
      thumbnail: require("~/assets/review-woman-myth.jpg"),
      publication: "Psychoanalysis and History",
      abstract:
        "Angela M. Sells's new book Sabina Spielrein: The Woman and the Myth recalls and sometimes explicitly draws on feminist work from the 1980s and 1990s that reappraised the position of women – both analysts and analysands – in the history of psychoanalysis.",
      year: "2019",
      month: "03",
      url:
        "https://www.euppublishing.com/doi/full/10.3366/pah.2019.0284",
      meta: {
        author: "Hannah Proctor",
        title: "Angela M. Sells, Sabina Spielrein: The Woman and the Myth",
        content: "",
        keywords: "Psychoanalysis and History, Sabina Spielrein, Angela M. Sells, review, Vienna, Carl Jung, Hélène Cixous, Sigmund Freud"
      }
    },
    {
      id: 26,
      slug: "communist-feelings",
      title: "Communist Feelings (with Larne Abse Gogarty)",
      thumbnail: require("~/assets/communist-feelings.jpeg"),
      publication: "New Socialist",
      abstract:
        "This piece originated in a shared interest in 1956 as a turning point in British and US communism.",
      year: "2019",
      month: "03",
      url:
        "https://newsocialist.org.uk/communist-feelings-lessing-gornick/",
      meta: {
        author: "Hannah Proctor, Larne Abse Gogarty",
        title: "Communist Feelings",
        content: "",
        keywords: "New Socialist, Larne Abse Gogarty, theory, Marxism, culture, Doris Lessing, Vivian Gornick"
      }
    },
    {
      id: 25,
      slug: "macabre-dancing",
      title: "Macabre Dancing: Review of Die Kinder der Toten",
      thumbnail: require("~/assets/macabre-dancing.jpg"),
      publication: "Another Gaze",
      abstract:
        "Elfriede Jelinek’s novel Die Kinder der Toten, which has yet to be translated into English, tends to be described in forbidding terms: long, fractured, obscure, genre-bending, kitsch, pun-filled, perspective-switching, surreal.",
      year: "2019",
      month: "02",
      url:
        "http://www.anothergaze.com/macabre-dancing-die-kinder-der-toten-children-dead-berlinale/",
      meta: {
        author: "Hannah Proctor",
        title: "Macabre Dancing: Review of Die Kinder der Toten",
        content: "",
        keywords: "Elfriede Jelinek, Die Kinder der Toten, Berlinale, Review, Another Gaze"
      }
    },
    {
      id: 24,
      slug: "formal-experimentation",
      title: "Oisín Wall, The British Anti-psychiatrists",
      thumbnail: require("~/assets/formal-experimentation.jpg"),
      publication: "History of the Human Sciences",
      abstract:
        "One of the most persuasive arguments Wall advances in The British Anti-Psychiatrists, and the book’s main intervention, is an insistence on the importance of acknowledging continuities and connections between the theories, practices and communities of the mainstream psy- disciplines and those of anti-psychiatry.",
      year: "2019",
      month: "02",
      url:
        "http://www.histhum.com/formal-experimentation/",
      meta: {
        author: "Hannah Proctor",
        title: "Revolutionary Romance",
        content: "",
        keywords: "History of Human Sciences, R.D. Laing, anti-psychiatry, psychiatry, psychology, review, Oisín Wall"
      }
    },
    {
      id: 23,
      slug: "revolutionary-romance",
      title: "Revolutionary Romance",
      thumbnail: require("~/assets/revolutionary-romance.jpg"),
      publication: "Jacobin",
      abstract:
        "Why should extravagant pleasures and intense feelings be reserved for the bourgeoisie?",
      year: "2019",
      month: "02",
      url:
        "https://jacobinmag.com/2019/02/russian-revolution-love-kollontai-luxemburg",
      meta: {
        author: "Hannah Proctor",
        title: "Revolutionary Romance",
        content: "",
        keywords: "Jacobin, Alexandra Kollontai, Rosa Luxembourg, Soviet Union"
      }
    },
    {
      id: 22,
      slug: "resistance",
      title: "Resistance",
      thumbnail: require("~/assets/ici-resistance.jpg"),
      publication: "Re- An Errant Glossary",
      abstract:
        "Jordan Peterson’s message is simple: ‘evil’ is endemic to humanity and the domination of some people over others is biologically grounded",
      year: "2019",
      month: "01",
      url:
        "https://www.ici-berlin.org/oa/ci-15/",
      meta: {
        author: "Hannah Proctor",
        title: "Resistance",
        content: "",
        keywords: ""
      }
    },

    {
      id: 21,
      slug: "tribune-peterson",
      title: "A Brief History of Jordan Peterson",
      thumbnail: require("~/assets/tribune-peterson.jpg"),
      publication: "Tribune",
      abstract:
        "Jordan Peterson’s message is simple: ‘evil’ is endemic to humanity and the domination of some people over others is biologically grounded",
      year: "2018",
      month: "09",
      url:
        "https://tribunemag.co.uk/2019/01/a-brief-history-of-jordan-peterson",
      meta: {
        author: "Hannah Proctor",
        title: "A Brief History of Jordan Peterson",
        content: "",
        keywords: ""
      }
    },
    {
      id: 20,
      slug: "mad-world",
      title: "Mad World: Radical Psychiatry and 1968",
      thumbnail: require("~/assets/mad-world.jpg"),
      publication: "Verso Blog",
      abstract:
        "On the circulation of radical psychiatric theories and influence of radical psychiatric practices in the social movements of the late sixties and early seventies. Sex, drugs, giant cucumbers and diagnoses of a crazy society.",
      year: "2018",
      month: "06",
      url:
        "https://www.versobooks.com/blogs/3888-mad-world-radical-psychiatry-and-1968",
      meta: {
        author: "Hannah Proctor",
        title: "Mad World: Radical Psychiatry and 1968",
        content: "",
        keywords: ""
      }
    },
    {
      id: 19,
      slug: "soviet-babies",
      title: "Soviet Babies",
      thumbnail: require("~/assets/soviet-babies.jpg"),
      publication: "Art Talk",
      abstract: "Can an adult really access their own childhood sensations? Can an adult know how a baby experiences the world? Do all babies perceive the world identically? Are they all born alike? Does the kind of world a baby inhabits influence even its earliest interactions with the extrauterine world? What exactly is a baby anyway? This is an essay about some Soviet understandings of early infancy.",
      year: "2018",
      month: "06",
      url: "http://artalk.cz/wp-content/uploads/2018/06/AR-2-EN-125239.pdf",
      meta: {
        author: "Hannah Proctor",
        title: "Soviet Babies",
        content:
          "Can an adult really access their own childhood sensations? Can an adult know how a baby experiences the world? Do all babies perceive the world identically? Are they all born alike? Does the kind of world a baby inhabits influence even its earliest interactions with the extrauterine world? What exactly is a baby anyway?",
        keywords: ""
      }
    },
    {
      id: 18,
      slug: "fucking-freeways",
      title: "Fucking under Freeways: California at the End of History",
      thumbnail: require("~/assets/fucking-freeways.jpg"),
      publication: "Blindfield Journal",
      abstract: "A fragmentary drive across the highways of California with some jaded Europeans projecting their own visions of a perpetual present onto the desert sand.",
      year: "2018",
      month: "04",
      url:
        "https://blindfieldjournal.com/2018/03/19/fucking-under-freeways-california-at-the-end-of-history/",
      meta: {
        author: "Hannah Proctor",
        title: "Fucking under Freeways: California at the End of History",
        content: "",
        keywords: ""
      }
    },
    {
      id: 17,
      slug: "pagentry-picket-line",
      title: "Pageantry and the picket line: on the psychology of striking",
      thumbnail: require("~/assets/pageantry-picket-line.jpg"),
      publication: "History of the Human Sciences",
      abstract:
        "The terms ‘class consciousness’ and ‘political consciousness’ in reflections on the performance function as psychological concepts despite rarely having been explicitly understood as such, and as concepts which seem to have gone largely un-thematised within the ‘psy’ disciplines.",
      year: "2018",
      month: "03",
      url:
        "http://www.histhum.com/pageantry-and-the-picket-line-on-the-psychology-of-striking/",
      meta: {
        author: "Hannah Proctor",
        title: "Pageantry and the picket line: on the psychology of striking",
        content:
          "The terms ‘class consciousness’ and ‘political consciousness’ in reflections on the performance function as psychological concepts despite rarely having been explicitly understood as such, and as concepts which seem to have gone largely un-thematised within the ‘psy’ disciplines.",
        keywords: "Striking,Psychology,Protest"
      }
    },
    {
      id: 16,
      slug: "revolutionary-commemoration",
      title: "Revolutionary Commemoration",
      thumbnail: require("~/assets/revolutionary-commemoration.jpg"),
      publication: "Radical Philosophy",
      abstract: "On the centenary of the October Revolution 1917, this piece reflects on the paradoxes of memorialising left-wing historical events. Can historic examples of revolutionary commemoration point towards an appropriate form for revolutionaries hoping to transform the present to reflect on revolutionary pasts? Or is the very notion of commemorating revolution a contradiction in terms?",
      year: "2018",
      month: "02",
      url:
        "https://www.radicalphilosophy.com/article/revolutionary-commemoration",
      meta: {
        author: "Hannah Proctor",
        title: "Revolutionary Commemoration",
        content: "",
        keywords: ""
      }
    },
    {
      id: 15,
      slug: "mournful-militancy",
      title: "Mournful Militancy",
      thumbnail: require("~/assets/mournful-militancy.jpg"),
      publication: "e-flux",
      abstract: "This essay returns to Douglas Crimp's 1989 essay 'Mourning and Militancy' asking how it is possible to mourn, which (at least in Freud's definition) implies the possibility of moving on from the original traumatic event, in the face of glaring social injustice? How to continue a struggle for justice while grieving? How to fight while healing?",
      year: "2018",
      month: "01",
      url:
        "https://www.e-flux.com/architecture/superhumanity/179226/mournful-militancy/",
      meta: {
        author: "Hannah Proctor",
        title: "Mournful Militancy",
        content: "",
        keywords: ""
      }
    },
    {
      id: 14,
      slug: "history-from-within",
      title: "History from Within: Identity and Interiority",
      thumbnail: require("~/assets/history-from-within.jpg"),
      publication: "Historical Materialism",
      abstract: "Critics of ‘identity politics’ tend to assume that any exploration of subjective experience is tantamount to an affirmation of liberal individualism. This essay attempts to counteract this assumption through an analysis of case histories and research publications by twentieth-century psychoanalysts and psychologists, which demonstrate the ways in which even the most ephemeral psychological experiences – dreams, fantasies, desires – are bound up with structural forms of oppression.",
      year: "2018",
      month: "01",
      url: "http://www.historicalmaterialism.org/articles/history-from-within",
      meta: {
        author: "Hannah Proctor",
        title: "Revolutionary Commemoration",
        content: "",
        keywords: ""
      }
    },
    {
      id: 13,
      slug: "review-homo-sovieticus",
      title:
        "Review of W. Velminski's Homo Sovieticus",
      thumbnail: require("~/assets/review-homo-sovieticus.jpg"),
      publication: "History of the Human Sciences",
      abstract: "This review of a short polemical book on Soviet hypnosis and telepathy contends that the author seems more interested in Soviet hypnosis as a grandiose metaphor for understanding the Soviet Union than it does in describing it as a actually existing phenomenon.",
      year: "2017",
      month: "09",
      url: "http://www.histhum.com/413/",
      meta: {
        author: "Hannah Proctor",
        title:
          "Review of W. Velminski's Homo Sovieticus: Brain Waves, Mind Control, and Telepathic Destiny. MIT Press.",
        content: "",
        keywords: "Radical Philosophy"
      }
    },
    {
      id: 12,
      slug: "objects-feminism",
      title:
        "Book chapter in Objects of Feminism",
      thumbnail: require("~/assets/objects-feminism.jpg"),
      publication:
        "The Academy of Fine Arts at the University of the Arts Helsinki",
      abstract: "This essay discusses the body parts of dead women who committed violent acts for political ends, which took on posthumous lives of their own. Charlotte Corday's skull and Ulrike Meinhof's brain were both examined after their deaths and imbued with meanings by scientists seeking to comprehend what led these women to betray their supposedly natural docility.",
      year: "2017",
      month: "01",
      url: "https://shop.unigrafia.fi/tuote/objects-of-feminism/",
      meta: {
        author: "Hannah Proctor",
        title:
          "Book chapter in Objects of Feminism, eds. Maija Timonen, Josephine Wikström",
        content: "",
        keywords: "Objects of Feminism"
      }
    },
    {
      id: 11,
      slug: "lost-minds",
      title: "Lost Minds: Sedgwick, Laing and the politics of mental illness",
      thumbnail: require("~/assets/lost-minds.jpg"),
      publication: "Radical Philosophy",
      abstract: "Peter Sedgwick's Psycho Politics, published in 1982 shortly before his death, offers both an overview and critique of anti-psychiatry, with a particular emphasis on the work of RD Laing. Sedgwick’s main issue with Laing was the flimsiness of his political convictions. But, as the crisis of mental health provision Sedgwick identified continues to intensify, does his critique also outline counter-proposals that might be drawn on today?",
      year: "2016",
      month: "05",
      url:
        "https://www.radicalphilosophyarchive.com/wp-content/files_mf/rp197_proctor_lostminds.pdf",
      meta: {
        author: "Hannah Proctor",
        title: "Lost Minds: Sedgwick, Laing and the Politics of Mental Illness",
        content: "",
        keywords: ""
      }
    },
    {
      id: 10,
      slug: "deceptive-subjects",
      title:
        "Deceptive Subjects: the Harvard Project on the Soviet Social System",
      thumbnail: require("~/assets/deceptive-subjects.jpg"),
      publication: "Hidden Persuaders",
      abstract:
        "Looking at the cultural assumptions of the American social scientists that shaped this large-scale research project that sought to comprehend Soviet society and subjectivity at the dawn of the Cold War.",
      year: "2016",
      month: "04",
      url:
        "http://www.bbk.ac.uk/hiddenpersuaders/blog/deceptive-subjects-reading-the-harvard-project-on-the-soviet-social-system/",
      meta: {
        author: "Hannah Proctor",
        title:
          "Deceptive Subjects: Reading the Harvard Project on the Soviet Social System",
        content:
          "A fresh look at an important post-war Sovietological study and uncovers the surprising ways that assumptions about totalitarianism structured social scientific research.",
        keywords: ""
      }
    },
    {
      id: 9,
      slug: "torque2-chapter",
      title:
        "Book chapter in Torque #2: The Act of Reading",
      thumbnail: require("~/assets/torque2-chapter.jpg"),
      publication: "Link Editions & Torque Editions",
      abstract: "Bright lights and wrinkled skin in New York City via Marshall Berman's On the Town and Samuel Delany's Times Square Red, Times Square Blue",
      year: "2015",
      month: "07",
      url: "http://torquetorque.net/publications/the-act-of-reading/",
      meta: {
        author: "Hannah Proctor",
        title: "Book chapter in Torque #1: Mind, Language and Technology",
        content: "",
        keywords: "Torque 2"
      }
    },

    {
      id: 8,
      slug: "synthetic-dreams",
      title: "Synthetic Dreams: Gender, Modernity and Art Silk Stockings",
      thumbnail: require("~/assets/synthetic-dreams.jpg"),
      publication: "Mute",
      abstract: "The world’s first synthetic fabric, rayon or arificial silk, made from congealed vegetable matter and human labour, was spun into stockings and marketed to working class women. This essay treats art silk stockings as a metaphor for thinking through gender and class in the interwar years.",
      year: "2015",
      month: "07",
      url:
        "http://www.metamute.org/editorial/articles/synthetic-dreams-gender-modernity-and-art-silk-stockings",
      meta: {
        author: "Hannah Proctor",
        title: "Synthetic Dreams: Gender, Modernity and Art Silk Stockings",
        content:
          "The world’s first synthetic fabric, rayon, made from congealed vegetable matter and human labour, was spun into artificial silk stockings and worn by the same women that mass produced it. It is a guiding metaphor of interwar gender politics and their relation to today.",
        keywords: "Biopolitics,Film,Design,Technology,Wearable,Articles"
      }
    },
    {
      id: 7,
      slug: "women-edge-time",
      title:
        "Women on the Edge of Time: Revolutionary Motherhood",
      thumbnail: require("~/assets/women-edge-time.jpg"),
      publication: "Studies in the Maternal",
      abstract: "Discusses representations of motherhood from the NEP period that combine visions of radically reconfigured gender relations and evince non-traditional attitudes to the family and to social reproduction but nonetheless insist on the continued centrality of a particularly kind of instinctual motherly love to the process of building the Communist future.",
      year: "2015",
      month: "01",
      url: "https://www.mamsie.bbk.ac.uk/articles/abstract/10.16995/sim.198/",
      meta: {
        author: "Hannah Proctor",
        title:
          "Women on the Edge of Time: Representations of Revolutionary Motherhood in the NEP-era Soviet Union",
        content: "",
        keywords: ""
      }
    },
    {
      id: 6,
      slug: "torque1-chapter",
      title:
        "Book chapter in Torque #1: Mind, Language and Technology",
      thumbnail: require("~/assets/torque1-chapter.jpg"),
      publication: "Link Editions & Torque Editions",
      abstract: "How do visual representations of the brain participate in forming our understanding of human subjectivity and what do they obscure from view?",
      year: "2014",
      month: "10",
      url: "http://linkeditions.tumblr.com/torque1",
      meta: {
        author: "Hannah Proctor",
        title: "Book chapter in Torque #1: Mind, Language and Technology",
        content: "",
        keywords: "Torque 1"
      }
    },
    {
      id: 5,
      slug: "review-neuro",
      title:
        "Review of Rose & Abi-Rached: Neuro",
      thumbnail: require("~/assets/review-neuro.jpg"),
      publication: "Radical Philosophy",
      abstract: "For Rose and Abi-Rached, critique, like the spectral entourage of social critics that haunt this text, is implicitly aligned with crude judgements, with insensitive and destructive polemic blind to the intricacies of reality.",
      year: "2014",
      month: "09",
      url:
        "https://www.radicalphilosophy.com/reviews/individual-reviews/brainiacs",
      meta: {
        author: "Hannah Proctor",
        title:
          "Review of Nikolas Rose and Joel e M. Abi-Rached, Neuro: The New Brain Sciences and the Management of the Mind. Princeton University Press.",
        content: "",
        keywords: "Radical Philosophy"
      }
    },
    {
      id: 4,
      slug: "death-maiden",
      title: "Death and the Maiden",
      thumbnail: require("~/assets/death-maiden.gif"),
      publication: "The New Inquiry",
      abstract:
        "Can Freud's vision of the death drive provide a way for thinking about gender or its abolition?",
      year: "2014",
      month: "08",
      url: "https://thenewinquiry.com/death-and-the-maiden/",
      meta: {
        author: "Hannah Proctor",
        title: "Death and the Maiden",
        content:
          "Freud’s theory of the death drive also gives us a way to think about gender."
      }
    },
    {
      id: 3,
      slug: "reasons-displaces-love",
      title: "Reason Displaces All Love",
      thumbnail: require("~/assets/reason-displaces-all-love.jpg"),
      publication: "The New Inquiry",
      abstract: "On the materialist assumptions underpinning early Soviet understandings of sexuality, energy and libido, and on the material conditions from which these ideas arose.",
      year: "2014",
      month: "02",
      url: "https://thenewinquiry.com/death-and-the-maiden/",
      meta: {
        author: "Hannah Proctor",
        title: "Reason Displaces All Love",
        content: "Libidinal economizing in the early Soviet Union.",
        keywords: ""
      }
    },
    {
      id: 2,
      slug: "journey-centre-brain",
      title: "Changing our Minds: A Journey to the Centre of the Brain",
      thumbnail: require("~/assets/journey-centre-brain.jpg"),
      publication: "Mute",
      abstract:
        "On political assumptions that weigh like a nightmare on histories and theories of the brain.",
      year: "2014",
      month: "02",
      url:
        "http://www.metamute.org/editorial/articles/changing-our-minds-journey-to-centre-brain",
      meta: {
        author: "Hannah Proctor and Michael Runyan",
        title: "Changing our Minds: A Journey to the Centre of the Brain",
        content:
          "Humans make their own history, but contemporary philosophy seems to be adapting the neo-colonial perspectives of neuroscience to dismiss the idea this could ever be a conscious and system-antagonistic process.",
        keywords: "Politics,Technology,Biotechnology,Articles"
      }
    },
    {
      id: 1,
      slug: "review-sex-unbearable",
      title: "Review of Berlant & Edelman: Sex, Or The Unbearable",
      thumbnail: require("~/assets/review-sex-unbearable.jpg"),
      publication: "Studies in the Maternal",
      abstract: "A review of a book that is a lot more unbearable than it is sex.",
      year: "2014",
      month: "01",
      url: "https://www.mamsie.bbk.ac.uk/articles/abstract/10.16995/sim.12/",
      meta: {
        author: "Hannah Proctor",
        title:
          "Review of Lauren Berlant and Lee Edelman, Sex, Or The Unbearable. Duke University Press.",
        content: "",
        keywords: "Studies in the Maternal"
      }
    }
  ]
});


      },
      getEventWithId({ commit, state }, id) {
        let event = state.events.find(event => {
          return event.id === id;
        });
        commit("updatePost", { id: id });
      },

      getEvents({ commit }) {
        commit("updateEvents", {
          events: [
            {
              id: 27,
              eventTitle: "Lecture",
              location: "Psychoanalytische Bibliothek",
              title: "Divided Selves: British Anti-Psychiatry and Psychoanalysis",
              abstract: "On RD Laing's psychoanalytic influences",
              year: "2019",
              month: "02",
              url: "https://psybi-berlin.de/event/divided-selves-british-antipsychiatry-and-psychoanalysis/",
              meta: {
                author: "Hannah Proctor",
                title: "Divided Selves: British Anti-Psychiatry and Psychoanalysis",
                description: "Inivited Lecture Psychoanalytische Bibliothek. In Cold War Freud: Psychoanalysis in an Age of Catastrophes, Dagmar Herzog contends that in spite of its provocative title Deleuze and Guattari’s seminal Anti-Oedipus (1972) ’needs to be understood also as a psychoanalytic text, not just an attack on psychoanalysis.‘ This paper will make a similar argument with regards to British antipsychiatry in the late 1960s and 1970s. Although psychoanalytic concepts and practices were vocally critiqued by British antipsychiatrists and those involved with experimental therapeutic communities in Britain, this paper will insist that psychoanalysis remained, though sometimes obliquely or in repurposed forms, an influence and inspiration to people involved in these movements."
              }
            },
            {
              id: 27,
              eventTitle: "After the Eclipse",
              location: "Flutgraben e.V.",
              title: "Narcissism of Small Differences",
              abstract: "How I stopped worrying and learned to hate Crudo",
              year: "2018",
              month: "12",
              url: "https://web.facebook.com/AftetheEclipses/",
              meta: {
                author: "Hannah Proctor",
                title: "Narcissism of Small Differences",
                description: "Discussion of narcissism in Crudo by Olivia Lang"
              }
            },

            {
              id: 26,
              eventTitle: "Lecture",
              location: "Leuphana Universität Lüneburg",
              title: "Tearing off the Straight Jackets: the Gay Liberation Front and Radical Psychiatry",
              abstract: "On the Gay Liberation Front's counter-psychiatry group",
              year: "2018",
              month: "11",
              url: "https://www.leuphana.de/fileadmin/user_upload/ZentraleEinrichtungen/frauenb/pdf/Flyer/Plakat_-_Tearing_off_the_Straight_Jackets.pdf",
              meta: {
                author: "Hannah Proctor",
                title: "Lecture",
                description: "Inivited Lecture Leuphana Universität Lüneburg"
              }
            },

            {
              id: 25,
              eventTitle: "It’s About Time",
              location: "ICI Berlin",
              title: "Mourning Terminable",
              abstract: "Is mourning really a process with an end?",
              year: "2018",
              month: "07",
              url: "https://www.ici-berlin.org/events/its-about-time/",
              meta: {
                author: "Hannah Proctor",
                title: "It’s About Time",
                description: "ICI Final Event"
              }
            },

            {
              id: 24,
              eventTitle: "Gendered Emotions in History",
              location: "University of Sheffield",
              title:
                "Bestialized and Devoid of All Human Feeling:\
Gendered Emotions in Right-wing Representations of Militant Leftist Women",
              abstract: "On impassioned and politicised female subjects.",
              year: "2018",
              month: "06",
              url: "https://genderedemotions.wordpress.com/",
              meta: {
                author: "Hannah Proctor",
                title: "Militant Women",
                description: "Gendered Emotions"
              }
            },

            {
              id: 23,
              eventTitle:
                "From 1968 to Brexit: Legacies of the Left from the Academy to the Community",
              location: "University of Essex",
              title: "Radical Psychiatry and 1968",
              abstract: "",
              year: "2018",
              month: "06",
              // url:
              //   "https://www.eventbrite.co.uk/e/from-1968-to-brexit-legacies-of-the-left-from-the-academy-to-the-community-tickets-44368184434#",
              meta: {
                author: "Hannah Proctor",
                title: "Radical Psychiatry and 1968",
                description: "Radical Psychiatry and 1968"
              }
            },

            {
              id: 22,
              eventTitle: "Material Cultures of Psychiatry",
              location:
                "Department of History and Ethics of Medicine, University Clinic Hamburg-Eppendorf",
              title:
                "Instruments of Disalienation: The Material Cultures of Radical Psychiatry",
              abstract:
                "A discussion of radical psychiatric spaces with an emphasis on Kingsley Hall and the Archway Community in London.",
              year: "2018",
              month: "05",
              url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Material Cultures of Psychiatry",
                description: "Radical Psychiatry and Space"
              }
            },

            {
              id: 21,
              eventTitle: "Radical Psychiatry, Psychoanalysis and 1968",
              location: "ICI Berlin",
              title: "",
              abstract:
                "A symposium on French institutional psychotherapy with a keynote by Camille Robcis, co-organised by Hannah Proctor (ICI Berlin) and Sarah Marks (Birkbeck Hidden Persuaders Project).",
              year: "2018",
              month: "05",
              url: "https://www.ici-berlin.org/events/radical-psychiatry/",
              meta: {
                author: "Hannah Proctor",
                title: "Material Cultures of Psychiatry",
                description: "Radical Psychiatry and Space"
              }
            },

            {
              id: 20,
              eventTitle: "Sex, Poetry and Nothing: Abolition Salon",
              location: "Dutch Art Institute Roaming Assembly",
              title:
                "Sexual Aesthetics: The Living Theatre and Gestalt Therapy",
              abstract:
                "A day divided into two thematic strands: sexual aesthetics and abolition. By sexual aesthetics we mean historical examples of aesthetic practices which deliberately break into the modern standards of the ethical life of sexualization… abolition invokes both practices and the imperative to negate that is informed by material histories of struggle and that can take ontological, aesthetic and political forms.",
              year: "2018",
              month: "02",
              url:
                "https://dutchartinstitute.eu/page/10785/2018-sunday-february-18-roaming-assembly-19-sex-poetry-and-nothing-abolit",
              meta: {
                author: "Larne Abse Gogarty and Hannah Proctor",
                title: "Sexual Aesthetics",
                description: "Sex, Poetry and Nothing"
              }
            },

            {
              id: 19,
              eventTitle:
                "DAS IST ÄSTHETIK! Kongress der. Deutschen Gesellschaft für Ästhetik",
              location: "Hochschule für Gestaltung Offenbach am Main",
              title:
                "Sexual Aesthetics: The Living Theatre and Gestalt Therapy",
              abstract: "",
              year: "2018",
              month: "02",
              url: "http://www.dgae.de/kongresse/das-ist-aesthetik/",
              meta: {
                author: "Larne Abse Gogarty and Hannah Proctor",
                title: "Sexual Aesthetics",
                description: "Offenbach Aesthetics Conference"
              }
            },

            // {
            //   id: 18,
            //   eventTitle: "Politics and Psychoanalysis",
            //   location: "Sandberg Institute, Amsterdam",
            //   title: "The Communist Unconscious",
            //   abstract: "Reading Freud with Marx in the Soviet Union",
            //   year: "2018",
            //   month: "02",
            //   url: "",
            //   meta: {
            //     author: "Hannah Proctor",
            //     title: "Communist Unconscious",
            //     description: "Freud Marx Soviet Union"
            //   }
            // },
            //
            // {
            //   id: 17,
            //   eventTitle: "Politics and Psychoanalysis",
            //   location: "Sandberg Institute, Amsterdam",
            //   title: "The Communist Unconscious",
            //   abstract: "Reading Freud with Marx in the Soviet Union",
            //   year: "2018",
            //   month: "02",
            //   url: "",
            //   meta: {
            //     author: "Hannah Proctor",
            //     title: "Communist Unconscious",
            //     description: "Freud Marx Soviet Union"
            //   }
            // },

            {
              id: 16,
              eventTitle: "Politics and Psychoanalysis",
              location: "Sandberg Institute, Amsterdam",
              title: "The Communist Unconscious",
              abstract: "Reading Freud with Marx in the Soviet Union",
              year: "2018",
              month: "02",
              url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Communist Unconscious",
                description: "Freud Marx Soviet Union"
              }
            },

            {
              id: 15,
              eventTitle: "Lichtspiele: A Farewell to Progress",
              location: "KW Berlin",
              title: "Airless Spaces and Empty Places",
              abstract:
                "…stifled, overcome with inertia, incapable of action, violently restrained by external forces",
              year: "2017",
              month: "12",
              url: "https://www.kw-berlin.de/en/lichtspiele-farewell-progress/",
              meta: {
                author: "Hannah Proctor",
                title: "Farewell to Progress",
                description: "Airless Spaces"
              }
            },

            {
              id: 14,
              eventTitle: "Superhumanity: Post-Labor, Psychopathology, Plasticity",
              location: "National Museum of Modern and Contemporary Art, Korea",
              title: "Mournful Militancy",
              abstract: "",
              year: "2017",
              month: "10",
              url: "https://www.e-flux.com/architecture/superhumanity/",
              meta: {
                author: "Hannah Proctor",
                title: "Superhumanity",
                description: "Mournful Militancy"
              }
            },

            {
              id: 13,
              eventTitle: "Communist Feelings, with Larne Abse Gogarty",
              location: "diffrakt",
              title: "Communist Feelings",
              abstract:
                "The politics of dreaming and confusions of scale in social struggles. Dreams might seem like ‘small’, subjective and hence apolitical phenomena, yet dreams are not outside of history.",
              year: "2017",
              month: "11",
              url: "http://diffrakt.space/en/communist-feelings/",
              meta: {
                author: "Hannah Proctor",
                title: "Communist Feelings",
                description: "Dreams Politics"
              }
            },

            {
              id: 12,
              eventTitle: "Objects of Feminism: Book Launch",
              location: "diffrakt, Berlin",
              title: "Stone Femme",
              abstract: "",
              year: "2017",
              month: "08",
              url: "http://diffrakt.space/en/objects-of-feminism/",
              meta: {
                author: "Hannah Proctor",
                title: "Stone Femme",
                description: "Objects of Feminism Book Launch"
              }
            },

            {
              id: 11,
              eventTitle: "Objects of Feminism: Book Launch",
              location: "South London Gallery",
              title: "Stone Femme",
              abstract: "",
              year: "2017",
              month: "11",
              url: "https://www.facebook.com/events/159303314666570",
              meta: {
                author: "Hannah Proctor",
                title: "Objects of Feminism",
                description: "Objects of Feminism"
              }
            },

            {
              id: 10,
              eventTitle: "RE-",
              location: "ICI Berlin",
              title: "Resistance / Rehabilitation",
              abstract:
                "Taking various instantiations of re- as its points of departure, current ICI Fellows present an errant glossary in	order to provoke reactions, resonances and responses.",
              year: "2017",
              month: "09",
              url: "https://www.ici-berlin.org/events/re-workshop/",
              meta: {
                author: "Hannah Proctor",
                title: "RE-",
                description: "Resistance Rehabilitation"
              }
            },

            // {
            //   id: 9,
            //   eventTitle: "Objects of Feminism: Book Launch",
            //   location: "diffrakt, Berlin",
            //   title: "Stone Femme",
            //   abstract: "",
            //   year: "2017",
            //   month: "08",
            //   url: "http://diffrakt.space/en/objects-of-feminism/",
            //   meta: {
            //     author: "Hannah Proctor",
            //     title: "Stone Femme",
            //     description: "Objects of Feminism Book Launch"
            //   }
            // },

            {
              id: 8,
              eventTitle: "Shona Projects: Residency",
              location: "Eilean Shona, Scotland",
              title: "",
              abstract: "",
              year: "2017",
              month: "05",
              url: "https://shona-projects.squarespace.com/archive",
              meta: {
                author: "Hannah Proctor",
                title: "Shona",
                description: "Shona Residency"
              }
            },

            {
              id: 7,
              eventTitle: "Historical Materialism Beirut",
              location: "Beirut Institute for Critical Analysis and Research",
              title:
                "Everything’s Cracking Up: Defeat, Disillusionment and the Psychic Investments of the Left",
              abstract: "",
              year: "2017",
              month: "03",
              url:
                "http://www.bicar-lebanon.org/2016/03/historical-materialism-beirut-conference-march-10-12-2017/",
              meta: {
                author: "Larne Abse Gogarty and Hannah Proctor",
                title: "HM Beirut",
                description: "Psychic Investments of the Left"
              }
            },

            {
              id: 6,
              eventTitle: "Avant Garde Pedagogies",
              location: "University of Westminster",
              title: "",
              abstract: "",
              year: "2016",
              month: "07",
              url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Avant Garde Pedagogies",
                description: "Avant Garde Pedagogies"
              }
            },

            {
              id: 5,
              eventTitle:
                "Resistance, 5th International Critical Studies Research Group Conference",
              location: "University of Brighton",
              title: "",
              abstract: "",
              year: "2016",
              month: "06",
              url: "http://www.criticalstudies.org.uk/conference.html",
              meta: {
                author: "Hannah Proctor",
                title: "Resistance",
                description: "Resistance"
              }
            },

            {
              id: 4,
              eventTitle:
                "Objects of Psychiatry:\
		Between thing-making, reification & personhood",
              location: "University Hospital of Psychiatry, Zurich",
              title: "",
              abstract: "",
              year: "2016",
              month: "06",
              url: "https://www.schizophrenie.uzh.ch/de/conference2016.html",
              meta: {
                author: "Hannah Proctor",
                title: "Objects of Psychiatry",
                description: "Objects of Psychiatry"
              }
            },

            {
              id: 3,
              eventTitle:
                "Reality Check: A Symposium on Art, Psycho-politics, and the Limits of Community",
              location: "University College London",
              title: "Revisting Red Therapy: Panel Discussion",
              abstract: "",
              year: "2016",
              month: "03",
              url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Reality Check",
                description: "Red Therapy"
              }
            },

            {
              id: 2,
              eventTitle: "Objects of Feminism",
              location: "University of the Arts, Helsinki",
              title: "Gender and the Death Drive",
              abstract: "",
              year: "2015",
              month: "12",
              url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Objects of Feminism",
                description: "Gender and the Death Drive"
              }
            },

            {
              id: 1,
              eventTitle: "Towards a Materialist Psychoanalysis",
              location: "University of Warwick",
              title: "A Country Beyond the Pleasure Principle",
              abstract: "",
              year: "2015",
              month: "05",
              // url: "",
              meta: {
                author: "Hannah Proctor",
                title: "Materialist Psychoanalysis",
                description: "Pleasure Principle"
              }
            }
          ]
        });
      }
    }
  });
};

export default makeStore;
