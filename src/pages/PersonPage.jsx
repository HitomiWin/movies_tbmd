import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPerson } from "../services/TMDBApi";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";
import MoviesByPerson from "../components/MoviesByPerson";

const PersonPage = () => {
  const { person_id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["person", person_id],
    () => getPerson(person_id)
  );
  const posterUrl = useGetPoster(data?.profile_path);

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );
  if (isLoading) return <Spinner animation="border" size="sm" />;

  return (
    data && (
      <Container>
        <Card className={"person-page mt-3 border-0"}>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card.Img src={posterUrl} alt="No image" className="text-center" />
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1 className={"mt-2"}>{data.name}</h1>
              <h5>Nown for</h5>
              <p>{data.known_for_department ?? "-"}</p>
              <h5>Birthday</h5>
              <p>{data.birthday ?? "-"}</p>
              <h5>Place of birth</h5>
              <p>{data.place_of_birth ?? "-"}</p>
              <h5>Also known as</h5>
              <p>{data.also_known_as.join(" / ") ?? "-"}</p>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <h5>Biography</h5>
              <p>{data.biography ?? "-"}</p>
            </Col>
          </Row>
        </Card>
        <MoviesByPerson />
      </Container>
    )
  );
};

export default PersonPage;
