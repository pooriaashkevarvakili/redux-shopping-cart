import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../dark/useDarkSide";
const Navbar = () => {
    const { cart } = useSelector(state => state.cart)
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    return (
        <div className="navbar 2xl:flex-row xl:flex-row lg:flex-row flex-col bg-orange-400 dark:bg-black">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white">فروشگاه اینترنتی</Link>
            </div>
            <div className="flex-1 mt-4">
                <DarkModeSwitch
                    style={{ marginBottom: "2rem" }}
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    size={30}
                />
            </div>

            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn text-white btn-ghost btn-circle">
                        <Link to="/cart">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7  w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item text-white">{cart.length}</span>
                            </div>
                        </Link>
                    </label>
                </div>
            </div>
        </div>);
}

export default Navbar;
