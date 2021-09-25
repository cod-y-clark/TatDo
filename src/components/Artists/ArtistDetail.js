import React, { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistProvider"
import { useParams, useHistory } from "react-router-dom"
import igIcon from "../../images/igIcon.png"
import "./Artist.css"

export const ArtistDetail = (props) => {
    const { artists, getArtists, deleteArtist } = useContext(ArtistContext)
    const [ artist, setArtist ] = useState([])
    
    const { artistId } = useParams()

    useEffect(() => {
        if(props.artist){
            setArtist(props.artist)
        } else {
            const thisArtist = artist.find(a => a.id === parseInt(artistId)) || { artist: {} }
            setArtist(thisArtist)
        }
    }, [artist, artists])

    useEffect(() => {getArtists()}, [])

    const handleDeleteArtist = () => {
        deleteArtist(artist.id)
        .then(() => {
            history.push("/artists")
        })
    }

    const history = useHistory()

    return (
    <section className="artist">
        <div className="artist__name"><b>{ artist.name }</b></div>
        <div className="artist__ig"><b>Instagram:</b> <a href={ artist.ig_url } target="_blank">{ artist.ig_url }</a></div>
        <div className="artist__location"><b>Location:</b> { artist.location }</div>

        <button className="artist-edit-button" onClick={() => {history.push(`/artists/edit/${artist.id}`)}}>Edit</button>
        <button className="artist-edit-button" onClick={handleDeleteArtist}>Delete Artist</button>
    </section>
    )
}