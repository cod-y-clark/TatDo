import React, { useContext, useEffect, useState } from "react"
import { ArtistContext } from "./ArtistProvider"
import { useParams, useHistory } from "react-router-dom"
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

    const handleDelete = () => {
        deleteArtist(artist.id)
        .then(() => {
            history.push("/artists")
        })
    }

    const history = useHistory()

    return (
    <section className="artist">
        <h3 className="artist__name">{ artist.name }</h3>
        <div className="artist__ig">{ artist.ig_url }</div>
        <div className="artist__location">{ artist.location }</div>

        <button onClick={() => {history.push(`/artists/edit/${artist.id}`)}}>Edit</button>
        <button onClick={handleDelete}>Delete Artist</button>
    </section>
    )
}