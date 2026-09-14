import { useState } from "react"
export default function MoreStuff<T,X>({books, films} : {books : Array<T>, films : Array<X>}){
    const [likeCount, setLikeCount] = useState(0);

    return (
        <><h1>More Stuff</h1>
        <h2>Summary Info: </h2>
        <p>Number of books: {books.length}</p>
        <p>Number of films: {films.length}</p>

        <h2>Like My Library</h2>
        <div>
            Likes : <strong>{likeCount}</strong>&nbsp;&nbsp;
 
            <button onClick={()=>setLikeCount(likeCount + 1)}>Like</button>&nbsp;&nbsp;
            <button onClick={()=>setLikeCount(0)}>Reset</button>
        </div>
        </>
    )

}