import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Language(props) {
   const [translation, setTranslation] = useState("");

   function handleResponse(response) {
      setTranslation(response.data.answer);
   }

   useEffect(() => {
      let prompt = `Translate the English word "${props.word}" into German and Spanish. For German, include the article. Provide one short example sentence in each language.`;
      let context =
         "Respond on different lines, exactly like this: On the first line, translated word with article. Next line, write the article and gender of the word in german. Next line, Example: short sentence. Next line, translated word with article.  Next line, write the article and gender of the word in Spanish.  Next line, Example: short sentence.";
      let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=297bdob5643aebcfc422bc019b792eta`;
      axios.get(apiUrl).then(handleResponse);
   }, [props.word]);

   let lines = translation.split("\n").filter(function (line) {
      return line.trim() !== "";
   });

   let germanLines = lines.slice(0, 3);
   let spanishLines = lines.slice(3, 6);
   return (
      <div className="language-card">
         <h4 className="language-title">translations</h4>

         <div className="language-sections">
            <div className="language-section">
               <h5>🇩🇪 German</h5>

               {germanLines.map(function (line, index) {
                  return (
                     <p
                        className={`language-line language-line-${index}`}
                        key={index}
                     >
                        {line}
                     </p>
                  );
               })}
            </div>

            <div className="language-section">
               <h5>🇪🇸 Spanish</h5>

               {spanishLines.map(function (line, index) {
                  return (
                     <p
                        className={`language-line language-line-${index}`}
                        key={index}
                     >
                        {line}
                     </p>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
