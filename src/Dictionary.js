import "./App.css";
import React, { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Search } from "lucide-react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");
   let [results, setResults] = useState({});

   function handleResponse(response) {
      setResults(response.data);
   }

   function handleKeywordChange(event) {
      setKeyword(event.target.value);
   }

   function search(event) {
      event.preventDefault();

      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=297bdob5643aebcfc422bc019b792eta`;
      axios.get(apiUrl).then(handleResponse);
   }

   return (
      <div>
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
         <div className="tip">
            <span className="tip-icon">
               <Lightbulb />
            </span>
            <span>
               Tip: Search a word to learn its meaning and how to use it in
               context.
            </span>
         </div>
         <Results results={results} />
      </div>
   );
}
