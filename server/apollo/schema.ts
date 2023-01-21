import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
    bye: Int
  }

  type Mutation {
    plus10(n: Int): Int
  }
`;

export default typeDefs;
