import React from "react";
import './movieRow.css'; 
 

export default({title, items}) => {
    console.log(title)
    return(
        <div className="movieRow"> 
         <h2>{title}</h2>
         <div className="movieRow--listarea">
           <div className="mvieRow--List">
           {items.results.length > 0 && items.results.map((item, key)=>(
             <div key={key} className="movieRow--item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>

                </div>
            ))}

           </div>
           
        </div>
        </div>
    )}