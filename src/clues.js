import React from "react";
import {charsToSpans} from "./utils.js";

export default [
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
                <p className="necrofonticon">{charsToSpans("message")}</p>
                <p>=</p>
                <p>{charsToSpans("MESSAGE")}</p>
                <hr/>
                <p className="necrofonticon">
                    {charsToSpans("mon super message code qui est super long et difficile")}
                </p>
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
                <p className="jungleslang">{charsToSpans("message")}</p>
                <p>=</p>
                <p>{charsToSpans("MESSAGE")}</p>
                <hr/>
                <p className="jungleslang">
                    {charsToSpans("mon super message code qui est super long et difficile")}
                </p>
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
        hash: "jug2275uxf",
        type: "Message codé",
        riddle:
            <div>
                <p className="aurebesh">{charsToSpans("message")}</p>
                <p>=</p>
                <p>{charsToSpans("MESSAGE")}</p>
                <hr/>
                <p className="aurebesh">
                    {charsToSpans("mon super message code qui est super long et difficile")}
                </p>
            </div>,
        answer: 0,
        clue: <p>Clue</p>
    }
];