import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { IdeaContext } from "./IdeaProvider"
import { IdeaDetail } from "./IdeaDetail"
import "./Idea.css"

export const IdeaList = () => {
    const { ideas, getIdeas, searchTerms } = useContext(IdeaContext)
    const [ filteredIdeas, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {getIdeas()}, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = ideas.filter(idea => idea.desc.toLowerCase().includes(searchTerms.toLowerCase()))
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
                    return <IdeaDetail key={idea.id} idea={idea} />
                })
            }
            </div>
        </>
    )
}