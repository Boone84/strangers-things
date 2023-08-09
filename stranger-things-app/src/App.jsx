import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Route path="/posts" component={Posts} />
      <Redirect from="/" to="/posts" />
    </Router>
  );
}

export default App;
