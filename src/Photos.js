import React, { useEffect, useState } from "react";
import { createClient } from "pexels";

export default function Photos(props) {
   const [photos, setPhotos] = useState([]);
   useEffect(() => {
      const client = createClient(
         "590JfJH2EMMTK9lcw7oJk92iOsHVAbr2VDi1ZqAlTqzf6QTYf5OCpglA",
      );

      client.photos

         .search({
            query: props.word,

            per_page: 9,
         })

         .then((response) => {
            setPhotos(response.photos);
         })

         .catch((error) => {
            console.log("Pexels error:", error);
         });
   }, [props.word]);

   return (
      <div className="photos">
         {photos.map(function (photo) {
            return (
               <a
                  key={photo.id}
                  href={photo.url}
                  target="_blank"
                  rel="noreferrer"
               >
                  <img src={photo.src.landscape} alt={photo.alt} />
               </a>
            );
         })}
      </div>
   );
}
