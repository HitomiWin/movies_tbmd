import HistoryList from "../components/HistoryList";
import useLocalStorage from "../hooks/useLocalStorage";

const HistoryPage = () => {
  // eslint-disable-next-line
  const [savedMovies, setSavedMovies] = useLocalStorage("movies", []);

  return (
    <>
      <h1 className="text-center my-3">Your Movies History</h1>
      {savedMovies?.map((movie, i) => (
        <HistoryList movie={movie} key={i} />
      ))}
    </>
  );
};

export default HistoryPage;
