import React from "react"
import { Route } from "react-router-dom"
import { ArtistProvider } from "./Artists/ArtistProvider"
import { ArtistDetail } from "./Artists/ArtistDetail"
import { ArtistForm } from "./Artists/ArtistForm"
import { ArtistList } from "./Artists/ArtistList"
import { ArtistSearch } from "./Artists/ArtistSearch"
import { IdeaProvider } from "./Ideas/IdeaProvider"
import { IdeaDetail } from "./Ideas/IdeaDetail"
import { IdeaForm } from "./Ideas/IdeaForm"
import { IdeaList } from "./Ideas/IdeaList"
import { IdeaSearch } from "./Ideas/IdeaSearch"

export const ApplicationViews = () => {
    return (
        <>
            <ArtistProvider>
                <IdeaProvider>

                    <Route exact path="/ideas">
                        <IdeaSearch />
                        <IdeaList />
                   </Route>
                   <Route exact path="/ideas/create">
                       <IdeaForm />
                    </Route>
                    <Route exact path="/ideas/edit/:ideaId(\d+)">
                        <IdeaForm />
                    </Route>
                    
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
                
                </IdeaProvider>
            </ArtistProvider>
        </>
    )
}