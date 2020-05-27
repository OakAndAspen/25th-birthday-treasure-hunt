import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.check = this.check.bind(this);

        let clues = [
            {
                id: 1,
                hash: "2bq8k5x9hq",
                type: "Math",
                riddle:
                    <div>
                        <code>x / y * z</code>
                        <div className="text-left my-4">
                            <p>x = l'âge de Jules César lors de sa mort</p>
                            <p>y = le mois de naissance de Niki</p>
                            <p>z = le chiffre porte-malheur dans la culture japonaise</p>
                        </div>
                    </div>,
                answer: "20",
                clue: <p>Indice pour trouver le n°2</p>
            },
            {
                id: 2,
                hash: "u435xzsvt7",
                type: "Mot dans un livre",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 3,
                hash: "2q7222m888",
                type: "Rébus",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 4,
                hash: "c4be7kqgxa",
                type: "Message codé",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 5,
                hash: "vdg6zs677n",
                type: "Mot dans un texte",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 6,
                hash: "ega8ujjs5x",
                type: "Math",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 7,
                hash: "dg8fv6xqjb",
                type: "Rébus",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 8,
                hash: "qx4raw2hwu",
                type: "Mot dans un livre",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 9,
                hash: "42w99atmjd",
                type: "Message codé",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 10,
                hash: "dhg3rg7n3z",
                type: "Math",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 11,
                hash: "dp9fkaq4aa",
                type: "Rébus",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 12,
                hash: "mb2bwqmyun",
                type: "Mot dans un livre",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            },
            {
                id: 13,
                hash: "mb2bwqmyun",
                type: "Message codé",
                riddle:
                    <div>
                    </div>,
                answer: 0,
                clue: <p>Clue</p>
            }
        ];

        let url = window.location.pathname;
        let hash = url.split("/")[1];
        let currentClue = clues.find(c => this.isEqual(hash, c.hash));

        this.state = {
            clue: currentClue,
            hasBeenChecked: false,
            isRight: false
        };
    }

    isEqual(string1, string2) {
        return string1.toString().toLowerCase() === string2.toString().toLowerCase();
    }

    check() {
        let input = document.getElementById("txtAnswer").value;
        let answer = this.state.clue.answer;
        let isRight = this.isEqual(input, answer);
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
                <header className="py-4">
                    <h1 className="text-white my-4">Enigme n°{clue.id}</h1>
                </header>
                <div className="container py-4 px-4">
                    <h3 className="text-muted"><i>{clue.type}</i></h3>

                    <hr/>

                    <div className="my-4">{clue.riddle}</div>

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
                                Fausse réponse!
                            </div>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default App;
