import React from 'react';
import {Switch, Route} from "react-router-dom";
import Collaborators from "./Collaborators";
import CreateCollaborators from "./CreateCollaborators";

const Routes = () => {
    return(
        <div>
                <Switch>
                    <Route path="/" exact component={Collaborators} />
                    <Route path="/create" exact component={CreateCollaborators} />
                </Switch>
        </div>
    );
}
export default Routes;