import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Phonetics(props) {
   let [phonetics, setPhonetics] = useState([]);

   function handleResponse(response) {
      console.log(response.data);
      setPhonetics(response.data);
   }

   useEffect(() => {
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`;
      axios
         .get(apiUrl)
         .then(handleResponse)
         .catch(function () {
            setPhonetics([]);
         });
   }, [props.word]);

   return (
      <div className="phonetics-audio">
         {phonetics.slice(0, 1).map(function (entry, index) {
            return (
               <div className="phonetics-entry" key={index}>
                  {entry.phonetics

                     .filter(function (phonetic) {
                        return phonetic.audio;
                     })

                     .slice(0, 2)

                     .map(function (phonetic, index) {
                        return (
                           <div className="phonetic-audio-item" key={index}>
                              <span>{phonetic.text}</span>

                              <audio controls src={phonetic.audio}></audio>
                           </div>
                        );
                     })}
               </div>
            );
         })}
      </div>
   );
}
