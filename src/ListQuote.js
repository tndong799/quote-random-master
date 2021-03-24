import React from 'react'
import QuoteContent from './QuoteContent'

function ListQuote({quoteAuthor, listQuote}) {
    const mapListQuote = listQuote.map((quote, key)=>{
        return <QuoteContent dataQuote={quote} key={quote._id} ></QuoteContent>
    })
    return (
        <div className="content">
            <div className="quotesList__author">{quoteAuthor}</div>
            {mapListQuote}
        </div>
    )
}

export default ListQuote
