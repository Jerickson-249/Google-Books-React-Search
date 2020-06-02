import React from "react";
import "./style.css";

function SearchForm(props){
    return(
       <div id="searchContainer">
           <h3>Book Search</h3>
           <form id="bookSearch">
                <label form="bookSearch">
                  Please search for a book in this form
                </label>
                <br></br>
                <input form="bookSearch" onChange={props.handleInputChange} type="text" name="search" id="search" value={props.value} placeholder="Please search for the book" className="form-control" required> 
                </input> 
                <br></br>
                <button type="submit" onClick={props.handleFormSubmit}>Submit</button>

           </form>
       </div>
    )
}

export default SearchForm;