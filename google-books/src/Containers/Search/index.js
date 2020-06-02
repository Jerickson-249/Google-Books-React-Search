import React, {Component} from "react";
import SearchForm from "../../Components/SearchForm";
import BookList from "../../Components/BookList";
import api from "../../Utils/api";

class Search extends Component{
    state={
        books:[],
        search:"",
        results:[]

    }

    componentDidMount(){}

    searchBooks=query =>{
        console.log("query", query)
        api.search(query)
        .then(res =>{
            console.log(res.data)
            this.setState({
                books:res.data.items
            },()=>console.log(this.state))
        })
        .catch(err => console.log(err));
    }

        handleInputChange= (event)=>{this.setState({search:event.target.value})}

        handleFormSubmit= (event)=>{
            event.preventDefault();
            this.searchBooks(this.state.search)
            console.log("searching for books");
        }

    render(){
        return(
            <div>
                <h1 className = "text-center">Search for a book</h1>
                <SearchForm handleFormSubmit= {this.handleFormSubmit} handleInputChange= {this.handleInputChange}/>
                <BookList books= {this.state.books}/>
            </div>
        )
}
}

export default Search;