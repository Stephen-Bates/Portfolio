import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import ResumePage from './ResumePage.jsx'
import ErrorPage from './ErrorPage.jsx'

const pages = {
    children: [
        {
            index: true,
            path: '/',
            element: <AboutPage />,
            name: "About",
        },
        {
            path: '/Contact',
            element: <ContactPage />,
            name: "Contact",
        },
        {
            path: '/Portfolio',
            element: <PortfolioPage />,
            name: "Portfolio",
        },
        {
            path: '/Resume',
            element: <ResumePage />,
            name: "Resume",
        },
    ],
    error: <ErrorPage />
}

export default pages
