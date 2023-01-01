import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { count } from "../redux/features/cart";
const Navbar = () => {
    const dispatch = useDispatch()
    const { cartTotalQuantity } = useSelector(state => state.cart)
    return (
        <div class="navbar bg-black">
            <div class="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white">shoping-cart</Link>
            </div>
            <div class="flex-none">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn text-white btn-ghost btn-circle">
                        <Link to="/cart">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item text-white">{cartTotalQuantity}</span>
                            </div>
                        </Link>
                    </label>

                </div>

            </div>
        </div>);
}

export default Navbar;
