import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

//the component with scroll
const MovieCardList = ({ data }) => {
  return (
    <>
      <Row className="moviecard-list  flex-nowrap overflow-auto">
        {data?.results?.map((result, i) => (
          <MovieCard movie={result} key={i} />
        ))}
      </Row>
    </>
  );
};

export default MovieCardList;
