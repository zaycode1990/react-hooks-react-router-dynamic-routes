import React from "react";
// import the custom "useRouteMatch" hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList.js";
//import MovieShow component
import MovieShow from "./MovieShow.js";

function MoviesPage({ movies }) {
  const match = useRouteMatch()
  return (
    <div>
      <MoviesList movies={movies} />


        {/* Adding code to show a message to the user to select a movie if they haven't yet */}
        <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>


    {
      /*
      we can use the current URL from the `match` object as part of the path;
      this will generate a url like "/movies/:movieId"
      */
    }
     



    <Route path={`${match.url}/:movieId`}>
      <MovieShow movies={movies}/>
    </Route>
    </div>
  );
}
export default MoviesPage;
