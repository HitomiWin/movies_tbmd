import React from "react";
import { Col, Card } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";
import { useHistory } from "react-router-dom";

const PersonCard = ({ person }) => {
  const history = useHistory();
  const posterUrl = useGetPoster(person.profile_path);

  return (
    <>
      {person && (
        <Col xs={6} md={3} lg={2} className={"person-card-wrapper "}>
          <Card
            className="person-card "
            onClick={() => history.push(`/person/${person.id}`)}
          >
            <Card.Img
              variant="top"
              src={posterUrl}
              height="250"
              alt="No image"
              className="text-center"
            />
            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>{person.character}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default PersonCard;
