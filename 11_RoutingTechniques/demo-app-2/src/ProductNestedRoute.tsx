import { Link } from "react-router-dom"
import { Catalog } from "./Catalog"

export default function Products(){
    const products = Catalog.getAllProductItems()
   // alert(Catalog.getAllProductItems())
    return(<>
    <h1>Products Page</h1>
    <ul>
        {
        products.map((p,i) => <li key = {i}><Link to = {`/products-with-nested-routes/${p.id}`}>{p.description}</Link></li>)
        }
    </ul>
    <Link to='/products-with-nested-routes/summary'>Summary</Link>
    
    </>
        
    )
} 