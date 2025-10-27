# 📚 Book Finder — React + Tailwind + OpenLibrary API

A simple and fast web app to search books using the **OpenLibrary API**.  
Includes debounced search, shimmer loading skeleton, and graceful fallback when no results or no cover image.

---

## 🚀 Features

- 🔎 Search books by title/author using OpenLibrary API
- ⏳ Debounced search to prevent extra API calls
- ✨ Shimmer loading effect
- 🖼 Default fallback cover image when unavailable
- 📭 Empty state UI before search
- 🧼 Clean UI with Tailwind CSS

---

## 🛠 Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **OpenLibrary REST API**
- **Custom Debounce Hook**

---

## 📂 Folder Structure
```
book-finder/
│── src/
│ ├── assets/
│ │ └── searchBook.png
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ └── Shimmer.jsx
│ ├── hooks/
│ │ └── useDebounce.js
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md

```
---

## 💻 Installation & Setup

```bash
# 1. Clone repository
git clone <repo-url>
cd book-finder

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
