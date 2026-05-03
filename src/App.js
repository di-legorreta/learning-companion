import "./App.css";
import { BookOpenCheck, Moon, Globe, Heart, Lightbulb } from "lucide-react";
import Dictionary from "./Dictionary";

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
               <h2>Explore and learn something new</h2>
               <Dictionary />
               <div className="tip">
                  <span className="tip-icon">
                     <Lightbulb />
                  </span>
                  <span>
                     Tip: Search a word to learn its meaning and how to use it
                     in context.
                  </span>
               </div>
            </section>
         </main>
      </div>
   );
}
