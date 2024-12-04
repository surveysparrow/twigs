import React from 'react';
import { Cascader } from '../cascader';

export default {
  component: Cascader,
  title: 'Form/Cascader'
};

const Template = (args) => (
  <Cascader
    {...args}
    data={[
      {
        label: 'India',
        value: 'india',
        options: [
          {
            label: 'North',
            value: 'india-north',
            options: [
              {
                label: 'Delhi',
                value: 'delhi',
                options: [
                  {
                    label: 'New Delhi',
                    value: 'new-delhi',
                    options: [
                      {
                        label: 'Chanakyapuri',
                        value: 'chanakyapuri'
                      },
                      {
                        label: 'Saket',
                        value: 'saket'
                      }
                    ]
                  },
                  {
                    label: 'South Delhi',
                    value: 'south-delhi'
                  }
                ]
              },
              {
                label: 'Punjab',
                value: 'punjab',
                options: [
                  {
                    label: 'Amritsar',
                    value: 'amritsar',
                    options: [
                      {
                        label: 'Golden Temple Area',
                        value: 'golden-temple-area'
                      }
                    ]
                  },
                  {
                    label: 'Ludhiana',
                    value: 'ludhiana'
                  }
                ]
              }
            ]
          },
          {
            label: 'South',
            value: 'india-south',
            options: [
              {
                label: 'Karnataka',
                value: 'karnataka',
                options: [
                  {
                    label: 'Bengaluru',
                    value: 'bengaluru',
                    options: [
                      {
                        label: 'Whitefield',
                        value: 'whitefield'
                      },
                      {
                        label: 'Koramangala',
                        value: 'koramangala'
                      }
                    ]
                  },
                  {
                    label: 'Mysuru',
                    value: 'mysuru'
                  }
                ]
              },
              {
                label: 'Kerala',
                value: 'kerala',
                options: [
                  {
                    label: 'Alappuzha',
                    value: 'alappuzha',
                    options: [
                      {
                        label: 'Kuttanad',
                        value: 'kuttanad'
                      },
                      {
                        label: 'Ambalappuzha',
                        value: 'ambalappuzha',
                        options: [
                          {
                            label: 'North',
                            value: 'ambalappuzha-north'
                          },
                          {
                            label: 'South',
                            value: 'ambalappuzha-south'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    label: 'Kochi',
                    value: 'kochi',
                    options: [
                      {
                        label: 'Fort Kochi',
                        value: 'fort-kochi'
                      },
                      {
                        label: 'Marine Drive',
                        value: 'marine-drive'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'USA',
        value: 'usa',
        options: [
          {
            label: 'Northeast',
            value: 'usa-northeast',
            options: [
              {
                label: 'New York',
                value: 'new-york',
                options: [
                  {
                    label: 'New York City',
                    value: 'new-york-city',
                    options: [
                      {
                        label: 'Manhattan',
                        value: 'manhattan'
                      },
                      {
                        label: 'Brooklyn',
                        value: 'brooklyn'
                      }
                    ]
                  },
                  {
                    label: 'Buffalo',
                    value: 'buffalo'
                  }
                ]
              },
              {
                label: 'Massachusetts',
                value: 'massachusetts',
                options: [
                  {
                    label: 'Boston',
                    value: 'boston',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown'
                      },
                      {
                        label: 'Cambridge',
                        value: 'cambridge'
                      }
                    ]
                  },
                  {
                    label: 'Worcester',
                    value: 'worcester'
                  }
                ]
              }
            ]
          },
          {
            label: 'South',
            value: 'usa-south',
            options: [
              {
                label: 'Texas',
                value: 'texas',
                options: [
                  {
                    label: 'Houston',
                    value: 'houston',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-houston'
                      },
                      {
                        label: 'The Woodlands',
                        value: 'the-woodlands'
                      }
                    ]
                  },
                  {
                    label: 'Austin',
                    value: 'austin'
                  }
                ]
              },
              {
                label: 'Florida',
                value: 'florida',
                options: [
                  {
                    label: 'Miami',
                    value: 'miami',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-miami'
                      },
                      {
                        label: 'South Beach',
                        value: 'south-beach'
                      }
                    ]
                  },
                  {
                    label: 'Orlando',
                    value: 'orlando'
                  }
                ]
              }
            ]
          },
          {
            label: 'West',
            value: 'usa-west',
            options: [
              {
                label: 'California',
                value: 'california',
                options: [
                  {
                    label: 'Los Angeles',
                    value: 'los-angeles',
                    options: [
                      {
                        label: 'Hollywood',
                        value: 'hollywood'
                      },
                      {
                        label: 'Beverly Hills',
                        value: 'beverly-hills'
                      }
                    ]
                  },
                  {
                    label: 'San Francisco',
                    value: 'san-francisco',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-san-francisco'
                      },
                      {
                        label: 'Golden Gate',
                        value: 'golden-gate'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Washington',
                value: 'washington',
                options: [
                  {
                    label: 'Seattle',
                    value: 'seattle',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-seattle'
                      },
                      {
                        label: 'Capitol Hill',
                        value: 'capitol-hill'
                      }
                    ]
                  },
                  {
                    label: 'Spokane',
                    value: 'spokane'
                  }
                ]
              }
            ]
          },
          {
            label: 'Midwest',
            value: 'usa-midwest',
            options: [
              {
                label: 'Illinois',
                value: 'illinois',
                options: [
                  {
                    label: 'Chicago',
                    value: 'chicago',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-chicago'
                      },
                      {
                        label: 'Lincoln Park',
                        value: 'lincoln-park'
                      }
                    ]
                  },
                  {
                    label: 'Springfield',
                    value: 'springfield'
                  }
                ]
              },
              {
                label: 'Ohio',
                value: 'ohio',
                options: [
                  {
                    label: 'Columbus',
                    value: 'columbus'
                  },
                  {
                    label: 'Cleveland',
                    value: 'cleveland',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-cleveland'
                      },
                      {
                        label: 'University Circle',
                        value: 'university-circle'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Canada',
        value: 'canada',
        options: [
          {
            label: 'Western Canada',
            value: 'western-canada',
            options: [
              {
                label: 'British Columbia',
                value: 'british-columbia',
                options: [
                  {
                    label: 'Vancouver',
                    value: 'vancouver',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-vancouver'
                      },
                      {
                        label: 'Richmond',
                        value: 'richmond'
                      }
                    ]
                  },
                  {
                    label: 'Victoria',
                    value: 'victoria'
                  }
                ]
              },
              {
                label: 'Alberta',
                value: 'alberta',
                options: [
                  {
                    label: 'Calgary',
                    value: 'calgary',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-calgary'
                      },
                      {
                        label: 'Beltline',
                        value: 'beltline'
                      }
                    ]
                  },
                  {
                    label: 'Edmonton',
                    value: 'edmonton'
                  }
                ]
              }
            ]
          },
          {
            label: 'Central Canada',
            value: 'central-canada',
            options: [
              {
                label: 'Ontario',
                value: 'ontario',
                options: [
                  {
                    label: 'Toronto',
                    value: 'toronto',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-toronto'
                      },
                      {
                        label: 'Scarborough',
                        value: 'scarborough'
                      }
                    ]
                  },
                  {
                    label: 'Ottawa',
                    value: 'ottawa',
                    options: [
                      {
                        label: 'Kanata',
                        value: 'kanata'
                      },
                      {
                        label: 'Nepean',
                        value: 'nepean'
                      }
                    ]
                  }
                ]
              },
              {
                label: 'Quebec',
                value: 'quebec',
                options: [
                  {
                    label: 'Montreal',
                    value: 'montreal',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-montreal'
                      },
                      {
                        label: 'Old Montreal',
                        value: 'old-montreal'
                      }
                    ]
                  },
                  {
                    label: 'Quebec City',
                    value: 'quebec-city'
                  }
                ]
              }
            ]
          },
          {
            label: 'Atlantic Canada',
            value: 'atlantic-canada',
            options: [
              {
                label: 'Nova Scotia',
                value: 'nova-scotia',
                options: [
                  {
                    label: 'Halifax',
                    value: 'halifax',
                    options: [
                      {
                        label: 'Downtown',
                        value: 'downtown-halifax'
                      },
                      {
                        label: 'Dartmouth',
                        value: 'dartmouth'
                      }
                    ]
                  },
                  {
                    label: 'Cape Breton',
                    value: 'cape-breton'
                  }
                ]
              },
              {
                label: 'Newfoundland and Labrador',
                value: 'newfoundland-and-labrador',
                options: [
                  {
                    label: "St. John's",
                    value: 'st-johns'
                  }
                ]
              }
            ]
          },
          {
            label: 'Northern Canada',
            value: 'northern-canada',
            options: [
              {
                label: 'Yukon',
                value: 'yukon',
                options: [
                  {
                    label: 'Whitehorse',
                    value: 'whitehorse'
                  }
                ]
              },
              {
                label: 'Northwest Territories',
                value: 'northwest-territories',
                options: [
                  {
                    label: 'Yellowknife',
                    value: 'yellowknife'
                  }
                ]
              },
              {
                label: 'Nunavut',
                value: 'nunavut',
                options: [
                  {
                    label: 'Iqaluit',
                    value: 'iqaluit'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]}
  />
);
export const Default = Template.bind({});
