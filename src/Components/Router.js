import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header";
import Movie from "../Routes/Movie";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Movie} />
                <Route path="/tv" exact component={Tv} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to={"/"} />
            </Switch>
        </>
    </Router>
)