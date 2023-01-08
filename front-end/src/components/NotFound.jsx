import { Link } from "react-router-dom";


const NotFound = () => {
    return (<div className="flex flex-col w-full h-screen items-center justify-center">
        <img src="404.png" alt="" />

        <div>این صفحه موجود نیست</div>
        <Link className="btn btn-black text-white" to="/">Go to Home</Link>
    </div>);
}

export default NotFound;