import React from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getMovie } from "../services/TMDBApi";
import { Col, Row } from "react-bootstrap";
import HistoryCard from "./HistoryCard";

const HistoryList = ({ movie }) => {
  const { data, isLoading, isError, error } = useQuery(
    ["saved-movie", movie.id],
    () => getMovie(movie.id)
  );
  if (isLoading)
    return <Spinner className="text-center" animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    data && (
      <Row className="history-card-wrapper justify-content-center my-3">
        <Col md={8} lg={5}>
          <HistoryCard movie={data} day={movie.day} time={movie.time} />
        </Col>
      </Row>
    )
  );
};

export default HistoryList;
