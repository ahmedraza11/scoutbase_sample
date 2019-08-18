import React, { useState, useEffect } from "react";
import { Container, Card, Heading1, Heading3, Message } from "../../Utils";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const CountriesDetail = props => {
  const [country, setCountry] = useState();
  const { code } = props.match.params;

  const { loading, error, data } = useQuery(gql`
		{
			country(code: "${code}") {
				name
				emoji
				currency
				phone
			}
		}
		`);

  useEffect(() => {
    if (data && data.country) {
      setCountry(data.country);
    }
  }, [data]);

  if (loading || error) return <Message loading={loading} error={error} />;

  return (
    <Container>
      <Card bgColor="white">
        {country ? (
          <>
            <Heading1>
              {country.name} {country.emoji}
            </Heading1>
            <hr />
            <Heading3 bold>Currency: {country.currency}</Heading3>
            <Heading3 bold>Area Code: {country.phone}</Heading3>
          </>
        ) : (
          <Heading3>No Country Found:</Heading3>
        )}
      </Card>
    </Container>
  );
};
