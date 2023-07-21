module.exports = () => {
  const { faker } = require('@faker-js/faker');
  const data = { movies: [] }
  for (let i = 0; i < 100; i++) {
    const movie = {};
    movie.id = i + 1;
    movie.title = faker.music.songName();
    movie.rating = (faker.helpers.rangeToNumber({ min: 10, max: 99 }) / 10).toFixed(1);
    movie.type = faker.helpers.arrayElement(['movie', 'series']);
    movie.creator = faker.person.fullName();
    movie.actors = faker.helpers.multiple(faker.person.fullName, { count: 3 });
    movie.date = faker.date.between({ from: '2015-01-01', to: '2023-01-01' });
    movie.shortDescription = faker.lorem.sentences(2);
    movie.description = movie.shortDescription + ' ' + faker.lorem.sentences(3);
    movie.preview = faker.image.url({ width: 200, height: 300 });
    movie.poster = faker.image.url({ width: 400, height: 600 });
    movie.frames = [faker.image.url({ width: 1280, height: 720 }), faker.image.url({ width: 1280, height: 720 }), faker.image.url({ width: 1280, height: 720 })];
    data.movies.push(movie);
  }

  return data;
}