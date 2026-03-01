import { useNavigate, useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails(){
    const {id} = useParams() // Get the product id from url params
    const navigate = useNavigate()

    const product = products.find(p => p.id === id)

// Product doesn't exit or wrong id
    if(!product){
        return (
            <div className="alert alert-warning mt-4">
                <h4 className="alert-heading">Product not found</h4>
                <p>The product you are looking for does not exist.</p>
                <Link
                to="/products" className="btn btn-outline-primary btn-sm"
                >Back to Products</Link>
            </div>
        )
    }

    return (
        <div className="card mt-4 shadow-sm">
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <h5 className="text-muted">${product.price}</h5>

                <p className="mt-3">
                    <strong>Category:</strong> {product.category}
                </p>

                <p>{product.description}</p>

                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back to Products
                </button>
            </div>
        </div>
    )
}