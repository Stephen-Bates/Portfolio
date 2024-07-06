import AboutPage from './AboutPage.jsx'
import ContactPage from './ContactPage.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import ResumePage from './ResumePage.jsx'
import ErrorPage from './ErrorPage.jsx'

const pages = {
    children: [
        {
            index: true,
            element: <AboutPage />
        },
        {
            path: '/Contact',
            element: <ContactPage />
        },
        {
            path: '/Portfolio',
            element: <PortfolioPage />
        },
        {
            path: '/Resume',
            element: <ResumePage />
        },
    ],
    error: <ErrorPage />
}

export default pages
