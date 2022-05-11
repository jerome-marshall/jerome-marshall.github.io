import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://portfolio-strapi3-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export const getData = async () => {
  const response = await client.query({
    query: gql`
      query getData {
        globalDatum {
          id
          name
          socials {
            id
            name
            displayName
          }
          pageContent {
            ... on ComponentPageContentHeroPageContent {
              __typename
              id
              pageTitle
              shortDescription
              description
            }
            ... on ComponentPageContentAboutPageContent {
              __typename
              id
              pageTitle
              description
              skillset {
                id
                name
                url
              }
            }
            ... on ComponentPageContentExperiencePageContent {
              __typename
              id
              pageTitle
              jobs {
                id
                companyName
                designation
                doj
                range
                url
                workDescription
              }
            }
            ... on ComponentPageContentProjectsPageContent {
              __typename
              id
              pageTitle
              projects {
                name
                date
                githubURL
                externalURL
                projectFor
                personal
                description
                projectImg {
                  url
                }
                techStack {
                  name
                  name
                  url
                }
              }
            }
            ... on ComponentPageContentContactPageCotent {
              __typename
              id
              pageTitleIntro
              pageTitle
              description
            }
          }
        }
      }
    `,
  });

  return response.data.globalDatum;
};
