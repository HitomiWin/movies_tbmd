import React from "react";
import { Container, Row } from "react-bootstrap";
import PersonCard from "./PersonCard";

const PersonCardList = ({ cast }) => {
  return (
    <Container className="my-5">
      <h1>Cast</h1>
      <Row className="personcard-list  flex-nowrap overflow-auto overflow-x-hidden">
        {cast?.map((person, i) => (
          <PersonCard person={person} key={i} />
        ))}
      </Row>
    </Container>
  );
};

export default PersonCardList;
