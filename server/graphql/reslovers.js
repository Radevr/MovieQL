import { getMovie } from './db';

const resolvers = {
  Query : {
    movies: (_, { limit, rating }) => getMovie(limit, rating),
  },
};

export default resolvers;
