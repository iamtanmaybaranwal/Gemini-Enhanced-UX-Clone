# ✨ Gemini UX Lab

**Gemini UX Lab** is a **frontend-focused conversational AI interface** inspired by Google Gemini.
The goal of this project is **not just cloning UI**, but **rebuilding Gemini’s interaction patterns, state flow, and UX transitions from scratch** using React.

This project demonstrates **real-world frontend engineering skills**, including state management, UI animations, routing, responsiveness, and API integration.

---

## 🔗 Live Demo

https://gemini-ux-lab.vercel.app
---

## 🎯 Project Goals

* Recreate **Gemini-like conversational UX**
* Implement **smooth UI transitions** instead of static rendering
* Handle **real API constraints** (rate limits, errors)
* Build a **scalable chat architecture**
* Focus on **clean state-driven UI**, not UI libraries

---

## 🧠 Key Features

### 🌗 Dark / Light Mode

* Toggle between light and dark themes
* Theme applies globally (sidebar, main area, icons, text)
* Implemented using CSS variables + global class toggle

---

### ✨ Gemini-Style Home → Chat Transition

* Initial **home state** with greeting & suggestions
* On first prompt:

  * Content shifts upward smoothly
  * Suggestions fade out
  * Chat mode activates
* Mimics real Gemini interaction flow

---

### ⏳ Animated “Thinking” State

* No `Loading...` or `Thinking...` text
* Uses a **Gemini-style shimmer skeleton animation**
* Automatically disappears when response arrives
* Enhances perceived performance and UX polish

---

### 💬 Chat System with History

* Each prompt creates a **new chat**
* The **first question becomes the chat title**
* Chat titles appear in the sidebar
* Clicking a chat restores its response

---

### ➕ New Chat = New Page

* Clicking the **➕ New Chat** button:

  * Navigates to a **fresh Gemini page**
  * Clears the current conversation
  * Preserves previous chats in sidebar
* Implemented using **React Router**
* URL reflects application state

---

### ⌨️ Smart Prompt Handling

* Submit via **Enter key** or Send button
* Input clears immediately after sending
* Prevents duplicate submissions while loading
* Cursor remains ready for the next query

---

### 📱 Fully Responsive Design

* Optimized for **desktop, tablet, and mobile**
* Sidebar collapses on smaller screens
* Fixed navbar on mobile for better usability
* Layout adapts without breaking animations

---

### 🔒 Error & Rate-Limit Handling

* Gracefully handles Gemini API quota errors
* Displays meaningful feedback instead of crashing
* Prevents excessive API calls during loading
* Designed with real API constraints in mind

---

## 🛠️ Tech Stack

* **React (Vite)**
* **React Router DOM**
* **Google Gemini API**
* **CSS (custom, no UI frameworks)**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── Main/
│   │   ├── Main.jsx
│   │   └── Main.css
│   ├── Skeleton/
│   │   ├── Skeleton.jsx
│   │   └── Skeleton.css
│
├── assets/
│   └── assets.js
│
├── config/
│   └── gemini.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/gemini-ux-lab.git
cd gemini-ux-lab
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

---

## 🔑 Gemini API Configuration

1. Get a Gemini API key from
   [https://ai.google.dev/](https://ai.google.dev/)

2. Add the key inside:

```js
src/config/gemini.js
```

For production, this should be moved to a backend or environment variable.

---

## ⚠️ Known Limitations

* Uses **Gemini free tier** (rate-limited)
* Chat history is **in-memory** (refresh clears chats)
* API key is client-side (demo/learning purpose)

---

## 🚀 Future Enhancements

* Persistent chat history (localStorage / backend)
* Multi-turn conversations per chat
* Markdown rendering (code blocks, lists)
* Streaming responses (token-by-token)
* Chat deletion / renaming
* Secure backend API proxy

## 📜 Disclaimer

This project is for **educational purposes only** and is **not affiliated with Google or Gemini**.

---

## 👤 Author

**Tanmay Baranwal**

Just say the word 👌
