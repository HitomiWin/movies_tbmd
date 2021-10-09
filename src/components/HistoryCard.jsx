import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import useGetPoster from "../hooks/useGetPoster";

const HitoryCard = ({ movie, day, time }) => {
  const history = useHistory();
  const posterUrl = useGetPoster(movie.poster_path);
  const handleOnClick = () => {
    history.push(`/movie/${movie.id}`);
  };
  return (
    <>
      {movie && (
        <Card className="movie-card" onClick={handleOnClick}>
          <Row>
            <Col xs={4} md={3}>
              <Card.Img
                variant="top"
                src={posterUrl}
                alt="no image"
                height="150"
                className="image"
              />
            </Col>
            <Col>
              <Card.Body
                className={
                  "card-body d-flex flex-column justify-content-between "
                }
              >
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>Release date: {movie.release_date}</Card.Text>
                <Card.Text className="time-stamp text-end">
                  {day}/{time}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default HitoryCard;
