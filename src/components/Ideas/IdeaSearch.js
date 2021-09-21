import React, { useContext } from "react"
import { IdeaContext } from "./IdeaProvider"
import "./Idea.css"

export const IdeaSearch = () => {
    const { setSearchTerms } = useContext(IdeaContext)

    return (
        <>
            <div className="search">Search: </div>
                <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for an idea" />
        </>
    )
}