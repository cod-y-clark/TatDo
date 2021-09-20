import React from "react"
import { Route } from "react-router-dom"
import { ArtistProvider } from "./Artists/ArtistProvider"
import { ArtistDetail } from "./Artists/ArtistDetail"
import { ArtistForm } from "./Artists/ArtistForm"
import { ArtistList } from "./Artists/ArtistList"
import { ArtistSearch } from "./Artists/ArtistSearch"

export const ApplicationViews = () => {
    return (
        <>
            <ArtistProvider>
                <Route exact path="/artists">
                    <ArtistSearch />
                    <ArtistList />
                </Route>
                <Route exact path="/artists/create">
                    <ArtistForm />
                </Route>
                <Route exact path="/artists/edit/:artistId(\d+)">
                    <ArtistForm />
                </Route>
                {/* <Route path="/locations/detail/:artistId(\d+)">
                    <ArtistDetail />
                </Route> */}
            </ArtistProvider>
        </>
    )
}