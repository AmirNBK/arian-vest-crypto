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
                    title
                  }
                }
              }
            }
          }
      `,
    );

    return data?.pages?.nodes[0].homepage.tariffSection[0];
}

export async function getQueryTariffs() {
    const data = await fetchAPI(
        `
        query Tariffs {
            pages {
              nodes {
                tariffs {
                  tariffs {
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

    return data?.pages?.nodes[0].tariffs;
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
                  }
                }
              }
            }
          } 
      `,
    );

    return data?.pages?.nodes[0];
}

export async function getQuerySuccessSection() {
    const data = await fetchAPI(
        `
        query successSection {
            pages {
              nodes {
                homepage {
                  successSection
                }
              }
            }
          }
                  
      `,
    );

    return data?.pages?.nodes[0];
}

export async function getQueryAboutUsSection() {
    const data = await fetchAPI(
        `
        query aboutUsSection {
            pages {
              nodes {
                homepage {
                  aboutUs
                }
              }
            }
          }
                    
      `,
    );

    return data?.pages?.nodes[0];
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

    return data?.pages?.nodes[0];
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

    return data?.pages?.nodes[0];
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
                  }
                }
              }
            }
          }          
      `,
    );

    return data?.pages?.nodes[0];
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

    return data?.pages?.nodes[0];
}