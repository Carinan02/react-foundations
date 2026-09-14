interface Item {
    toString(): string;
}
export default function ItemList({items} : {items : Array<Item>}){

    return (
        <ul>
            {
                items.map((item, i) => <li key={i}>{item.toString()}</li>)
            }
        </ul>
    )
}