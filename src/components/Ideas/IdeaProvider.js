import React, { useState, createContext } from "react"

export const IdeaContext = createContext()

export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getIdeas = () => {
        return fetch(`http://localhost:8088/ideas?_expand=userId`)
    }
}