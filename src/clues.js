import React from "react";
import rebus11 from "./images/rebus11.png";
import rebus12 from "./images/rebus12.png";
import rebus13 from "./images/rebus13.png";
import rebus14 from "./images/rebus14.png";
import rebus15 from "./images/rebus15.png";
import rebus21 from "./images/rebus21.png";
import rebus22 from "./images/rebus22.png";
import rebus23 from "./images/rebus23.png";
import rebus24 from "./images/rebus24.png";
import rebus31 from "./images/rebus31.png";
import rebus32 from "./images/rebus32.png";
import rebus33 from "./images/rebus33.png";
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
            <div className="row">
                <img className="image-fluid col-4" src={rebus11} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus12} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus13} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus14} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus15} alt="Rebus"/>
            </div>,
        answer: "papillon de nuit",
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
        answer: null,
        clue: null
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
                <code>a - ( b * c + d )</code>
                <div className="text-left my-4">
                    <p>a = l'année de sortie de Pulp Fiction</p>
                    <p>b = le nombre actuel de films de la saga "Fast & Furious"</p>
                    <p>b = le nombre de saisons de Rome</p>
                    <p>c = le nombre de bûches dans la réserve à côté de notre cheminée</p>
                </div>
            </div>,
        answer: 1977,
        clue: <p>Clue</p>
    },
    {
        id: 7,
        hash: "dg8fv6xqjb",
        type: "Rébus",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus21} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus22} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus23} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus24} alt="Rebus"/>
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
        answer: null,
        clue: null
    },
    {
        id: 10,
        hash: "dhg3rg7n3z",
        type: "Math",
        riddle:
            <div>
                <code>a * b - c * d</code>
                <div className="text-left my-4">
                    <p>a = l'année de naissance d'Irina</p>
                    <p>b = le nombre de flèches que Boromir se prend avant de mourir</p>
                    <p>c = la 4e décimale de Pi</p>
                    <p>d = le nombre de saisons de How I Met Your Mother</p>
                </div>
            </div>,
        answer: 5940,
        clue: <p>Clue</p>
    },
    {
        id: 11,
        hash: "dp9fkaq4aa",
        type: "Rébus",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus31} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus32} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus33} alt="Rebus"/>
            </div>,
        answer: "dramatique",
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
        answer: null,
        clue: null
    }
];