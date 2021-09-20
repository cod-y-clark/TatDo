import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { ArtistContext } from "./ArtistProvider"
import { ArtistDetail } from "./ArtistDetail"
import "./Artist.css"

export const ArtistList = () => {
    const { artists, getArtists, searchTerms } = useContext(ArtistContext)
    const [ filteredArtists, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {getArtists()}, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = artists.filter(artist => artist.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(artists)
        }
    }, [searchTerms, artists])

    return (
        <>
            <h1>Artists</h1>

            <button onClick={() => history.push("/artists/create")}>
                Add Artist 
            </button>
            <div className="artists">
            {
                filteredArtists.map(artist => {
                    return <ArtistDetail key={artist.id} artist={artist} />
                })
            }
            </div>
        </>
    )
}