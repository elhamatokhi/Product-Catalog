import { Link } from "react-router-dom"
export default function Home(){
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-3">Welcome to Your Store</h1>
                <p className="lead">
                    Browse products and view detailed information.
                </p>
                <Link to="/products" className="btn btn-primary btn-sm">Products</Link>
            </div>
        </div>
    )
}