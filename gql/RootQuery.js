const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");
const { AuthorType, BookType } = require("./types");

const { books } = require("../data/books");
const { authors } = require("../data/authors");

exports.RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLInt },
      },
      description: "Returns a single book",
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of Books",
      resolve: () => books,
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLInt },
      },
      description: "Returns a single author",
      resolve: (parent, args) =>
        authors.find((author) => author.id === args.id),
    },

    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of Authors",
      resolve: () => authors,
    },
  }),
});
