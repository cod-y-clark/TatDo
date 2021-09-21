import React, { useState, createContext } from "react"

export const ArtistContext = createContext()

export const ArtistProvider = (props) => {
    const [artists, setArtists] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    
    const getArtists = () => {
        return fetch(`http://localhost:8088/artists?_expand=userId`)
        .then(r => r.json())
        .then(setArtists)
    }

    const getArtistById = (artistId) => {
        return fetch (`http://localhost:8088/artists/${artistId}`)
        .then(r => r.json())
    }

    const addArtist = artistObj => {
        return fetch(`http://localhost:8088/artists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artistObj)
        })
        .then(getArtists)
    }

    const editArtist = artist => {
        return fetch(`http://localhost:8088/artists/${artist.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
        .then(getArtists)
    }

    const deleteArtist = artistId => {
        return fetch(`http://localhost:8088/artists/${artistId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(getArtists)
    }

    return (
        <ArtistContext.Provider value={{
            artists, setArtists, getArtists, getArtistById, addArtist, searchTerms, setSearchTerms, editArtist, deleteArtist
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
}