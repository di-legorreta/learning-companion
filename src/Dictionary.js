import "./App.css";
import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Dictionary() {
   let [keyword, setKeyword] = useState("");

   function handleKeywordChange(event) {
      console.log(event.target.value);
      setKeyword(event.target.value);
   }

   function search(event) {
      event.preventDefault();
      alert(`Searching for ${keyword}`);
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
