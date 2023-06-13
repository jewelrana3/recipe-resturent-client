import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center p-4">
            <img src="https://i.ibb.co/z5pjVpN/lovepik-404-page-error-png-image-400217866-wh1200.png" alt="" />
           <Link to='/'> <p className="mt-8">Go To HOME PAGE</p></Link>
        </div>
    );
};

export default ErrorPage;