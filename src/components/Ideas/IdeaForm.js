import React, { useContext, useEffect, useState } from "react"
import { IdeaContext } from "./IdeaProvider"
import { ArtistContext } from "../Artists/ArtistProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Idea.css"

export const IdeaForm = () => {
    const { addIdea, getIdeaById, editIdea } = useContext(IdeaContext)
    const { artists, getArtists } = useContext(ArtistContext)
    const [idea, setIdea] = useState({
        user_id: "",
        artist_id: "",
        desc: "",
        body_loc: "",
        budget: "",
        color: "",
        appt_date: "",
        completed: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const { ideaId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newIdea = { ...idea }
        newIdea[event.target.id] = event.target.value
        setIdea(newIdea)
    }

    const handleSaveIdea = () => {
        const artist_id = parseInt(idea.artist_id)
        setIsLoading(true)
        if (ideaId) {
            editIdea({
                id: idea.id,
                artist_id: parseInt(idea.artist_id),
                desc: idea.desc,
                body_loc: idea.body_loc,
                budget: idea.budget,
                color: idea.color,
                appt_date: idea.appt_date,
                completed: idea.completed
            })
                .then(() => history.push("/ideas/"))
        } else if (ideaId) {
            editIdea({
                id: idea.id,
                artist_id: parseInt(idea.artist_id),
                desc: idea.desc,
                body_loc: idea.body_loc,
                budget: idea.budget,
                color: idea.color,
                appt_date: idea.appt_date,
                completed: idea.completed
            })
            .then(() => history.push("/ideas/"))
        } else {
            addIdea({
                artist_id: parseInt(idea.artist_id),
                desc: idea.desc,
                body_loc: idea.body_loc,
                budget: idea.budget,
                color: idea.color,
                appt_date: idea.appt_date,
                completed: idea.completed
            })
                .then(() => history.push("/ideas"))
        }
    }

    useEffect(() => {
        getArtists().then(() => {
        if (ideaId) {
            getIdeaById(ideaId)
                .then(idea => {
                    setIdea(idea)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    })
    }, [])

    return (
        <form className="ideaForm">
            <h2 className="ideaForm__title"><b>Add Idea</b></h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="artist_id"><b>Select Tattoo Artist:</b> </label>
                    <select value={idea.artist_id} id="artist_id" name="artist_id" className="form-control"
                    onChange={handleControlledInputChange}>
                        <option value="0">Select Tattoo Artist</option>
                        {artists.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="desc"><b>Tattoo description:</b> </label>
                    <input type="text" id="desc" name="desc" required autoFocus className="form-control"
                    placeholder="Tattoo description" onChange={handleControlledInputChange} defaultValue={idea.desc} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="body_loc"><b>Body location:</b> </label>
                    <input type="text" id="body_loc" name="body_loc" required autoFocus className="form-control"
                    placeholder="Body location" onChange={handleControlledInputChange} defaultValue={idea.body_loc} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="budget"><b>Budget:</b> </label>
                    <input type="number" id="budget" name="budget" required autoFocus className="form-control"
                    placeholder="Budget" onChange={handleControlledInputChange} defaultValue={idea.budget} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="color"><b>Color:</b> </label>
                    <select value={idea.color} id="color" name="color" className="form-control"
                    onChange={handleControlledInputChange}>
                        <option value="0">Select a color style</option>
                        <option>Black & Gray</option>
                        <option>Color</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="appt_date"><b>Appointment date:</b> </label>
                    <input type="date" id="appt_date" name="appt_date" required autoFocus className="form-control"
                    placeholder="Appointment date" onChange={handleControlledInputChange} defaultValue={idea.appt_date} />
                </div>
            </fieldset>
            
            <button className="btn ideaForm" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleSaveIdea()
            }}>
                {ideaId ? <>Save Idea</> : <>Add Idea</>}
            </button>
        </form>
    )
}