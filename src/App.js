import React, { Suspense, Component, cloneElement } from "react";
import {
    HashRouter,
    BrowserRouter,
    Routes as Switch,
    Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import withRouter from "./helpers/withRouter";
import NotFound from "./components/NotFound";
import Spinner from "./components/Spinner";
import RouterConfig, { Routes } from "./router";
import AppConfig from "./config";
import "./App.css";

const RouteModule = (props) => {
    return (
        <TransitionGroup
            style={{ position: "releative" }}
            childFactory={(child) =>
                cloneElement(child, {
                    classNames:
                        props.history.action === "PUSH"
                            ? "app-push"
                            : "app-pop",
                })
            }
        >
            <CSSTransition
                timeout={AppConfig.animation.transition}
                key={props.location.pathname}
                unmountOnExit
            >
                <Switch location={props.location}>
                    <Route element={<NotFound />} path="*" />
                    {RouterConfig.map((item, index) => {
                        const Element = item;
                        return (
                            <Route
                                {...(Routes[index].index ? index : null)}
                                // name={Routes[index].tag}
                                path={Routes[index].path}
                                element={<Element />}
                                key={index}
                            />
                        );
                    })}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default class App extends Component {
    render() {
        const Routes = withRouter(RouteModule);
        document.title = `${AppConfig.site.title} ${AppConfig.site.subtitle}`;
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
        document.addEventListener("selectstart", (e) => {
            e.preventDefault();
        });

        if (AppConfig.router === "hash" || AppConfig.router === "redirect") {
            return (
                <HashRouter>
                    <Suspense fallback={<Spinner />}>
                        <Routes />
                    </Suspense>
                </HashRouter>
            );
        }

        return (
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes />
                </Suspense>
            </BrowserRouter>
        );
    }
}
