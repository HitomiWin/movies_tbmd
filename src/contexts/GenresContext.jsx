import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getGenre } from "../services/TMDBApi";

const GenresContext = createContext();

export const useGenresContext = () => {
  return useContext(GenresContext);
};

const GenresContextProvider = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery(
    "genre",
    () => getGenre(),
    {
      staleTime: 1000 * 60 * 10, // 10 mins // stop to refetch unnecessarily
      cacheTime: 1000 * 60 * 60 * 1, // 1 hors // because ganre dosen't need to get often
    }
  );
  const [genreId, setGenreId] = useState(null);
  const [genreName, setGenreName] = useState("");

  useEffect(() => {
    if (data) {
      setGenreId(data.genres[0].id);
      setGenreName(data.genres[0].name);
    }
  }, [data]);

  const getGenreId = (id) => {
    setGenreId(id);
  };
  const getGenreName = (name) => {
    setGenreName(name);
  };

  const values = {
    genreId,
    getGenreId,
    genreName,
    getGenreName,
    data,
    isLoading,
    isError,
    error,
  };
  return (
    <GenresContext.Provider value={values}>{children}</GenresContext.Provider>
  );
};

export default GenresContextProvider;
