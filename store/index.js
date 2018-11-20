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
      id: 21,
      slug: "tribune-peterson",
      title: "A Brief History of Jordan Peterson",
      thumbnail: "images/tribune-peterson.jpg",
      publication: "Tribune",
      abstract:
        "Jordan Peterson’s message is simple: ‘evil’ is endemic to humanity and the domination of some people over others is biologically grounded",
      year: "2018",
      month: "09",
      url:
        "https://tribunemag.co.uk/relaunch-preview",
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
      thumbnail: "images/mad-world.jpg",
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
      thumbnail: "images/soviet-babies.jpg",
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
      thumbnail: "images/fucking-freeways.jpg",
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
      thumbnail: "images/pageantry-picket-line.jpg",
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
      thumbnail: "images/revolutionary-commemoration.jpg",
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
      thumbnail: "images/mournful-militancy.jpg",
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
      thumbnail: "images/history-from-within.jpg",
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
      thumbnail: "images/review-homo-sovieticus.jpg",
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
      thumbnail: "images/objects-feminism.jpg",
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
      thumbnail: "images/lost-minds.jpg",
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
      thumbnail: "images/deceptive-subjects.jpg",
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
      thumbnail: "images/torque2-chapter.jpg",
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
      thumbnail: "images/synthetic-dreams.jpg",
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
      thumbnail: "images/women-edge-time.jpg",
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
      thumbnail: "images/torque1-chapter.jpg",
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
      thumbnail: "images/review-neuro.jpg",
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
      thumbnail: "images/death-maiden.gif",
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
      thumbnail: "images/reason-displaces-all-love.jpg",
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
      thumbnail: "images/journey-centre-brain.jpg",
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
      thumbnail: "images/review-sex-unbearable.jpg",
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

            {
              id: 18,
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
              id: 17,
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

            {
              id: 9,
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
