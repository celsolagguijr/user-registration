import React, { JSX, lazy } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

const UserProfile = lazy(
  () => import("@app/features/UserProfile")
) as React.LazyExoticComponent<() => JSX.Element>;
const Login = lazy(
  () => import("@features/Login")
) as React.LazyExoticComponent<() => JSX.Element>;
const Register = lazy(
  () => import("@features/Register")
) as React.LazyExoticComponent<() => JSX.Element>;
const NotFound = lazy(
  () => import("@features/Login")
) as React.LazyExoticComponent<() => JSX.Element>;

export type RouteType = Omit<RouteProps, "children"> & {
  children?: RouteType[];
  isProtected?: boolean;
};

const appRoutes: RouteType[] = [
  {
    path: "login",
    element: <Login />,
    isProtected: false,
  },
  {
    path: "register",
    element: <Register />,
    isProtected: false,
  },
  {
    path: "user-profile",
    isProtected: true,
    element: <UserProfile />,
  },
  {
    path: "*",
    isProtected: false,
    element: <NotFound />,
  },
];

const createRoutes = (routes: RouteType[]) =>
  routes.map((route: RouteType) => {
    const { path, element, children, isProtected } = route;
    const Guard = isProtected ? ProtectedRoute : GuestRoute;

    if (children) {
      return (
        <Route key={path} path={path} element={<Guard>{element}</Guard>}>
          {createRoutes(children)}
        </Route>
      );
    }

    return <Route key={path} path={path} element={<Guard>{element}</Guard>} />;
  });

const AppRoutes = () => <Routes>{createRoutes(appRoutes)}</Routes>;

export default AppRoutes;
