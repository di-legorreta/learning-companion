import "./App.css";
import { BookOpenCheck } from "lucide-react";
import Dictionary from "./Dictionary";
import ThemeToggle from "./ThemeToggle";
import LikeHeart from "./LikeHeart";

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

               <LikeHeart />
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
            <a
               href="https://github.com/di-legorreta/learning-companion"
               target="_blank"
               rel="noopener noreferrer"
            >
               GitHub
            </a>{" "}
            and hosted on{" "}
            <a
               href="https://learning-companion-cu5.pages.dev/"
               target="_blank"
               rel="noopener noreferrer"
            >
               Cloudflare
            </a>
            .
         </footer>
      </div>
   );
}
