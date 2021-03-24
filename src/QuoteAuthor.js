import React from 'react'

function QuoteAuthor({dataQuote, getQuotesByAuthor}) {
    return (
        <div className="author__quote--wrapper" onClick={() => getQuotesByAuthor()}>
                <div className="author__info">
                    <h3 className="author__name">{dataQuote.quoteAuthor}</h3>
                    <p className="author__gener">{dataQuote.quoteGenre}</p>
                </div>
                <span className="material-icons">
                    arrow_right_alt
                </span>
            </div>
    )
}

export default QuoteAuthor
