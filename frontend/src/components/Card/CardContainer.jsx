import React from 'react'

function CardContainer({ children }) {
    return (
        <div className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
        </div>
    )
}

export default CardContainer