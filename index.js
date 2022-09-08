const express = require('express');
const app = express();

let felliniFilms = [
    {
      title: '8 1/2',
      year: 'J.K. Rowling1963'
    },
    {
      title: 'La Dolce Vita',
      year: '1960'
    },
    {
      title: 'La Strada',
      year: '1954'
    },
    {
       title: 'Nights of Cabiria',
       year: '1957'
    },
    {
        title: 'Amacord',
        year: '1973'
    },
    {   title: 'And The Shop Sails On',
        year: '1983'

    },
    {
        title: 'Juliet of the Spirits',
        year: '1965'
    },
    {
        title: 'Roma',
        year: '1972'
    },
    {
        title: 'Il Bidone',
        year: '1955'
    },
    {
        title: 'The White Sheik',
        year: '1952'
    },
    {
        title: 'The Clowns',
        year: ('1970')
    },
    {
        title: 'Orchestra Rehearsal',
        year: '1978'
    },
    {
        title: 'Fellini\'s Casanova',
        year: '1976'
    },
    {
        title: 'Variety Lights',
        year: '1950'
    },
    {
        title: 'Fellini Satyricon',
        year: '1969'
    },
    {
        title: 'City of Women',
        year: '1980'
    },
    {
        title: 'Intervista',
        year: '1987'
    },
    {
        title: 'Ginger and Fred',
        year: '1986'
    },
    {
        title: 'The Voice of the Moon',
        year: '1990'
    }
  ];
  
  // GET requests
  app.get('/', (req, res) => {
    res.send('Welcome to The Fellini Club!');
  });
  
  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  app.get('/films', (req, res) => {
    res.json(felliniFilms);
  });
  
  
  // listen for requests
  app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });