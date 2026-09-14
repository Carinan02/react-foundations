import Book from './Book'
import ItemList from './ItemList'
import Table from './Table'

export default function Books({books, format}: {books: Array<Book>, format: string}){
    return (
        <div className='content'>
            <h1>Books</h1>
            {
                format === 'TABLE' ?
                <Table items = {books} /> :
                <ItemList items = {books} />
            }
        </div>
    )
}