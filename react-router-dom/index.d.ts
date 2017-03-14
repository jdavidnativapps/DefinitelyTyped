// Type definitions for React Router 4.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-router-dom' {
  import {
    Prompt,
    MemoryRouter,
    Redirect,
    RouteComponentProps,
    PartialRouteComponentProps,
    RouteProps,
    Route,
    Router,
    StaticRouter,
    Switch,
    match,
    matchPath,
    withRouter
  } from 'react-router';
  import * as React from 'react';
  import * as H from 'history';


  interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?: () => void;
    forceRefresh?: boolean;
    keyLength?: number;
  }
  class BrowserRouter extends React.Component<BrowserRouterProps, void> {}


  interface HashRouterProps {
    basename?: string;
    getUserConfirmation?: () => void;
    hashType?: 'slash' | 'noslash' | 'hashbang';
  }
  class HashRouter extends React.Component<HashRouterProps, void> {}


  interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: H.LocationDescriptor;
    replace?: boolean;
  }
  class Link extends React.Component<LinkProps, void> {}


  interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?: (location: H.Location, props: any) => boolean;
  }
  class NavLink extends React.Component<NavLinkProps, void> {}


  export {
    BrowserRouter,
    HashRouter,
    LinkProps, // TypeScript specific, not from React Router itself
    Link,
    NavLink,
    Prompt,
    MemoryRouter,
    Redirect,
    RouteComponentProps, // TypeScript specific, not from React Router itself
    PartialRouteComponentProps, // TypeScript specific, not from React Router itself
    RouteProps, // TypeScript specific, not from React Router itself
    Route,
    Router,
    StaticRouter,
    Switch,
    match, // TypeScript specific, not from React Router itself
    matchPath,
    withRouter
  }
}
