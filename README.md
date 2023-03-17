# poc-gql
Proof of concept using GQL running on basic express server


To run:
1. Clone repository
2. Run `npm i`
3. go to `http://localhost:5000/graphql` and test queries/mutations


## Examples:
### Queries
```
query {
  authors {
    id
    name
    books {
      id
      name
    }
  }
}

query {
  author(id: 1) {
    id
    name
    books {
      id
      name
    }
  }
}

query {
  books {
    id
    name
    author {
      id
      name
    }
  }
}

query {
  book(id: 1) {
    id
    name
    author {
      id
      name
    }
  }
}
```

### Mutations
```
mutation {
  addAuthor(name: "New Author") {
    id
    name
  }
}

mutation {
  addBook(name: "New Book Title", authorId: 1) {
    id
    name
  }
}

```
