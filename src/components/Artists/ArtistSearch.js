import React, { useContext } from "react"
import { ArtistContext } from "./ArtistProvider"
import "./Artist.css"

export const ArtistSearch = () => {
    const { setSearchTerms } = useContext(ArtistContext)

    return (
        <>
            <div className="search">Search: </div>
                <input type="text"
                className="input--wide search"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for an Artist" />
        </>
    )
}