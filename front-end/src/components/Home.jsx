
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../redux/features/cart'
export default function Home() {
    const dispatch = useDispatch()
    const { products, loading } = useSelector((state) => state.products)


    if (loading) return <p>Loading...</p>

    return (
        <div>
            <div>

                {
                    (
                        <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 place-items-center gap-6 ">
                            {
                                products.map((product) => (
                                    <div key={product.id} >
                                        <div className="card dark:bg-black w-96 bg-base-100 shadow-xl">
                                            <figure><img className="" src={product.img} alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title dark:text-white">{product.name}</h2>
                                                <div className="card-actions justify-between">
                                                    <div className="dark:text-white">{product.price}</div>
                                                    <button onClick={() => dispatch(addTocart(product))} className="btn btn-primary">افزودن به صفحه خرید</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}