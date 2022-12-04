import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  GlobalDatum,
  Job,
  JobEntity,
  Quote,
  QuoteEntity,
} from "../types/types";

const client = new ApolloClient({
  uri: "https://portfolio-strapi-yha5.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export const getGlobalData = async () => {
  const response = await client.query({
    query: gql`
      query getData {
        globalDatum {
          data {
            attributes {
              name
              shortIntroduction
              introduction
              about
              skillsHighlight {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              contactText
              projectsHighlight {
                data {
                  attributes {
                    name
                    date
                    githubURL
                    externalURL
                    projectFor
                    personal
                    description
                    images {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    shortDescription
                    techStack {
                      data {
                        attributes {
                          name
                          url
                        }
                      }
                    }
                  }
                }
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              socials {
                id
                name
                url
              }
            }
          }
        }
      }
    `,
  });

  return response.data.globalDatum.data.attributes;
};

export const getJobs = async () => {
  const response = await client.query({
    query: gql`
      query getJobs {
        jobs {
          data {
            attributes {
              designation
              joiningDate
              leavingDate
              url
              workDescription
              present
              rank
              name
            }
          }
        }
      }
    `,
  });

  return response.data.jobs?.data.map(
    (job: JobEntity) => job.attributes
  ) as Job[];
};

export const getQuotes = async () => {
  const response = await client.query({
    query: gql`
      query Quotes {
        quotes {
          data {
            attributes {
              quote
              author
            }
          }
        }
      }
    `,
  });

  return response.data.quotes?.data.map(
    (quote: QuoteEntity) => quote.attributes
  ) as Quote[];
};
