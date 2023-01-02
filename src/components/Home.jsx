import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../redux/features/cart";
const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.products.items)
    return (<div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 place-items-center gap-6 ">
        {
            data.map((product) => (
                <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="" src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <div className="card-actions justify-between">
                            <div>{product.price}</div>
                            <button onClick={() => dispatch(addTocart(product))} className="btn btn-primary">addTocart</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>);
}

export default Home;