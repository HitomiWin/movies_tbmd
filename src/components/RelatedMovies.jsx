import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import MovieCardList from "./MovieCardList";
import { getRelatedMovies } from "../services/TMDBApi";

const RelatedMovies = () => {
  const { movie_id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ["related-movie", movie_id],
    () => getRelatedMovies(movie_id)
  );

  if (isLoading)
    return <Spinner className="text-center" animation="border" size="sm" />;

  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    <>
      <h1>Related Movies</h1>
      {data && <MovieCardList data={data} />}
    </>
  );
};

export default RelatedMovies;
