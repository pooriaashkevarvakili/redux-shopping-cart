import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { addTocart, getTotals, remove, clear, decrement } from "../redux/features/cart"
const Cart = () => {
    const dispatch = useDispatch()
    const { cart, cartTotalAmount } = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
    return (<div >
        {
            cart.length === 0 ? (
                <div className="flex flex-col  items-center justify-center w-full h-screen">
                    <div>cart is empty</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <Link className="btn btn-primary" to="/">Home</Link>
                </div>
            ) : (
                <div className="grid 2xl:grid-cols-3 mt-4 place-items-center xl:grid-cols-2 grid-cols-1 gap-6" >
                    {cart.map((product) => (
                        <div key={product.id} className="card w-96 dark:bg-black bg-base-100 shadow-xl">
                            <figure><img src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black dark:text-white">{product.name}</h2>

                                <div className="card-actions justify-between">
                                    <p className="text-black dark:text-white">{product.price}</p>
                                    <button onClick={() => dispatch(remove(product))} className="btn btn-primary">remove</button>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <button onClick={() => dispatch(addTocart(product))} className="btn btn-sm btn-primary">+</button>
                                        <button className="ml-3 text-black dark:text-white">{product.quantity}</button>
                                        <button onClick={() => dispatch(decrement(product))} className="btn ml-3 btn-sm btn-primary">-</button>
                                    </div>
                                    <div className="text-black dark:text-white">${product.price * product.quantity}</div>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(clear())} className="btn btn-primary">clear</button>
                                </div>
                                <div>
                                    <span className="text-black dark:text-white">subtotal</span>
                                    <span className="text-black dark:text-white">${cartTotalAmount}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            )

        }

    </div>)
}
export default Cart