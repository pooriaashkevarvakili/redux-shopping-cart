import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/features/cart";
import { useNavigate } from "react-router-dom"
const Home = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const data = useSelector((state) => state.products.items)
    const handleAddToCart = (product) => {
        dispatch(addTocart(product),)
        history('/cart')
    }
    return (<div className="grid 2xl:grid-cols-3 mt-4 place-items-center xl:grid-cols-2 grid-cols-1 gap-6">

        {
            data.map((product) => (
                <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <div>{product.price}</div>
                            <button onClick={() => handleAddToCart(product)} className="btn btn-primary">addTocart</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>);
}

export default Home;