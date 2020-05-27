import React from "react";

export function isEqual(string1, string2) {
    return string1.toString().toLowerCase() === string2.toString().toLowerCase();
}

export function charsToSpans(string) {
    let chars = string.split('');
    return <span className="text-center">
        {chars.map((c, i) =>
            <span className="border rounded m-1 d-inline-block text-center"
                  key={i} style={{width: "20px"}}>
                {c}
            </span>)}
    </span>;
}