import React, { useContext, useEffect, useState } from "react"
import { IdeaContext } from "./IdeaProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Idea.css"

export const IncompIdeaDetail = (props) => {
    const { ideas, getIncompleteIdeas, deleteIdea } = useContext (IdeaContext)
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

    useEffect(() => {getIncompleteIdeas()}, [])

    const handleDeleteIdea = () => {
        deleteIdea(idea.id)
        .then(() => {
            history.push("/ideas")
        })
    }

    const history = useHistory()

    return (
    <section className="idea">
        <div className="idea__artist idea-column"><b>Artist:</b> { idea.artist.name }</div>
        <div className="idea__desc idea-column"><b>Tattoo description:</b> { idea.desc }</div>
        <div className="idea__body_loc idea-column"><b>Body location:</b> { idea.body_loc }</div>
        <div className="idea__budget idea-column"><b>Budget:</b> ${ idea.budget }</div>
        <div className="idea__color idea-column"><b>Black & Gray or Color:</b> { idea.color }</div>
        <div className="idea__appt_date idea-column"><b>Appointment Date:</b> { idea.appt_date }</div>

        <button className="idea-edit-button" onClick={() => {history.push(`/ideas/edit/${idea.id}`)}}>Edit</button>
        <button className="idea-edit-button" onClick={handleDeleteIdea}>Delete Idea</button>
    </section>
    )
}