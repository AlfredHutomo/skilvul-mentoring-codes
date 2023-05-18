import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <h1>Hello, this is homepage</h1>
            <Link to={"/todo"}>
                <button className="btn">Go to todo page</button>
            </Link>
        </div>
    ) 
}

export default HomePage