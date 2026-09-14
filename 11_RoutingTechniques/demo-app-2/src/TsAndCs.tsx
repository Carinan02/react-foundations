import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

 const regions = [
            {display : 'Europe, the Middle East and Africa', id : 'emea'},
            {display : 'North America', id : 'na'},
            {display : 'Latin Amerixa', id : 'la'},
            {display : 'Asia-Pacific', id : 'ap'}
          ]

export default function TsAndCs(){
   
    return(
        <>
        <h1>Terms and conditions home page</h1>
        <ul>
        {
            regions.map((item,i) => <li key={i}><Link to= {item.id!}>{item.display}</Link></li>)
        }
        </ul>
        </>
    )
}

export async function getDataForRegion({params} : {params: any}){ //this function will receive the object parameter in the route and will return useful data that the route can use using the useLoaderData hook
    const region = regions.find(r => r.id === params.id)
    const name = region?.display || `unknown region ${params.id}`
    return {
        id : params.id,
        name: name,
        info: `Some handy info about the terms and conditions for ${name} :) `,
        timestamp: new Date().toLocaleTimeString()
    }
}

export function TsandCsForRegion(){
    const regionData: any = useLoaderData()// get all the data from the loader function

    return(
        <>
        <h1>Terms and conditions [{regionData.id.toUpperCase()}]</h1>
        <p>{regionData.info}</p>
        <p><Link to='/ts-and-cs'>Back to Ts-and-Cs home page</Link></p>
        <br />
        <hr />
        <small>Page generated at {regionData.timestamp}</small>
        </>
    )
}