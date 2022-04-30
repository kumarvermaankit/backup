<!-- GET MENTORS - ALL FIELDS -->

{
getMentors(limit:5){
ID,
user_type,
identity{
personal_information{
first_name,
last_name
}
},
workAndStudies{
employment{
designation,
organization_name,
worked_from{
year,
month
},
worked_till{
year,
month

        },
        description
      },
      education{
        course_name,
        specialization,
        institute_name,
        course_type,
        passed_in{
          year,
          month
        }
      },
      certification{
        name,
        issuing_organization,
        recieved_in{
          year,
          month
        },
        description
      }
    },
    aboutYourself{
      summary,
      about_yourself,
      links{
        title,
        url
      }
    },
    recommendations{
    	links{
        url
      }
    },
    skills{
      title
    },
    financial{
      desired_pricing_band{
        lower_limit,
        upper_limit
      }
    }

}
}

<!-- CALLING SIMPLE GRAPHQL QUERY -->

````jsx
<Query
    query={gql`
    {
      getMentors(limit:5){
        ID,
        identity{
          personal_information{
            first_name,
            last_name
          }
        },
        aboutYourself{
          summary,
          about_yourself,
        },
        skills{
          title
        }
    }
    }
    `}
  >
    {({ loading, error, data }:any) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.getMentors.map((item:any) =>(
        <MenteeCard item={item}/>
      ));
    }}
  </Query> */}```
````

<!-- APP SYNC API CALL - EXAMPLE  or use Connect-->

```jsx
const [menteeListGraphQL,setMenteeListGraphQL]=useState([] as any);
async function fetchListGRAPHQL() {
 try {
   const todoData = await API.graphql(graphqlOperation(listPortfolios,{limit:5})) as any;
   let list=todoData.data.listPortfolios.items
   console.log(list)
   setMenteeListGraphQL(list)
 } catch (err) {
   console.log(err)
   console.log('error fetching todos')
 }
}
```

```jsx
// APPSYNC
<Connect query={graphqlOperation(listPortfolios, { limit: 5 })}>
  {({ data: { listPortfolios: listPortfolios } }: any) => {
    if (!listPortfolios) {
      return null;
    }
    // console.log(listPortfolios.items)
    // console.log(listPortfolios.nextToken)
    listPortfolios.items.map((mentee: any) => {});
    return <div>h</div>;
  }}
</Connect>
```

<!-- APP SYNC STRING QUERY -->

````jsx
<Connect query={graphqlOperation(`query {
    listPortfolios(${filter}) {
      items {
        experience
        skills
      }
    }
  }`)}>
  {({ data: { listPortfolios: listPortfolios } }: any) => {
    if (!listPortfolios) {
      return null;
    }
    console.log(listPortfolios.items)
    return <div></div>;
  }}
</Connect>
    ```
````
