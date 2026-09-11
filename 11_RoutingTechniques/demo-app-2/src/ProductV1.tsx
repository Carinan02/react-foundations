import { useParams } from "react-router-dom"
import { Catalog } from "./Catalog"

export default function Product(){
    const {id} = useParams()
    
   
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
            </>
        )
    }
}