import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { IdeaContext } from "./IdeaProvider"
import { CompIdeaDetail } from "./CompIdeaDetail"
import "./Idea.css"

export const CompIdeaList = () => {
    const { ideas, getCompleteIdeas, searchTerms } = useContext(IdeaContext)
    const [ filteredIdeas, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {getCompleteIdeas()}, [])

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
            <div className="ideas-header">
            <h1>Completed Ideas</h1>
            </div>

            <button className="add-button" onClick={() => history.push("/ideas/create")}>
                Add Idea
            </button>
            <div className="ideas-list">
            {
                filteredIdeas.map(idea => {
                    return <CompIdeaDetail key={idea.id} idea={idea} />
                })
            }
            </div>
        </>
    )
}