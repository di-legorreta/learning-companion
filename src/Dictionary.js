import "./App.css";
import React, { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");

   function handleResponse(response) {
      console.log(response);
   }

   function handleKeywordChange(event) {
      console.log(event.target.value);
      setKeyword(event.target.value);
   }

   function search(event) {
      event.preventDefault();
      alert(`Searching for ${keyword}`);

      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=297bdob5643aebcfc422bc019b792eta`;
      axios.get(apiUrl).then(handleResponse);
   }

   return (
      <form className="search-form" onSubmit={search}>
         <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search a word (e.g. book, water, learn...)"
         />
         <button type="submit">
            <Search />
         </button>
      </form>
   );
}
