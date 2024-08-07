import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h3>Something went wrong!</h3>
            <p>An unexpected error has occured</p>
            <br />
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
}

export default ErrorPage