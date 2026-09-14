
export default function Table<T extends Object>({items} : {items: Array<T>}){
if(items.length === 0){
    return <div>No Items</div>
}
const keys = Object.keys(items[0]) as Array<keyof T>;

    return(
        <table>
            <thead>
                {
                    keys.map((k,i) => <th key = {i}>{String(k)}</th>)
                }
            </thead>
            <tbody>
                {
                    items.map((item,i)=> 
                    <tr key={i}>
                       
                        {   
                           keys.map((k) => <td>{String(item[k])}</td>)
                        }
                       
                    </tr>)
                }
            </tbody>
        </table>
    )
}