module.exports = () => {
  const { fakerRU: faker } = require('@faker-js/faker');
  const data = { movies: [] }
  for (let i = 0; i < 100; i++) {
    const movie = {
      id: i + 1,
      title: faker.music.songName(),
      rating: (faker.helpers.rangeToNumber({ min: 10, max: 99 }) / 10).toFixed(1),
      type: faker.helpers.arrayElement(['movie', 'series']),
      creator: faker.person.fullName(),
      actors: faker.helpers.multiple(faker.person.fullName, { count: 3 }),
      year: faker.helpers.rangeToNumber({ min: 2015, max: 2023 }),
      shortDescription: faker.lorem.sentences(2),
      description: faker.lorem.sentences(5),
      preview: faker.image.url({ width: 200, height: 300 }),
      poster: faker.image.url({ width: 400, height: 600 }),
      frames: Array.from({ length: 5 }, () => faker.image.url({ width: 1280, height: 720 }))
    };
    data.movies.push(movie);
  }

  return data;
}