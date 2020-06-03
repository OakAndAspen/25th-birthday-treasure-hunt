import React from "react";

export function isEqual(string1, string2) {
    return string1.toString().toLowerCase() === string2.toString().toLowerCase();
}

export function charsToSpans(string) {
    let words = string.split(' ');
    return <span className="text-center">
        {words.map((w, i) =>
            <span className="d-inline-block mx-3" key={i}>
            {w.split('').map((c, j) =>
            <span className="border rounded m-1 d-inline-block text-center"
                  key={"" + i + j} style={{width: "20px"}}>
                {c}
            </span>)}
        </span>)}
    </span>;
}