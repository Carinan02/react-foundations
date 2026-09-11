import { useParams, Link, useNavigate } from "react-router-dom"
import { Catalog } from "./Catalog"

export default function ProductV2_useNavigate(){
    const {id} = useParams()
    const navigate = useNavigate();
   
    if(!id){
        return(
            <div>
                <h1>Product id not specified</h1>
            </div>
        )
    }

    const product = Catalog.getProductItemById(id!)
    if(!product){
        return (
            <div>
                <h1>Product {id} not found</h1>
            </div>
        )
    }
    else{
        return (
            <>
            <h1>Product details </h1>
            <div>Description :{product?.description}</div>
            <div>Price: {product?.price}</div>
            <div>Likes: {product?.likes}</div>
            <div>Recent Like: {product?.mostRecentLike}</div>

            <p>
                <Link to = '/products'>Back to all products</Link>
            </p>

            <input type="text" placeholder="enter local URL to go to " onKeyUp={(e: any) => {
                if(e.key ==='Enter')
                    navigate(e.target.value)
            }} />
            </>
        )
    }
}