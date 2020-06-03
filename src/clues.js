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
import rebus41 from "./images/rebus41.png";
import rebus42 from "./images/rebus42.png";
import rebus43 from "./images/rebus43.png";
import rebus44 from "./images/rebus44.png";
import rebus45 from "./images/rebus45.png";
import {charsToSpans} from "./utils.js";

export default [
    {
        id: 1,
        hash: "2bq8k5x9hq",
        type: "Math",
        location: "Dans la gouttière par terre derrière la voiture",
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
        clue: <p>L'indice suivant se trouve en A9</p>
    },
    {
        id: 2,
        hash: "u435xzsvt7",
        type: "Mot dans un livre",
        location: "Au dos du livre 'Nos plus belles légendes' dans mon bureau",
        riddle:
            <div>
                <p>90-2-1-8</p>
                <p>32-6-3-1</p>
                <p>111-10-4-1</p>
                <p>142-6-5-1</p>
                <p>119-5-3-2</p>
                <p>45-1-5-2</p>
                <p>16-2-8-2</p>
            </div>,
        answer: "TABLIER",
        clue: <p>L'indice suivant se trouve en A6</p>
    },
    {
        id: 3,
        hash: "2q7222m888",
        type: "Rébus",
        location: "Dans le four",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus11} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus12} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus13} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus14} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus15} alt="Rebus"/>
            </div>,
        answer: "papillon de nuit",
        clue: <p>L'indice suivant se trouve en I13</p>
    },
    {
        id: 4,
        hash: "c4be7kqgxa",
        type: "Message codé",
        location: "Au milieu des bûches dans la cabane",
        riddle:
            <div>
                <p className="necrofonticon">{charsToSpans("ocelot")}</p>
                <p>=</p>
                <p>{charsToSpans("OCELOT")}</p>
                <hr/>
                <p className="necrofonticon">
                    {charsToSpans("suspendu en haut des escaliers")}
                </p>
            </div>,
        answer: "suspendu en haut des escaliers",
        clue: null
    },
    {
        id: 5,
        hash: "vdg6zs677n",
        type: "Mot dans un texte",
        location: "Derrière la pancarte en haut des escaliers",
        riddle:
            <div>
                <p>1-1-3</p>
                <p>3-2-2</p>
                <p>2-1-3</p>
                <p>3-1-2</p>
                <p>2-1-6</p>
            </div>,
        answer: "GOLEM",
        clue: <p>L'indice suivant se trouve en E6</p>
    },
    {
        id: 6,
        hash: "ega8ujjs5x",
        type: "Math",
        location: "Collé sous l'arrosoir du balcon",
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
        clue: <p>L'indice suivant se trouve en F12</p>
    },
    {
        id: 7,
        hash: "dg8fv6xqjb",
        type: "Rébus",
        location: "Au milieu des plantes dans un bac du jardin",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus21} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus22} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus23} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus24} alt="Rebus"/>
            </div>,
        answer: "la mort aux trousses",
        clue: <p>L'indice suivant se trouve en C7</p>
    },
    {
        id: 8,
        hash: "qx4raw2hwu",
        type: "Mot dans un livre",
        location: "Au dos du livre 'Les régulateurs' au salon",
        riddle:
            <div>
                <p>174-3-2-1</p>
                <p>45-5-4-2</p>
                <p>151-8-2-4</p>
                <p>239-5-8-2</p>
                <p>59-1-5-2</p>
            </div>,
        answer: "KARMA",
        clue: <p>L'indice suivant se trouve en A8</p>
    },
    {
        id: 9,
        hash: "42w99atmjd",
        type: "Message codé",
        location: "Suspendu derrière le rideau de la salle de bain",
        riddle:
            <div>
                <p className="jungleslang">{charsToSpans("koala")}</p>
                <p>=</p>
                <p>{charsToSpans("KOALA")}</p>
                <hr/>
                <p className="jungleslang">
                    {charsToSpans("dans l arbre pres de la porte d entree")}
                </p>
            </div>,
        answer: "dans l arbre pres de la porte d entree",
        clue: null
    },
    {
        id: 10,
        hash: "dhg3rg7n3z",
        type: "Math",
        location: "Dans l'arbre près de la porte d'entrée",
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
        clue: <p>L'indice suivant se trouve en J3</p>
    },
    {
        id: 11,
        hash: "dp9fkaq4aa",
        type: "Rébus",
        location: "Dans la boîte aux lettres",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus31} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus32} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus33} alt="Rebus"/>
            </div>,
        answer: "dramatique",
        clue: <p>L'indice suivant se trouve en D9</p>
    },
    {
        id: 12,
        hash: "mb2bwqmyun",
        type: "Mot dans un livre",
        location: "Au dos du livre 'Pride and Prejudice and Zombies' dans ma table de nuit",
        riddle:
            <div>
                <p>120-4-7-1</p>
                <p>40-6-3-2</p>
                <p>211-5-6-3</p>
                <p>121-6-8-2</p>
                <p>169-1-2-5</p>
                <p>240-7-1-2</p>
                <p>55-6-8-3</p>
            </div>,
        answer: "BOUVIER",
        clue: <p>L'indice suivant se trouve en B5</p>
    },
    {
        id: 13,
        hash: "jug2275uxf",
        type: "Message codé",
        location: "Dans le tiroir sous le micro-ondes",
        riddle:
            <div>
                <p className="aurebesh">{charsToSpans("wapiti")}</p>
                <p>=</p>
                <p>{charsToSpans("WAPITI")}</p>
                <hr/>
                <p className="aurebesh">
                    {charsToSpans("dans le caisson qui soutient la moto en reparation")}
                </p>
            </div>,
        answer: "dans le caisson qui soutient la moto en reparation",
        clue: null
    },
    {
        id: 14,
        hash: "8gq8qvym35",
        type: "Math",
        location: "Dans le caisson sous la moto",
        riddle:
            <div>
                <code>b - a - c</code>
                <div className="text-left my-4">
                    <p>a = le nombre de croquettes alignées dans le poêle de la cuisine</p>
                    <p>b = l'âge de Donald Trump le jour de la naissance de Greta Thunberg</p>
                    <p>c = le nombre de tournevis rouges sur le bureau d'Irina</p>
                </div>
            </div>,
        answer: 47,
        clue: <p>L'indice suivant se trouve en E12</p>
    },
    {
        id: 15,
        hash: "p35kfbnd9p",
        type: "Rébus",
        location: "Derrière le bac des fraises",
        riddle:
            <div className="row">
                <img className="image-fluid col-4" src={rebus41} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus42} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus43} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus44} alt="Rebus"/>
                <img className="image-fluid col-4" src={rebus45} alt="Rebus"/>
            </div>,
        answer: "tomber dans les pommes",
        clue: <p>L'indice suivant se trouve en B11</p>
    },
    {
        id: 16,
        hash: "n47v3us38k",
        type: "Message codé",
        location: "Sur le store du petit balcon",
        riddle:
            <div>
                <p className="atlantean">{charsToSpans("auroch")}</p>
                <p>=</p>
                <p>{charsToSpans("auroch")}</p>
                <hr/>
                <p className="atlantean">
                    {charsToSpans("le tresor se trouve dans le sechoir a la buanderie")}
                </p>
            </div>,
        answer: "le tresor se trouve dans le sechoir a la buanderie",
        clue: null
    }
];