import React from "react";
import { Container, Heading3 } from "./";

export const Message = ({ loading, error }) => {
  return (
    <Container>
      <Heading3>
        {loading && "Loading..."}
        {error && "Error :"}
      </Heading3>
    </Container>
  );
};
