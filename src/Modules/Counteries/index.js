import React from "react";
import { Container, Card, Heading1, Message, Table } from "../../Utils";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CountriesList = ({ props }) => {
  function pushLink(code) {
    props.history.push(`countries/${code}`);
  }

  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        emoji
        continent {
          name
        }
        languages {
          name
          native
        }
      }
    }
  `);

  if (loading || error) return <Message loading={loading} error={error} />;

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Language (Native)</th>
          <th>Language (English)</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody>
        {data.countries.map(({ name, continent, languages, emoji, code }) => (
          <tr onClick={() => pushLink(code)} key={code}>
            <td>
              {emoji} {name}
            </td>
            <td>
              {languages.map((v, i) => (i === 0 ? v.name : ` - ${v.name}`))}
            </td>
            <td>
              {languages.map((x, i) => (i === 0 ? x.native : ` - ${x.native}`))}
            </td>
            <td>{continent.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const Countries = props => {
  return (
    <Container>
      <Card bgColor="white">
        <Heading1>Countries List</Heading1>
        <CountriesList props={props} />
      </Card>
    </Container>
  );
};
