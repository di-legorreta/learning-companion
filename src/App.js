import "./App.css";
import { BookOpenCheck, Globe, Heart } from "lucide-react";
import Dictionary from "./Dictionary";
import ThemeToggle from "./ThemeToggle";

export default function App() {
   return (
      <div className="app">
         <header className="app-header">
            <div className="brand">
               <div className="brand-icon">
                  <BookOpenCheck />
               </div>
               <h1>Learning Companion</h1>
            </div>
            <div className="header-actions">
               <ThemeToggle />
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
               <h2>Explore and learn something new</h2>
               <Dictionary />
            </section>
         </main>
         <footer className="footer">
            This project was coded by Diana Legorreta, is open-sourced on{" "}
            <a href="...">GitHub</a> and hosted on <a href="...">Netlify</a>.
         </footer>
      </div>
   );
}
