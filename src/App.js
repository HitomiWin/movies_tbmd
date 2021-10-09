import {Route, Switch} from'react-router-dom'
import AllMoviesByGenre from './pages/AllMoviesByGenre';
import Home from "./pages/Home";
import Navigation from "./pages/partials/Navigation";
import MovieDetailsPage from './pages/MovieDetailsPage'
import PersonPage from './pages/PersonPage'
import NotFoundPage from './pages/NotFoundPage';
import AllMoviesBySearch from './pages/AllMoviesBySearch';
import HistoryPage from './pages/HistoryPage';

function App() {
  return (
    <>
    <div id="App">
      <Navigation/>
      <Switch>
      <Route exact path="/">
        <Home />       
      </Route>

      <Route path="/movie/:movie_id">
        <MovieDetailsPage  />
      </Route>

      <Route  path="/movies/genres/:genre_id">    
        <AllMoviesByGenre />   
      </Route>

      <Route  path="/person/:person_id">    
        <PersonPage /> 
      </Route>

      <Route  path="/movies/search">    
        <AllMoviesBySearch /> 
      </Route>

      <Route  path="/movies/history">    
        <HistoryPage/> 
      </Route>
     
      <Route>
        <NotFoundPage />
      </Route>

    </Switch>
    </div>
    </>
  );
}

export default App;
