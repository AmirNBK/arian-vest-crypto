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
            engTariffSection {
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

  return data?.pages?.nodes[2].homepage;
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
            engAllTitles {
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

  return data?.pages?.nodes[2].tariffsTitles;
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
                        profitShare
                      }
                    }
                  }
                  engTariffs {
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
                        profitShare
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
            engFaqSection {
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
            engSuccessSection {
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
            engAboutUs {
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
                  accountGrowthCop {
                    normalTitle
                    description
                    coloredTitle
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
                  engCollabrationSuccessSection {
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
            engCollabrationSuccessTitle {
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
                engSuccessSteps {
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

export async function getQueryEngFooter() {
  const data = await fetchAPI(
    `
    query engFooter {
      pages {
        nodes {
          engFooter {
            engPhone
            engEmail
            engAddress
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
              engAllRules {
                title
                description
              }
              engClassRules {
                title
                feature
                items {
                  title
                  description
                }
              }
              engTitle {
                normalTitle
                coloredTitle
              }
              engDescription
              title {
                normalTitle
                coloredTitle
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



export async function getQueryRulesTitles() {
  const data = await fetchAPI(
    `
    query rulesTitles {
      pages {
        nodes {
          rulesTitles {
            mainTitles {
              title
              coloredTitle
            }
            engMainTitles {
              title
              coloredTitle
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].rulesTitles;
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
            engQuestion {
              title
              description
            }
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

  return data?.pages?.nodes[2].faq;
}

export async function getQueryBlogs() {
  const data = await fetchAPI(
    `
    query blogs {
      pages {
        nodes {
          blog {
            blogTitle {
              normalTitle
              coloredTitle
            }
            engBlogTitle {
              normalTitle
              coloredTitle
            }
            blogs {
              title
              image {
                mediaItemUrl
              }
              content
            }
            engBlogs {
              title
              image {
                mediaItemUrl
              }
              content
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].blog;
}

export async function getQueryAboutUs() {
  const data = await fetchAPI(
    `
    query aboutUs {
      pages {
        nodes {
          aboutus {
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

export async function getQueryEngAboutUs() {
  const data = await fetchAPI(
    `
    query engAboutUs {
      pages {
        nodes {
          englishAboutus {
            engStatsTitle {
              normalTitle
              miniTitle
              coloredTitle
            }
            engStats {
              item {
                title
                stat
              }
            }
            engFeatures {
              item
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].englishAboutus;
}


export async function getQueryAboutUsTitles() {
  const data = await fetchAPI(
    `
    query aboutUsTitles {
      pages {
        nodes {
          aboutUsTitles {
            titles {
              normalTitle
              coloredTitle
              miniTitle
              description
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].aboutUsTitles.titles[0];
}

export async function getQueryAboutUsTitlesEng() {
  const data = await fetchAPI(
    `
    query aboutUsTitlesEng {
      pages {
        nodes {
          englishAboutUsTitles {
            engTitles {
              normalTitle
              miniTitle
              coloredTitle
              description
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].englishAboutUsTitles.engTitles[0];
}


export async function getQueryLeaderboards() {
  const data = await fetchAPI(
    `
    query MyQuery2 {
      pages {
        nodes {
          homepage {
            fieldGroupName
          }
          leaderboards {
            leaderboards {
              accountSize
              maxReturn
              minReturn
              name
              profit
              months {
                month
              }
              amounts {
                amount
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[2].leaderboards;
}

