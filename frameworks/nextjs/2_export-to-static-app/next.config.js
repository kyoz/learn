const fetch = require('isomorphic-unfetch');

module.exports = {
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/about': { page: 'about' }
    };

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    const movies = data.map(entry => entry.show);

    movies.forEach(movie => {
      paths[`/movie/${movie.id}`] = { page: '/movie/[id]', query: { id: movie.id } }
    });

    return paths;
  }
};
