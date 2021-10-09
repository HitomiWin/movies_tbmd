const useGetPoster = (path = null) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${path}`
  return path ?
    posterUrl : null
}

export default useGetPoster