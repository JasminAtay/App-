import React, {useState} from 'react'

function BookList() {
    
    const [books] = useState([
        {id:1, name:"1984", yazar: "George Orwell"},
        {id:2, name:"Hayvan Ciftligi", yazar: "George Orwell"},
        {id:3, name:"Gulun Adi", yazar: "Umberto Eco"}
    ])

    return (
        <div>
            <ul>
                {
                    books.map((book)=>{
                        return(
                            <div key={book.id}>
                                <li>Kitap ismi : {book.name}</li>
                                <li>Yazar ismi : {book.yazar}</li>
                                <li>*************************</li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BookList
