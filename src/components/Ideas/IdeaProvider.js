import React, { useState, createContext } from "react"

export const IdeaContext = createContext()

export const IdeaProvider = (props) => {
    const [ideas, setIdeas] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getIdeas = () => {
        return fetch(`http://localhost:8088/ideas?_expand=artist`)
        .then(r => r.json())
        .then(setIdeas)
    }

    const getIncompleteIdeas = () => {
        return fetch(`http://localhost:8088/ideas?completed=false&_expand=artist`)
        .then(r => r.json())
        .then(setIdeas)
    }

    const getCompleteIdeas = () => {
        return fetch(`http://localhost:8088/ideas?completed=true&_expand=artist`)
        .then(r => r.json())
        .then(setIdeas)
    }

    const getIdeaById = (ideaId) => {
        return fetch (`http://localhost:8088/ideas/${ideaId}`)
        .then(r => r.json())
    }

    const addIdea = ideaObj => {
        return fetch(`http://localhost:8088/ideas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ideaObj)
        })
        .then(getIdeas)
    }

    const editIdea = idea => {
        return fetch(`http://localhost:8088/ideas/${idea.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(idea)
        })
        .then(getIdeas)
    }

    const deleteIdea = ideaId => {
        return fetch(`http://localhost:8088/ideas/${ideaId}`, {
            method: "DELETE"
        })
        .then(getIdeas)
    }

    return (
        <IdeaContext.Provider value={{
            ideas, setIdeas, getIdeas, getIncompleteIdeas, getCompleteIdeas, getIdeaById, addIdea, searchTerms, setSearchTerms, editIdea, deleteIdea
        }}>
            {props.children}
        </IdeaContext.Provider> 
    )
}