import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationButtons from "./PaginationButtons";

const AllMoviesCardList = ({
  data,
  isPreviousData,
  page,
  setPage,
  paramsPage,
}) => {
  return (
    <>
      <Container className="px-0">
        <Row className="px-0">
          {data?.results &&
            data.results.map((movie, i) => <MovieCard movie={movie} key={i} />)}
        </Row>
        <PaginationButtons
          page={page}
          setPage={setPage}
          paramsPage={paramsPage}
          totalPages={data.total_pages}
          isPreviousData={isPreviousData}
        />
      </Container>
    </>
  );
};

export default AllMoviesCardList;
