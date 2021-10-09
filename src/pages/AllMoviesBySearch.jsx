import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Spinner,
  Button,
  InputGroup,
} from "react-bootstrap";
import { useQuery } from "react-query";
import { getMoviesBySearch } from "../services/TMDBApi";
import { useUrlSearchParams } from "use-url-search-params";
import { Search } from "react-bootstrap-icons";
import AllMoviesCardList from "../components/AllMoviesCardList";

const AllMoviesBySearch = () => {
  const [searchParams, setSearchParams] = useUrlSearchParams(
    { query: null, page: null },
    { page: Number }
  );
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [formQuery, setFormQuery] = useState("");
  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ["movies-search", searchParams],
    () => getMoviesBySearch(searchParams),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setSearchParams({ ...searchParams, query, page });
    // eslint-disable-next-line
  }, [query, page]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(formQuery);
  };

  const handleSearchReset = (e) => {
    e.preventDefault();
    setFormQuery("");
    setQuery("");
  };

  if (isLoading) return <Spinner animation="border" size="sm" />;
  if (isError)
    return (
      <p className="text-center">An error has ocdured: {error.message} </p>
    );

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={10}>
          <Form onSubmit={handleSearchSubmit} onReset={handleSearchReset}>
            <Row className="align-items-center">
              <Col>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search movies"
                    aria-label="Search query"
                    onChange={(e) => setFormQuery(e.target.value)}
                    value={formQuery}
                  />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Button type="submit" variant="dark" disabled={isLoading}>
                  <Search />
                </Button>
                <Button type="reset" variant="secondary" disabled={isLoading}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      {searchParams.query && (
        <Col>
          {data?.results.length ? (
            <AllMoviesCardList
              data={data}
              isPreviousData={isPreviousData}
              page={page}
              setPage={setPage}
              paramsPage={searchParams.page}
            />
          ) : (
            <h4 className="mt-5 text-center">
              No result match your search. Try again "{searchParams.query}"
            </h4>
          )}
        </Col>
      )}
    </Container>
  );
};

export default AllMoviesBySearch;
