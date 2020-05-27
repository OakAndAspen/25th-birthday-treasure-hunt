import React from 'react';
import clues from "./clues.js";
import {isEqual} from "./utils.js";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.check = this.check.bind(this);
        let url = window.location.pathname;
        let hash = url.split("/")[1];
        let currentClue = clues.find(c => isEqual(hash, c.hash));

        this.state = {
            clue: currentClue,
            hasBeenChecked: false,
            isRight: false
        };
    }

    check() {
        let input = document.getElementById("txtAnswer").value;
        let answer = this.state.clue.answer;
        let isRight = isEqual(input, answer);
        console.log("Input: " + input, "Answer: " + answer, "isRight: " + isRight);
        this.setState({isRight: isRight, hasBeenChecked: true});
    }

    render() {
        let clue = this.state.clue;

        if (!clue) return <div className="text-center text-white p-4 my-4">
            <div className="bg-dark p-4 rounded">
                <h1>Cette énigme n'existe pas!</h1>
                <i className="text-muted">C'est peut-être une conspiration...</i>
            </div>
        </div>;

        return (
            <div className="text-center">
                <header className="py-4 shadow">
                    <h1 className="my-4 text-uppercase text-dark">Enigme n°{clue.id}</h1>
                </header>
                <div className="container py-4 px-4">
                    <h3 className="text-muted"><i>{clue.type}</i></h3>

                    <hr/>

                    <div className="my-4">{clue.riddle}</div>

                    {clue.type !== "Message codé" &&
                    <div>
                        <input type="text" className="form-control form-control-lg text-center"
                               id="txtAnswer" placeholder="Entrer la réponse ici"/>
                        <button className="btn btn-info w-100 my-2" onClick={this.check}>
                            Vérifier
                        </button>

                        {this.state.hasBeenChecked &&
                        (this.state.isRight ?
                                <div className="alert alert-success">
                                    {clue.clue}
                                </div> :
                                <div className="alert alert-danger">
                                    <p>Fausse réponse!</p>
                                </div>
                        )
                        }
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
