import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
   console.log(props.results);

   if (props.results && props.results.meanings) {
      return (
         <section className="cards-grid">
            <article className="learning-card">
               <div className="word-entry">
                  <h3 className="word-title">{props.results.word}</h3>
                  <p className="phonetic">{props.results.phonetic}</p>
               </div>
            </article>
            <article className="learning-card">
               {props.results.meanings.map(function (meaning, index) {
                  return (
                     <div key={index}>
                        <Meaning meaning={meaning} />
                     </div>
                  );
               })}
            </article>
            <article className="learning-card">Card 3</article>
            <article className="learning-card">Card 4</article>
         </section>
      );
   } else {
      return null;
   }
}
