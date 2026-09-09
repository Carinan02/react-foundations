import { useState,useRef } from "react"
import type { IProducts } from "./IProduct"

export default function Controlled(){
    const [products,setProducts] = useState(new Array<IProducts>())
    let [description, setDescription] = useState('');
    let [price, setPrice] = useState('');
    let [category, setCategory] = useState('')

    function addProduct(){
        const newProduct = {
            description,
            price: Number(price),
            category
        }
        setProducts( [...products,newProduct])

        setDescription('')
        setPrice('')
        setCategory('')
    }

    return(
        <>
        <h1>Controlled component using useState mutable state and two-way binding value</h1>

        <div><label htmlFor="description">Description</label> <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/></div>
        <div><label htmlFor="price">Price</label> <input type="number" value={price} onChange={e=>setPrice(e.target.value)}/></div>
        <div><label htmlFor="category">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
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