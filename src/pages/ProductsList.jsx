import { Link } from "react-router-dom"
import products from "../data/products"

export default function ProductsList(){
    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted">
                                ${product.price}
                            </p>
                            <Link 
                            to={`/products/${product.id}`}
                            className="btn btn-primary btn-sm"
                            >View Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
     )
}