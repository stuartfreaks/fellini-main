const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const app = express();

let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
  };
  
  let requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
  };

  app.use(express.static('public'));
  
  app.use(myLogger);
  app.use(requestTime);
  
  app.get('/', (req, res) => {
    let responseText = 'Welcome to The Fellini Club!';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
  });
  
  app.get('/secreturl', (req, res) => {
    let responseText = 'This is a secret url with super top-secret content.';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
  
  });

 

let felliniMovies = [
    {
      title: '8 1/2',
      year: '1963',
      summary:  'Fellini’s masterpiece starts with cinema’s greatest and most disturbing dream sequence, all the more disquieting for being woven into a film in which dreams and fantasies are being manufactured as a way of escaping dreary reality. Mastroianni plays a film director, Guido Anselmi, who is evidently based on Fellini himself and clearly being created as a kind of therapeutic self-invention or self-mythologising. Guido has reached a moment of personal and creative crisis: he is blocked and production on his latest film has stalled. He embarks on a personal voyage into memory and the past, and a reckoning with all the women he has loved.',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91m35c0v4eL._RI_.jpg'

    },
    {
      title: 'La Dolce Vita',
      year: '1960',
      summary: 'There is pure euphoria and inspiration in this magnificent film that satirises the fashionable world of Swinging Rome in the early 1960s. Fellini’s cinema put Italy at the centre of the world in the way that the Beatles would put Britain there a few years later. Mastroianni is the jaded gossip journalist who hangs around the Via Veneto parasitically hoping for showbusiness stories and despising himself for not having written his novel yet. He falls briefly in love with a visiting American star, played by Anita Ekberg, the pair disporting themselves in the Trevi fountain, and submits to a beating from her enraged husband. Later, he will report on a sighting of the Virgin Mary by two children; the sacred and profane are of equal importance here.',
      imageURL: 'https://m.media-amazon.com/images/M/MV5BODQ0NzY5NGEtYTc5NC00Yjg4LTg4Y2QtZjE2MTkyYTNmNmU2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg'
    },
    {
      title: 'La Strada',
      year: '1954',
      summary: 'The heart-wrenching operatic pathos of this early Fellini masterpiece will blow you away, no matter how many times you see it. Masini gives a Chaplinesque performance as the simple working-class girl, with what would now be called learning difficulties, who is sold by her family for 10,000 lire to a brutish travelling player called Zampanò, played by Anthony Quinn. He bullies and exploits her but realises too late that her presence in his life was the working of a mysterious divine grace. It is a rare moment in Fellini when he goes behind the scenes of circus theatricality and shows us that it is not simply a gorgeously surreal phenomenon, but a tough business that involves heartbreak for its practitioners.',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/La_Strada.jpg'
    },
    {
        title: 'Il Vitelloni',
        year: '1953',
        summary: 'Fellini’s I Vitelloni (“The Young Bucks”) is an explosion of energy, vitality and warmth: a crowd of restless young men (each with a dash of Fellini himself), led by the rising comedy star Alberto Sordi, dream of escaping their provincial hometown while remaining fiercely loyal to it. Quite a lot of the time, they do nothing and there is not much to do: they grow moustaches, then shave them off. They chase after women and then feel themselves being chased – evading the responsibilities of fatherhood – and, of course, there is the key Fellini carnival moment.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/d/de/Vitelloni_psoter.jpg'

    },
    {
       title: 'Nights of Cabiria',
       year: '1957',
       summary: 'One of Fellini’s truly great films, with a fierce note of melancholy and even tragedy that is perhaps atypical of him. Masina plays Cabiria, a sex worker whose paradoxical mixture of vulnerability and defiant strength is rendered in a series of episodes. She lives in a wretched shack on the outskirts of town: the eerie modernised wasteland that captured the imagination of both Fellini and Michelangelo Antonioni. Cabiria leads an existence that is almost feral, but at any moment she could find herself in a rich man’s apartment or on a squalid street, and she rises above it all.',
       imageURL: 'https://www.apocalypselaterempire.com/al/alf/1950s/1957nightsofcabiria2.jpg'
    },
    {
        title: 'Amacord',
        year: '1973',
        summary: 'Fellini’s genius for welding memory, dream and waking consciousness is on show in this classic movie, whose title is a slang phrase for “I remember”. It’s a personal, quasi-autobiographical tale of a little boy growing up near Rimini, the place of Fellini’s own boyhood, in an Italy dominated by fascism and the Catholic church. As ever, the spirit and aesthetics of the circus are present: scenes and ideas and images will exuberantly follow each other for our delectation like circus acts being brought into the ring.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Amarcord_%28film%29_poster.jpg/220px-Amarcord_%28film%29_poster.jpg'
    },
    {   title: 'And The Ship Sails On',
        year: '1983',
        summary: 'Another surreal gem from Fellini: a movie whose love of its own artificiality is obvious. It’s a hothouse flower of a film, created in the studio, not the streets – about as far from neorealism as you can get. A group of musical notables are on a cruise-ship journey to scatter the ashes of a famous opera singer – and Fellini serves up a chocolate box of bizarre and hilarious moments and scenes as these various conductors, soloists and sopranos bicker, intrigue and fall out. But the setting is July 1914, after the Archduke Franz Ferdinand assassination, with war on the horizon, and the tension is ratcheted up when a group of Serbian refugees are accepted on to the ship.',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BODc3MmU4NGQtZTllNy00MjIyLTk0M2MtNmMyODc1ZWFkZDliXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_FMjpg_UX1000_.jpg'

    },
    {
        title: 'Juliet of the Spirits',
        year: '1965',
        summary: 'This was Fellini’s first full-length colour film, and it is a classic of fantasy, theatricality and sensuality. Masina stars as Juliet, an unhappily married woman with a philandering husband, who conceives a preoccupation with the life of her super-sexy and buxom neighbour Suzy, played by the actor Sandra Milo (who played the director’s mistress in 8 ½). Suzy seems to live a guilt- and risk-free life of sexual pleasure in a house tricked out for gratification, and she appears to be inviting Juliet to join her in this attitude. A complex, unhappy film, said to be inspired by a difficult patch in Masina’s relationship with Fellini.',
        imageURL:  'https://m.media-amazon.com/images/M/MV5BODQ4MzIyNDAyOF5BMl5BanBnXkFtZTYwMjQ2OTE5._V1_.jpg'
    },
    {
        title: 'Roma',
        year: '1972',
        summary: 'An intensely personal, exuberant and extravagant film that is at once a fantastical autobiography and a kind of episodic, biographical portrait of the film’s leading character: Rome itself, which is presented in a series of semi-connected episodes of its past and present. Roma is also notable for featuring a swansong appearance for the legendary Roman star Anna Magnani. As so often, the movie transforms material that would otherwise be merely autobiographical: a heightened, hallucinatory version of Fellini takes us on a journey into the city, beginning with a spectacular shot of a traffic jam.',
        imageURL: 'http://www.cgentertainment.it/img/film/21331/LOC1_21331.jpg'
    },
    {
        title: 'Il Bidone',
        year: '1955',
        summary: 'This film , like La Strada, is a midway point between the neorealism of Fellini’s early screenwriting career and the humour and picaresque pathos of his later work. Broderick Crawford, Richard Basehart and Masina star in a story about a team of confidence tricksters roaming the countryside tricking farmers out of their savings. Crawford plays Augusto, the leader of the gang, who is coming to tire of this life. His personal confusion is brought to a crisis when his daughter re-enters his life.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Ilbidone.jpg'
    },
    {
        title: 'The White Sheik',
        year: '1952',
        summary: 'This was Fellini’s first solo directing credit: a joyful romantic comedy that stars the veteran Roman actor Alberto Sordi as a bridegroom whose wife goes missing. It was remade by Woody Allen as one of the sections in his 2012 film To Rome With Love.',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTUwNTkwNjg5MF5BMl5BanBnXkFtZTYwMzQyNTk5._V1_.jpg'
    },
    {
        title: 'The Clowns',
        year: '1970',
        summary: 'A docu-fiction about Fellini’s fascination and passion for circus clowns. It features – as a dwarf nun – Adelina Poerio, who went on to play the red-clad killer in Don’t Look Now.',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BNzJhYTU3NGUtZTJlNC00NDc2LTk0OWItYjYzODRjMmMwZWZhXkEyXkFqcGdeQXVyMzIzNDU1NTY@._V1_FMjpg_UX1000_.jpg'
    },
    {
        title: 'Orchestra Rehearsal',
        year: '1978',
        summary: 'An interesting, atypical, underrated Fellini film – perhaps closer to Miloš Forman – a political satire about an orchestra that goes on strike.',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Orchestra_Rehearsal_FilmPoster.jpeg'
    },
    {
        title: 'Fellini\'s Casanova',
        year: '1976',
        summary: 'Donald Sutherland is Casanova who, in keeping with Fellini’s habitual wayward episodic anarchy and surrealism, is shown not really as a great lover, but an absurd and comic figure at the mercy of fate and his urges.',
        imageURL: 'https://pics.filmaffinity.com/Fellini_s_Casanova-876602958-large.jpg'
    },
    {
        title: 'Variety Lights',
        year: '1950',
        summary: 'Fellini’s debut movie, co-directed with Albert Lattuada, and with a real taste of the exuberance and theatricality still to come. A beautiful young woman joins a travelling troupe of entertainers. Masina has a tiny role as the girlfriend of one of the vaudevillians.',
        imageURL: 'https://m.media-amazon.com/images/M/MV5BMTI3MTQ5NjQwMF5BMl5BanBnXkFtZTcwNDE3NDI2Mg@@._V1_.jpg'
    },
    {
        title: 'Fellini Satyricon',
        year: '1969',
        summary: 'A movie with Fellini’s signature surrealism and episodic structure: a fever dream of imperial Rome, taken from Petronius.',
        imageURL: 'https://m.media-amazon.com/images/I/71QyomkgJ9L._SY445_.jpg'
    },
    {
        title: 'City of Women',
        year: '1980',
        summary: 'Some quaint softcore sensuality, perhaps, in this study of a man (Mastroianni) who, Dante-like, wakes up in the middle of his life and finds himself in a hotel in the middle of the woods that is overrun with desirable women.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/City_of_Women.jpg/220px-City_of_Women.jpg'
    },
    {
        title: 'Intervista',
        year: '1987',
        summary: 'A fantasy-fictional version of a documentary, as Fellini grants an interview to a Japanese camera crew and takes them round Cinecittà studios and the contents of his own mind and memories.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Intervista_%28film%29.jpg/220px-Intervista_%28film%29.jpg'
    },
    {
        title: 'Ginger and Fred',
        year: '1986',
        summary: 'This reunited two of Fellini’s great collaborators: his wife and great love Giulietta Masina and Marcello Mastroianni playing two cheesy old hoofers who do a Fred’n’Ginger tribute routine.',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Ginger_and_Fred_poster.jpg'
    },
    {
        title: 'The Voice of the Moon',
        year: '1990',
        summary: 'A gentle, episodic Fellini, with Roberto Benigni playing Ivo, a madcap character who travels far and wide across the Italian landscape on a romantic, fantastical quest to capture the moon.',
        imageURL: 'https://www.mauvais-genres.com/27912-large_default/the-voice-of-the-moon-original-movie-poster-15x21-in-1990-federico-fellini-roberto-benigni.jpg'
    }
  ];
  
  // GET requests

  
  app.get('/movies', (req, res) => {
    res.json(felliniMovies);
  });

  // Film Title URL req ****not working yet

  app.get("/movies/:title", (req, res) => {
    const { title } = req.params;
    const movies = movies.find((title) => movies.title === title);
    if (title) {
      res.status(200).json(title);
    } else {
      res.status(400).send("no such film!");
    }
  });


  //User Detail Requests ****not working yet
  
  app.post("/users", (req, res) => {
    const newUser = req.body;
    if (newUser.name) {
      newUser.id = uuid.v4();
      res.status(201).json(newUser);
    } else {
      res.status(400).send("users need names!");
    }
  });
  
  app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const updateUser = req.body;
  
    let user = users.find((user) => user.id == id);
  
    if (user) {
      user.name = updateUser.name;
      res.status(200).json(user);
    } else {
      res.status(400).send("no such user!");
    }
  });
  
  app.post("/users/:id/:movieTitle", (req, res) => {
    const { id, movieTitle } = req.params;
    const updateUser = req.body;
  
    let user = users.find((user) => user.id == id);
  
    if (user) {
      user.favoriteFilm.push(filmTitle);
      res.status(200).send(`${filmTitle} has been added to user ${id} array!`);
    } else {
      res.status(400).send("no such user!");
    }
  });
  
  app.delete("/users/:id/:filmTitle", (req, res) => {
    const { id, movieTitle } = req.params;
  
    let user = users.find((user) => user.id == id);
  
    if (user) {
      user.favoriteFilms = user.favoriteMovies.filter(
        (title) => title !== movieTitle
      );
      res
        .status(200)
        .send(`${filmTitle} has been removed from user ${id} array!`);
    } else {
      res.status(400).send("no such user!");
    }
  });
  
  app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
  
    let user = users.find((user) => user.id == id);
  
    if (user) {
      users = users.filter((user) => user.id != id);
      res.status(200).send(`user ${id} has been deleted!`);
    } else {
      res.status(400).send("no such user!");
    }
  });
  
 
  
  // listen for requests
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });