var movies = [
  {
    id: 1,
    title: 'Żywot Briana',
    desc: 'Film o życiu',
    poster: './images/brian.jpg',
    alt: 'Brian'
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    poster: './images/lion.jpg',
    alt: 'Lion king'
  },
  {
    id: 3,
    title: 'Blade Runner',
    desc: 'Film o androdidach',
    poster: './images/blade.jpg',
    alt: "Blade Runner"
  },
  {
    id: 4,
    title: 'Star Wars',
    desc: 'Film o lataniu w kosmosie',
    poster: './images/starwars.jpg',
    alt: "Star Wars"
  }
];

var moviesElements = movies.map(function (movie) {
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', { src: movie.poster, style:{width:"182px"}})
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
