import { useState } from "react"
import type { IProducts } from "./IProduct"

export default function Dom(){
    const [products,setProducts] = useState(new Array<IProducts>())

    function addProduct(){
        let description = (document.getElementById('description') as HTMLInputElement)
        let price = (document.getElementById('price') as HTMLInputElement)
        let category = (document.getElementById('category') as HTMLSelectElement)

        const newProduct = {
            description: description.value,
            price: Number(price.value),
            category: category.value
        }
        setProducts(products => [...products,newProduct])

        description.value = '';
        price.value ='';
        category.value ='';
    }

    return(
        <>
        <h1>Using Dom Manipulation via input APIs/ IDs to get values</h1>

        <div><label htmlFor="description">Description</label> <input type="text" id="description" /></div>
        <div><label htmlFor="price">Price</label> <input type="number" id="price" /></div>
        <div><label htmlFor="category">Category</label>
            <select name="" id="category">
            <option></option>
            <option value="Food/beverage">Food/beverage</option>
            <option value="Clothing">Clothing</option>
            <option value="Audio/visual">Audio/visual</option>
        </select>
        </div>
        <button onClick={addProduct}>Add Product</button>
        
        <div hidden = {products.length === 0}>
            <h1>Products</h1>
            <ul>
                {
                    products.map((item, i) => <li key={i}>{item.description}, ${item.price}, {item.category}</li>)
                }
            </ul>
        </div>
        </>
    )
}