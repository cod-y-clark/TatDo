import React, { useContext, useEffect, useState } from "react"
import { IdeaContext } from "./IdeaProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Idea.css"

export const CompIdeaDetail = (props) => {
    const { ideas, getCompleteIdeas, deleteIdea } = useContext (IdeaContext)
    const [ idea, setIdea ] = useState({ artist: {} })

    const { ideaId } = useParams()

    useEffect(() => {
        if(props.idea){
            setIdea(props.idea)
        } else {
            const thisIdea = idea.find(i => i.id === parseInt(ideaId)) || { artist: {} }
            setIdea(thisIdea)
        }
    }, [idea, ideas])

    useEffect(() => {getCompleteIdeas()}, [])

    const handleDeleteIdea = () => {
        deleteIdea(idea.id)
        .then(() => {
            history.push("/ideas")
        })
    }

    const history = useHistory()

    return (
    <section className="idea">
        <div className="idea__artist"><b>Artist:</b> { idea.artist.name }</div>
        <div className="idea__desc"><b>Tattoo description:</b> { idea.desc }</div>
        <div className="idea__body_loc"><b>Body location:</b> { idea.body_loc }</div>
        <div className="idea__budget"><b>Budget:</b> ${ idea.budget }</div>
        <div className="idea__finalCost"><b>Final Cost:</b> ${ idea.finalCost }</div>
        <div className="idea__color"><b>Black & Gray or Color:</b> { idea.color }</div>
        <div className="idea__appt_date"><b>Appointment Date:</b> { idea.appt_date }</div>

        <button onClick={handleDeleteIdea}>Delete Idea</button>
    </section>
    )
}