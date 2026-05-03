import "./App.css";
import {
   BookOpenCheck,
   Moon,
   Globe,
   Heart,
   Search,
   Lightbulb,
} from "lucide-react";

export default function App() {
   return (
      <div className="app">
         <header className="app-header">
            <div className="brand">
               <div className="brand-icon">
                  <BookOpenCheck />
               </div>
               <h1>German Learning Companion</h1>
            </div>
            <div className="header-actions">
               <button>
                  <Moon />
               </button>
               <button>
                  <Globe /> DE
               </button>
               <button>
                  <Heart />
               </button>
            </div>
         </header>
         <main>
            <section className="search-section">
               <h2>Search any German word</h2>
               <form className="search-form">
                  <input
                     type="search"
                     placeholder="Search a word (e.g. Haus, Wasser, lernen...)"
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
                     Tip: Try searching for nouns to see gender and plural
                     forms!
                  </span>
               </div>
            </section>
         </main>
      </div>
   );
}
