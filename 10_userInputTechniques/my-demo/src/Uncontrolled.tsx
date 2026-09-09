import { useState,useRef } from "react"
import type { IProducts } from "./IProduct"

export default function Uncontrolled(){
    const [products,setProducts] = useState(new Array<IProducts>())
    let descriptionRef = useRef<HTMLInputElement>(null)
    let priceRef = useRef<HTMLInputElement>(null)
    let categoryRef = useRef<HTMLSelectElement>(null)

    function addProduct(){
        const newProduct = {
            description: descriptionRef.current!.value,
            price: Number(priceRef.current!.value),
            category: categoryRef.current!.value
        }
        setProducts( [...products,newProduct])

        descriptionRef.current!.value = '';
        priceRef.current!.value = '';
        categoryRef.current!.value = '';
    }

    return(
        <>
        <h1>Uncontrolled component using useRef hook to reference input elements and get their values</h1>

        <div><label htmlFor="description">Description</label> <input type="text" ref={descriptionRef} /></div>
        <div><label htmlFor="price">Price</label> <input type="number" ref={priceRef}/></div>
        <div><label htmlFor="category">Category</label>
            <select ref={categoryRef}>
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