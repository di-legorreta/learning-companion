import React from "react";

export default function Synonyms(props) {
   if (props.synonyms) {
      return (
         <div>
            <h4 className="part-of-speech">Synonyms</h4>
            <div className="synonyms">
               {props.synonyms.map(function (synonym, index) {
                  return (
                     <span className="synonym" key={index}>
                        {synonym}
                     </span>
                  );
               })}
            </div>
         </div>
      );
   } else {
      return null;
   }
}
