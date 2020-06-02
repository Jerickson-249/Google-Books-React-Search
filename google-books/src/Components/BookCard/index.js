import React from "react";
import "./style.css";

const BookCard= (props)=>(
    <div className ="card">
        <div className ="img-container"> 
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            {props.image && <img src={props.image}/>}
            {props.summary && <p>Summary: {props.summary}</p>}
            <p>More Info: <a href= {props.link}>{props.link}</a></p>
            <br></br>
            <br></br>
            {props.onClick && <button onClick= {props.onClick}>Save</button>}
        </div>
    </div>
);

export default BookCard;
