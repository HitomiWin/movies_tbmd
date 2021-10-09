import React from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getCategorizedMovies } from "../services/TMDBApi";
import MovieCardList from "./MovieCardList";

const CategorizedMovies = ({ type, title }) => {
  const { isLoading, isError, error, data } = useQuery(type, () =>
    getCategorizedMovies(type)
  );

  if (isLoading) return <Spinner animation="border" size="sm" />;

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    <div className="py-3">
      <h1>{title}</h1>
      <MovieCardList data={data} />
    </div>
  );
};

export default CategorizedMovies;
