import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomeComponent = lazy(() => import('./pages/home'));
const NewFilmComponent = lazy(() => import('./pages/new-film'));
const SearchComponent = lazy(() => import('./pages/search-film'));

const Movies = () => {
  return(
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/new-film">
            <NewFilmComponent />
          </Route>
          <Route path="/search-film">
            <SearchComponent />
          </Route>
          <Route extract path="/">
            <HomeComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
} 
export default Movies;