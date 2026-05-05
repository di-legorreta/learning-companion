import React from "react";

export default function Meaning(props) {
   return (
      <div className="meaning-item">
         <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
         <p className="definition">{props.meaning.definition}</p>
         <p className="example">{props.meaning.example}</p>
      </div>
   );
}
