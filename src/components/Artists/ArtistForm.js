import React, { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Artist.css"

export const ArtistForm = () => {
    const { addArtist, getArtistById, editArtist, getArtist } = useContext(ArtistContext)
    const [artist, setArtist] = useState({
        name: "",
        ig_url: "",
        location: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const { artistId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newArtist = { ...artist }
        newArtist[event.target.id] = event.target.value
        setArtist(newArtist)
    }

    const handleSaveArtist = () => {
        setIsLoading(true)
        if (artistId) {
            editArtist({
                id: artist.id,
                name: artist.name,
                ig_url: artist.ig_url,
                location: artist.location
            })
                .then(() => history.push("/artists/"))
        } else {
            addArtist({
                name: artist.name,
                ig_url: artist.ig_url,
                location: artist.location
            })
                .then(() => history.push("/artists"))
        }
    }


    useEffect(() => {
        if (artistId) {
            getArtistById(artistId)
                .then(artist => {
                    setArtist(artist)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    return (
        <form className="artistForm">
            <h2 className="artistForm__title"><b>Add Artist</b></h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"><b>Artist Name:</b> </label>
                    <input type="text" id="name" name="name" required autoFocus className="form-control"
                        placeholder="Artist Name" onChange={handleControlledInputChange} defaultValue={artist.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ig_url"><b>Instagram Profile:</b> </label>
                    <input type="url" id="ig_url" name="ig_url" required autoFocus className="form-control"
                        placeholder="Instagram Profile" onChange={handleControlledInputChange} defaultValue={artist.ig_url} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location"><b>Artist Location:</b> </label>
                    <input type="text" id="location" name="location" required autoFocus className="form-control"
                        placeholder="Artist Location" onChange={handleControlledInputChange} defaultValue={artist.location} />
                </div>
            </fieldset>
            <button className="btn artistForm" disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleSaveArtist()
            }}>
                {artistId ? <>Save Artist</> : <>Add Artist</>}
            </button>
        </form>
    )
}
