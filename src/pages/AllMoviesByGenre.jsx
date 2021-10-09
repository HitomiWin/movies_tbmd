import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import GenresButtons from "../components/GenresButtons";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getMoviesByGenre } from "../services/TMDBApi";
import { useUrlSearchParams } from "use-url-search-params";
import { useGenresContext } from "../contexts/GenresContext";
import AllMoviesCardList from "../components/AllMoviesCardList";

const AllMoviesByGenre = () => {
  const { genre_id } = useParams();
  const [params, setParams] = useUrlSearchParams({ page: 1 }, { page: Number });
  const [page, setPage] = useState(params.page);
  const { genreName } = useGenresContext();

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-genre", genre_id, params.page],
    () => getMoviesByGenre(genre_id, params.page),
    {
      keepPreviousData: true,
    }
  );
  useEffect(() => {
    setParams({ ...params, page });
    // eslint-disable-next-line
  }, [genre_id, page]);

  if (isLoading) return <Spinner animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );
  return (
    <Container className="mt-3">
      <h1>Genres</h1>
      <Row className="justify-content-center">
        <Col md="auto">
          <GenresButtons setPage={setPage} />
        </Col>
        <Col md="auto">
          <h1 className="mt-4">Genre: {genreName}</h1>
          <AllMoviesCardList
            paramsPage={params.page}
            data={data}
            isPreviousData={isPreviousData}
            page={page}
            setPage={setPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllMoviesByGenre;
