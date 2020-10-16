'use strict';

const { buildSchema } = require('graphql');

// Schema Language
module.exports = buildSchema(`

"""A character in the Star Wars Trilogy"""
interface Character {
  id: String!
  species: Species!
  name: String
  """The friends of the character, or an empty list if they have none."""
  friends(species: Species): [Character]
  """Which movies they appear in."""
  appearsIn: [Episode]
}

"""A mechanical creature in the Star Wars universe."""
type Droid implements Character {
  id: String!
  species: Species!
  name: String
  friends(species: Species): [Character]
  appearsIn: [Episode]
  primaryFunction: String
}

"""A humanoid creature in the Star Wars universe."""
type Human implements Character {
  id: String!
  species: Species!
  name: String
  friends(species: Species): [Character]
  appearsIn: [Episode]
  homePlanet: String
}

"""An episode in the Star Wars Trilogy."""
type Episode {
  id: String!
  title: String
  description: String
}

"""A Star Wars Trilogy GraphQL example with ArangoDB Foxx"""
type Query {
  """
  Returns the hero of the whole saga if episode is omitted, 
  otherwise returns the hero of that particular episode.
  """
  hero(episode: String): Character
  human(id: String!): Human
  droid(id: String!): Droid
  version: String
}

"""Species of a character: human or droid."""
enum Species {
  """A humanoid creature in the Star Wars universe."""
  HUMAN
  """A mechanical creature in the Star Wars universe."""
  DROID
}

`);
