import React, { useState } from "react";
import { Spinner, Row, Button, Col } from "react-bootstrap";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../services/TMDBApi";
import MovieCardList from "./MovieCardList";

const TrendingMovies = ({ title }) => {
  const [timeWindow, setTimeWindow] = useState("day");
  const { isLoading, isError, error, data } = useQuery(
    ["trendin-movies", timeWindow],
    () => getTrendingMovies(timeWindow)
  );

  if (isLoading) return <Spinner animation="border" size="sm" />;

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    <div className="py-3">
      <Row>
        <Col>
          <h1>
            Trending{" "}
            {timeWindow === "day" ? <span>Daily</span> : <span>Weekly</span>}
          </h1>
        </Col>
        <Col className="text-end align-self-center">
          <Button
            onClick={() => setTimeWindow("day")}
            disabled={timeWindow === "day"}
            variant="dark"
            className="mx-1"
          >
            Daily
          </Button>
          <Button
            onClick={() => setTimeWindow("week")}
            disabled={timeWindow === "week"}
            variant="dark"
          >
            Weekly
          </Button>
        </Col>
      </Row>
      <MovieCardList data={data} />
    </div>
  );
};

export default TrendingMovies;
