import React, {Component} from "react";
import BookCard from "../BookCard";
import api from "../../Utils/api";

class BookList extends Component{
    state={}
    clickTest(index){
        let path=this.props.books[index].volumeInfo;
        api.saveBook({
            title:path.title, 
            authors:path.authors,
            description:path.description,
            img:path.imageLinks.thumbnail,
            link:path.infoLink
        })
        .then(res => console.log("Book Saved", res))
    }
    render(){
        return(
            <div className = "book-something">
                {this.props.books.map((item, index) => 
                <BookCard key={index} title={item.volumeInfo.title} author={item.volumeInfo.authors} link={item.volumeInfo.infoLink} summary={item.volumeInfo.description} image={item.volumeInfo.imageLinks} onClick={()=> this.clickTest(index)}/>)}
                
            </div>
        )
      }
}

export default BookList;