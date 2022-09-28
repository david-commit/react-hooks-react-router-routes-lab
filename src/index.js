import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
    {/* <Route path='/' element={<Home />} />
    <Route path='/actors' element={<Actors />} />
    <Route path='/movies' element={<Movies />} />
    <Route path='/directors' element={<Directors />} /> */}
  </Router>,
  document.getElementById('root')
);
