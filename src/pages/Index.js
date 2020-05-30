import React from 'react';
import clues from "../clues.js";

class Index extends React.Component {

    render() {
        return <div className="container">
            <h1 className="text-center my-4">Index</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>N°</th>
                        <th>Hash</th>
                        <th>Type</th>
                        <th>Lieu</th>
                        <th>Enigme</th>
                        <th>Réponse</th>
                        <th>Indice</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clues.map(c => <tr>
                        <td>{c.id}</td>
                        <td>
                            <a className="text-info" href={"/" + c.hash}>{c.hash}</a>
                        </td>
                        <td>{c.type}</td>
                        <td>{c.location}</td>
                        <td>{c.riddle}</td>
                        <td>{c.answer}</td>
                        <td>{c.clue}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>;
    }
}

export default Index;
