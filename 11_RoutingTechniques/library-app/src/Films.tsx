import Film from './Film'
import ItemList from './ItemList'
import Table from './Table'

export default function Films({films, format}: {films: Array<Film>, format: string}){
    return (
        <div className='content'>
            <h1>Films</h1>
            {
                format === 'TABLE' ?
                <Table items = {films} /> :
                 <ItemList items = {films} />
            }
        </div>
    )
}