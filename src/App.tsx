import React, {lazy, Suspense } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route,
} from "react-router-dom";
import "./App.css";
import store from "./components/redux/store";
import Navbar from "./components/Navbar/Navbar";
// import SingleGif from "./pages/SingleGif/SingleGif";
 
const Home = lazy(() => import("./pages/Home"));
const SingleGif= lazy(() => import("./pages/SingleGif/SingleGif"));
 
function App() {
  return (
    <Suspense fallback ='LOADING'>
      <Provider store={store}>
        <React.Fragment>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gif/:id" component={SingleGif} />
            </Switch>
          </Router>
        </React.Fragment>
      </Provider>
    </Suspense>
  );
}

export default App;
