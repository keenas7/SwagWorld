import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/root';
import ErrorPage from "./error-page";
import BackroomsNav from './pages/BackroomsNav.jsx';
import Contact from './pages/Contact.jsx';
import Gallery from './pages/Gallery.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path: "/backroomsNav",
        element: <BackroomsNav/>,
    },
    {
        path: "/gallery",
        element: <Gallery/>,
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
