import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./Homepage/Homepage"
import { ArtistProvider } from "./Artists/ArtistProvider"
import { ArtistDetail } from "./Artists/ArtistDetail"
import { ArtistForm } from "./Artists/ArtistForm"
import { ArtistList } from "./Artists/ArtistList"
import { ArtistSearch } from "./Artists/ArtistSearch"
import { IdeaProvider } from "./Ideas/IdeaProvider"
import { IncompIdeaDetail } from "./Ideas/IncompIdeaDetail"
import { CompIdeaDetail } from "./Ideas/CompIdeaDetail"
import { IdeaForm } from "./Ideas/IdeaForm"
import { IncompIdeaList } from "./Ideas/IncompIdeaList"
import { CompIdeaList } from "./Ideas/CompIdeaList"
import { IdeaSearch } from "./Ideas/IdeaSearch"

export const ApplicationViews = () => {
    return (
        <>
            <ArtistProvider>
                <IdeaProvider>

                    <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/ideas">
                        <IdeaSearch />
                        <IncompIdeaList />
                   </Route>
                   <Route exact path="/ideas/create">
                       <IdeaForm />
                    </Route>
                    <Route exact path="/ideas/edit/:ideaId(\d+)">
                        <IdeaForm />
                    </Route>

                    <Route exact path="/completedIdeas">
                        <IdeaSearch />
                        <CompIdeaList />
                    </Route>
                    <Route exact path="/completedIdeas/create">
                        <IdeaForm />
                    </Route>
                    <Route exact path="/completedIdeas/edit/:ideaId(\d+)">
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