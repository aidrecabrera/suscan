/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UnauthorizedImport } from './routes/_unauthorized'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedRegisterIndexImport } from './routes/_authenticated/register/index'
import { Route as AuthenticatedCasesIndexImport } from './routes/_authenticated/cases/index'

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')()
const UnauthorizedLoginLazyImport = createFileRoute('/_unauthorized/login')()
const AuthenticatedStudentsIndexLazyImport = createFileRoute(
  '/_authenticated/students/',
)()
const AuthenticatedCasesPendingLazyImport = createFileRoute(
  '/_authenticated/cases/pending',
)()
const AuthenticatedCasesNewLazyImport = createFileRoute(
  '/_authenticated/cases/new',
)()
const AuthenticatedCasesClosedLazyImport = createFileRoute(
  '/_authenticated/cases/closed',
)()
const AuthenticatedCasesAllLazyImport = createFileRoute(
  '/_authenticated/cases/all',
)()

// Create/Update Routes

const UnauthorizedRoute = UnauthorizedImport.update({
  id: '/_unauthorized',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/index.lazy').then((d) => d.Route),
)

const UnauthorizedLoginLazyRoute = UnauthorizedLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => UnauthorizedRoute,
} as any).lazy(() =>
  import('./routes/_unauthorized/login.lazy').then((d) => d.Route),
)

const AuthenticatedStudentsIndexLazyRoute =
  AuthenticatedStudentsIndexLazyImport.update({
    path: '/students/',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/students/index.lazy').then((d) => d.Route),
  )

const AuthenticatedRegisterIndexRoute = AuthenticatedRegisterIndexImport.update(
  {
    path: '/register/',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
)

const AuthenticatedCasesIndexRoute = AuthenticatedCasesIndexImport.update({
  path: '/cases/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedCasesPendingLazyRoute =
  AuthenticatedCasesPendingLazyImport.update({
    path: '/cases/pending',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/cases/pending.lazy').then((d) => d.Route),
  )

const AuthenticatedCasesNewLazyRoute = AuthenticatedCasesNewLazyImport.update({
  path: '/cases/new',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/cases/new.lazy').then((d) => d.Route),
)

const AuthenticatedCasesClosedLazyRoute =
  AuthenticatedCasesClosedLazyImport.update({
    path: '/cases/closed',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/cases/closed.lazy').then((d) => d.Route),
  )

const AuthenticatedCasesAllLazyRoute = AuthenticatedCasesAllLazyImport.update({
  path: '/cases/all',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/cases/all.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_unauthorized': {
      id: '/_unauthorized'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof UnauthorizedImport
      parentRoute: typeof rootRoute
    }
    '/_unauthorized/login': {
      id: '/_unauthorized/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof UnauthorizedLoginLazyImport
      parentRoute: typeof UnauthorizedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cases/all': {
      id: '/_authenticated/cases/all'
      path: '/cases/all'
      fullPath: '/cases/all'
      preLoaderRoute: typeof AuthenticatedCasesAllLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cases/closed': {
      id: '/_authenticated/cases/closed'
      path: '/cases/closed'
      fullPath: '/cases/closed'
      preLoaderRoute: typeof AuthenticatedCasesClosedLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cases/new': {
      id: '/_authenticated/cases/new'
      path: '/cases/new'
      fullPath: '/cases/new'
      preLoaderRoute: typeof AuthenticatedCasesNewLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cases/pending': {
      id: '/_authenticated/cases/pending'
      path: '/cases/pending'
      fullPath: '/cases/pending'
      preLoaderRoute: typeof AuthenticatedCasesPendingLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/cases/': {
      id: '/_authenticated/cases/'
      path: '/cases'
      fullPath: '/cases'
      preLoaderRoute: typeof AuthenticatedCasesIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/register/': {
      id: '/_authenticated/register/'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthenticatedRegisterIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/students/': {
      id: '/_authenticated/students/'
      path: '/students'
      fullPath: '/students'
      preLoaderRoute: typeof AuthenticatedStudentsIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedIndexLazyRoute,
    AuthenticatedCasesAllLazyRoute,
    AuthenticatedCasesClosedLazyRoute,
    AuthenticatedCasesNewLazyRoute,
    AuthenticatedCasesPendingLazyRoute,
    AuthenticatedCasesIndexRoute,
    AuthenticatedRegisterIndexRoute,
    AuthenticatedStudentsIndexLazyRoute,
  }),
  UnauthorizedRoute: UnauthorizedRoute.addChildren({
    UnauthorizedLoginLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_unauthorized"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/",
        "/_authenticated/cases/all",
        "/_authenticated/cases/closed",
        "/_authenticated/cases/new",
        "/_authenticated/cases/pending",
        "/_authenticated/cases/",
        "/_authenticated/register/",
        "/_authenticated/students/"
      ]
    },
    "/_unauthorized": {
      "filePath": "_unauthorized.tsx",
      "children": [
        "/_unauthorized/login"
      ]
    },
    "/_unauthorized/login": {
      "filePath": "_unauthorized/login.lazy.tsx",
      "parent": "/_unauthorized"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cases/all": {
      "filePath": "_authenticated/cases/all.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cases/closed": {
      "filePath": "_authenticated/cases/closed.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cases/new": {
      "filePath": "_authenticated/cases/new.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cases/pending": {
      "filePath": "_authenticated/cases/pending.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/cases/": {
      "filePath": "_authenticated/cases/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/register/": {
      "filePath": "_authenticated/register/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/students/": {
      "filePath": "_authenticated/students/index.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
