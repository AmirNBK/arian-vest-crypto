import { fetchAPI } from "./base";

export async function getQueryTariffSection() {
  const data = await fetchAPI(
    `
    query TariffSection {
      pages {
        nodes {
          homepage {
            tariffSection {
              description
              title {
                normalTitle
                coloredTitle
              }
            }
          }
        }
      }
    }
      `,
  );

  return data?.pages?.nodes[2].homepage?.tariffSection[0];
}

export async function getQueryTariffTitles() {
  const data = await fetchAPI(
    `
    query tariffTitles {
      pages {
        nodes {
          tariffsTitles {
            allTitles {
              normalTitle
              coloredTitle
              tableTitle
            }
          }
        }
      }
    }
      `,
  );

  return data?.pages?.nodes[2].tariffsTitles.allTitles[0];
}

export async function getQueryTariffs() {
  const data = await fetchAPI(
    `
        query Tariffs {
            pages {
              nodes {
                tariffs {
                  tariffs {
                    type
                    desccription
                    title
                    range
                    pricesInfo {
                      item {
                        dailyLoss
                        dollarPrice
                        fieldGroupName
                        leverage
                        maxDays
                        minDays
                        newsTrading
                        price
                        refund
                        robot
                        target1
                        target2
                        totalLoss
                      }
                    }
                  }
                }
              }
            }
          }
          
          
      `,
  );

  return data?.pages?.nodes[2].tariffs;
}


export async function getQueryFaqHomeSection() {
  const data = await fetchAPI(
    `
    query faqHomeSection {
      pages {
        nodes {
          homepage {
            faqSection {
              question {
                description
                title
              }
              miniTitle
              title {
                coloredTitle
                normalTitle
              }
            }
          }
        }
      }
    }
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQuerySuccessSection() {
  const data = await fetchAPI(
    `
    query successSection {
      pages {
        nodes {
          homepage {
            successSection {
              description
              title {
                normaltitle
                coloredtitle
              }
            }
          }
        }
      }
    }
                  
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQueryAboutUsSection() {
  const data = await fetchAPI(
    `
    query aboutUsSection {
      pages {
        nodes {
          homepage {
            aboutUs {
              normaltitle
              coloredtitle
              description
            }
          }
        }
      }
    }
                    
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQueryAccountGrowthSection() {
  const data = await fetchAPI(
    `
        query accountGrowthSection {
            pages {
              nodes {
                homepage {
                  accountGrowth {
                    normalTitle
                    coloredTitle
                    description
                  }
                }
              }
            }
          }
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQueryCollabrationSuccessSection() {
  const data = await fetchAPI(
    `
        query collabrationSuccessSection {
            pages {
              nodes {
                homepage {
                  collabrationSuccessSection {
                    normalTitle
                    coloredTitle
                    description
                  }
                }
              }
            }
          }
      `,
  );

  return data?.pages?.nodes[2];
}


export async function getQueryCollabrationSuccessSectionTitle() {
  const data = await fetchAPI(
    `
    query collabrationSuccessTitle {
      pages {
        nodes {
          homepage {
            collabrationSuccessTitle {
              coloredTitle
              normalTitle
            }
          }
        }
      }
    }
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQuerySuccessSteps() {
  const data = await fetchAPI(
    `
        query successSteps {
            pages {
              nodes {
                homepage {
                  successSteps {
                    item {
                      title
                      description
                    }
                    title {
                      normalTitle
                      coloredTitle
                    }
                  }
                }
              }
            }
          }          
      `,
  );

  return data?.pages?.nodes[2];
}

export async function getQueryFooter() {
  const data = await fetchAPI(
    `
        query Footer {
            pages {
              nodes {
                footer {
                  phone
                  email
                  address
                }
              }
            }
          } 
      `,
  );

  return data?.pages?.nodes[2];
}


export async function getQueryRules() {
  const data = await fetchAPI(
    `
      query rules {
        pages {
          nodes {
            rules {
              title {
                coloredTitle
                fieldGroupName
                normalTitle
              }
              description
              classRules {
                title
                feature
                items {
                  title
                  description
                }
              }
              allRules {
                title
                description
              }
            }
          }
        }
      }
    `,
  );

  return data?.pages?.nodes[2].rules;
}


export async function getQueryDiscountCodes() {
  const data = await fetchAPI(
    `
    query discount {
      pages {
        nodes {
          discountCoupon {
            discountCode {
              code
              discountAmount
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].discountCoupon;
}


export async function getQueryFaq() {
  const data = await fetchAPI(
    `
    query faq {
      pages {
        nodes {
          faq {
            question {
              title
              description
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].faq.question;
}

export async function getQueryBlogs() {
  const data = await fetchAPI(
    `
    query blogs {
      pages {
        nodes {
          blog {
            blogs {
              title
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].blog.blogs;
}

export async function getQueryAboutUs() {
  const data = await fetchAPI(
    `
    query aboutUs {
      pages {
        nodes {
          aboutus {
            title {
              mainTitle
              miniTitle
            }
            description
            features {
              item
            }
            statsTitle {
              normalTitle
              coloredTitle
              miniTitle
            }
            stats {
              item {
                title
                stat
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].aboutus;
}

export async function registerUserMutation(input: any) {
  const mutation = `
    mutation RegisterUser($input: RegisterUserInput!) {
      registerUser(input: $input) {
        user {
          jwtAuthToken
          jwtRefreshToken
        }
      }
    }
  `;

  return await fetchAPI(mutation, { variables: { input } });
}

export async function loginMutation(input: any) {
  const mutation = `
  mutation LoginMutation {
    login(input: {password: "tripleH1321@", username: "AmirNbk7"}) {
      refreshToken
      user {
        username
        userId
      }
      authToken
    }
  }
  `;

  return await fetchAPI(mutation, { variables: { input } });
}
