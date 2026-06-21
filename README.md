AI Dictionary

An advanced React-based dictionary application designed to help users explore, understand, and learn English vocabulary through definitions, pronunciation, translations, contextual examples, and visual references.

This project began as a traditional dictionary application and was expanded with artificial intelligence, multilingual support, image search capabilities, dark mode, and a responsive user experience.

Overview

The AI Dictionary allows users to search for English words and instantly access:

* Definitions and meanings
* Pronunciation and phonetic information
* Audio pronunciation (when available)
* Synonyms
* AI-generated translations
* Example sentences in multiple languages
* Related images
* Light and dark themes

The goal was to create a learning tool that combines traditional dictionary functionality with modern AI-powered language assistance.

⸻

Features

Dictionary Search

Users can search for English words and receive:

* Word definitions
* Parts of speech
* Usage examples
* Pronunciation information
* Available audio recordings

Data is retrieved dynamically from DictionaryAPI.

⸻

Pronunciation Support

When pronunciation audio exists, users can:

* View phonetic spelling
* Listen to native pronunciation

The application gracefully handles words that do not provide phonetic audio, preventing application crashes and ensuring a smooth user experience.

⸻

Synonyms

The application displays related synonyms for the searched word, allowing users to expand their vocabulary and discover alternative expressions.

⸻

AI-Powered Translations

One of the major enhancements of this project is the integration of the SheCodes AI API.

For every searched word, the application automatically generates:

German Translation

* Translation
* Grammatical article (when applicable)
* Gender information
* Example sentence

Spanish Translation

* Translation
* Grammatical article (when applicable)
* Gender information
* Example sentence

Special handling was implemented for proper nouns such as cities, countries, places, and names.

⸻

Image Search

The application integrates the Pexels API to provide visual references related to the searched word.

Features include:

* Dynamic image retrieval
* Responsive image gallery
* External links to the original image source
* Visual context to support language learning

This feature helps users associate vocabulary with real-world imagery.

⸻

Dark Mode

A complete dark mode was implemented to improve usability in low-light environments.

The dark theme includes:

* OLED-inspired color palette
* Accessible contrast ratios
* Consistent card styling
* Contextual color accents
* Theme persistence during usage

⸻

Responsive Design

The interface was designed to adapt across:

* Desktop screens
* Tablets
* Mobile devices

Responsive layouts ensure a consistent experience regardless of screen size.

⸻

Technologies Used

Frontend

* React
* JavaScript (ES6)
* CSS3
* HTML5

Libraries

* Axios
* Lucide React

APIs

Dictionary API

Used for:

* Definitions
* Phonetics
* Pronunciation audio
* Synonyms

SheCodes AI API

Used for:

* German translations
* Spanish translations
* Example sentence generation
* Grammar information

Pexels API

Used for:

* Related image search
* Visual vocabulary support

⸻

Technical Challenges

During development, several technical challenges were solved, including:

* Managing multiple asynchronous API requests
* Coordinating data from three independent APIs
* Handling missing phonetic and audio data
* Preventing API failures from breaking the UI
* Building reusable React components
* Creating responsive card layouts
* Designing a consistent dark mode system
* Structuring AI prompts to generate predictable multilingual responses

⸻

Project Structure

The application is organized into reusable React components, including:

* Dictionary
* Results
* Meaning
* Phonetics
* Synonyms
* Language
* Photos
* ThemeToggle
* FavoriteHeart

This component-based architecture improves maintainability and scalability.

⸻

Future Improvements

Potential future enhancements include:

* Additional language support
* Favorites and saved vocabulary
* Search history
* Example sentence audio
* Language selection interface
* Vocabulary learning mode
* Flashcard functionality

⸻

Deployment

The application is deployed using Cloudflare Pages.

⸻

Author

Created by Diana Legorreta.

Built as part of the SheCodes React curriculum and expanded with additional AI, multilingual, image search, and UI functionality beyond the original project requirements.
