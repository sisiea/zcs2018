import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router,hashHistory,IndexRedirect,Route} from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import "./animate.less";
import "./indexContent.less";

export class Index extends React.Component<any, any> {
  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={App}>
              <IndexRedirect to="/home" />
              <Route path="/home" component={HomePage} />
          </Route> 
      </Router>        
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
