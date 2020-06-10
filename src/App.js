import React from 'react';
import Index from "./pages/Index.js";
import Clue from "./pages/Clue.js";
import NotFound from "./pages/NotFound.js";
import clues from "./clues.js";
import {isEqual} from "./utils.js";

class App extends React.Component {

    constructor(props) {
        super(props);

        let url = window.location.pathname;
        let hash = url.split("/")[1];
        let currentClue = clues.find(c => isEqual(hash, c.hash));

        this.state = {
            url: url,
            clue: currentClue,
            hasBeenChecked: false,
            isRight: false
        };
    }

    render() {
        if(this.state.url === "/pizza") return <Index/>;
        if(this.state.clue) return <Clue clue={this.state.clue}/>;
        return <NotFound/>;
    }
}

export default App;
