import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import Language from "./Language";
import Photos from "./Photos";

export default function Results(props) {
   if (props.results && props.results.meanings) {
      let allSynonyms = props.results.meanings
         .map(function (meaning) {
            return meaning.synonyms;
         })
         .flat()
         .filter(function (synonym) {
            return synonym;
         });
      return (
         <>
            <section className="cards-grid">
               <article className="learning-card card-primary">
                  <div className="word-entry">
                     <h3 className="word-title">{props.results.word}</h3>
                     <p className="phonetic">{props.results.phonetic}</p>
                     <Phonetics word={props.results.word} />
                  </div>
               </article>
               <article className="learning-card card-secondary">
                  {props.results.meanings
                     .slice(0, 3)
                     .map(function (meaning, index) {
                        return (
                           <div key={index}>
                              <Meaning meaning={meaning} />
                           </div>
                        );
                     })}
               </article>
               <article className="learning-card card-tertiary">
                  <Synonyms synonyms={allSynonyms} />
               </article>
               <article className="learning-card card-quaternary">
                  <Language word={props.results.word} />
               </article>
            </section>
            <Photos word={props.results.word} />
         </>
      );
   } else {
      return null;
   }
}
