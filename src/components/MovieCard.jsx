import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

// This card is used several times at some components
const MovieCard = ({ movie }) => {
  const history = useHistory();
  const posterUrl = useGetPoster(movie.poster_path);
  const handleOnClick = () => {
    history.push(`/movie/${movie.id}`);
  };
  return (
    <>
      {movie && (
        <Col xs={6} md={3} lg={2} className={"my-3 movie-card-wrapper"}>
          <Card className="movie-card" onClick={handleOnClick}>
            <Card.Img
              variant="top"
              src={posterUrl}
              alt="no image"
              height="250px"
              className="image"
            />

            <Card.Body className={"d-flex flex-column justify-content-between"}>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>Release date: {movie.release_date}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default MovieCard;
