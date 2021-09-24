import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { IdeaContext } from "./IdeaProvider"
import { IncompIdeaDetail } from "./IncompIdeaDetail"
import "./Idea.css"

export const IncompIdeaList = () => {
    const { ideas, getIncompleteIdeas, searchTerms } = useContext(IdeaContext)
    const [ filteredIdeas, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {getIncompleteIdeas()}, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = ideas.filter(idea => (
                idea.desc.toLowerCase().includes(searchTerms.toLowerCase()) ||
                idea.artist.name.toLowerCase().includes(searchTerms.toLowerCase())
            ))
            setFiltered(subset)
        } else {
            setFiltered(ideas)
        }
    }, [searchTerms, ideas])

    return (
        <>
            <h1>Ideas</h1>

            <button onClick={() => history.push("/ideas/create")}>
                Add Idea
            </button>
            <div className="ideas">
            {
                filteredIdeas.map(idea => {
                    return <IncompIdeaDetail key={idea.id} idea={idea} />
                })
            }
            </div>
        </>
    )
}