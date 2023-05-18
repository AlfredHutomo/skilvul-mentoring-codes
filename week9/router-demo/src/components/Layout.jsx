import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <nav >
                <ul className="flex gap-2 p-2 bg-slate-500 text-white">
                    <li >
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/todo"}>Todo</Link>
                    </li>
                    <li>
                        <Link to={"/app"}>App</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout