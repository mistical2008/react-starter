import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LayoutMain } from 'src/widgets'

import { withPageLoading } from './lib/providers'

const HomePage = lazy(() => import('pages/home-page'))
// import HomePage from 'pages/home-page'

const routes = [
    { path: '/', name: 'Главная', element: withPageLoading(HomePage) },
]

function Routing() {
    const homeRoute = routes.find((route) => route.path === '/')

    return (
        <Routes>
            <Route path="/" element={<LayoutMain />}>
                {routes.map((route) => (
                    // TODO: if route.path matches :exId than replace :exId with current experiment id
                    <Route
                        index={route.path === homeRoute?.path}
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route path="*" element={<div> Not found: 404 </div>} />
            </Route>
        </Routes>
    )
}

export { Routing, routes }
