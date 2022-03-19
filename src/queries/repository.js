import {gql} from "@apollo/client";

export const SEARCH_REPOSITORIES = gql(`
query($query: String!) {
  search(first: 20, type: REPOSITORY, query: $query) {
    edges {
      node {
        ... on Repository {
          name,
          description,
          url,
          stargazerCount,
          latestRelease {
            createdAt,
          },
          owner {
            avatarUrl
            login
          }
        }
      }
    }
  }
}
`);
