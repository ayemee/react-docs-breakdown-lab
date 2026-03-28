# ⚛️ React Docs Breakdown Lab

<p align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Fast%20Dev-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Learning](https://img.shields.io/badge/Purpose-Learning-blue)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

</p>

A **small React playground** built while studying the React documentation.

Instead of building one large application, this project breaks React concepts into **small focused labs** to clearly understand how React works internally.

Built with **React + Vite**.

---

# 🚀 Tech Stack

| Technology     | Purpose                  |
| -------------- | ------------------------ |
| ⚛️ React       | UI library               |
| ⚡ Vite        | Development build tool   |
| 🟨 JavaScript  | Core language            |
| 🧠 React Hooks | State & logic management |

---

# 🧪 Labs Included

## 🔢 Counter Lab

Demonstrates the **React render cycle**.

Concepts covered:

- `useState`
- `useEffect`
- render vs effect timing
- dependency arrays
- state-driven UI

Example behavior:

```text
click button
→ state updates
→ component re-renders
→ effect runs
```

---

## ✅ Todo Lab

A small todo feature demonstrating **real UI state management**.

Concepts covered:

- controlled inputs
- list rendering with `.map()`
- keys in lists
- immutable updates
- derived state
- component composition

Component architecture:

```text
TodoPage
 ├─ TodoForm
 ├─ TodoStats
 └─ TodoList
      └─ TodoItem
```

---

## 🌐 Users Lab

Demonstrates **data fetching with React effects**.

Concepts covered:

- API requests
- `useEffect`
- loading states
- error handling
- conditional rendering

Data source:

```
https://jsonplaceholder.typicode.com/users
```

---

## ⚡ Performance Lab

Explores **React re-render behavior and optimization**.

Concepts covered:

- `React.memo`
- `useMemo`
- `useCallback`
- avoiding unnecessary renders
- debounced search input

Example render flow:

```text
parent render
→ memoized child skips render
→ expensive filtering skipped
```

---

# 🧩 Custom Hooks

Two reusable hooks were implemented.

### 🏷 useDocumentTitle

Updates the browser tab title dynamically.

Example:

```javascript
useDocumentTitle("Counter (3)");
```

---

### ⏱ useDebounce

Delays reacting to rapid input changes.

Useful for:

- search fields
- API requests
- expensive filtering

Example:

```javascript
const debouncedValue = useDebounce(value, 400);
```

---

# 📁 Project Structure

```text
src
│
├─ components
│  ├─ layout
│  │  └─ SectionCard.jsx
│  │
│  ├─ performance
│  │  └─ MemoChild.jsx
│  │
│  └─ todo
│     ├─ TodoForm.jsx
│     ├─ TodoItem.jsx
│     ├─ TodoList.jsx
│     └─ TodoStats.jsx
│
├─ hooks
│  ├─ useDebounce.js
│  └─ useDocumentTitle.js
│
├─ pages
│  ├─ CounterPage.jsx
│  ├─ PerformancePage.jsx
│  ├─ TodoPage.jsx
│  └─ UsersPage.jsx
│
├─ App.jsx
└─ main.jsx
```

---

# 🧠 React Concepts Covered

This repository demonstrates core React concepts:

✔ State management with `useState`
✔ Effects with `useEffect`
✔ Controlled form inputs
✔ List rendering and keys
✔ Immutable state updates
✔ API fetching patterns
✔ Memoization (`memo`, `useMemo`, `useCallback`)
✔ Custom hooks
✔ Component composition

---

# ▶️ Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

# 🎯 Purpose of This Repo

The goal is to deeply understand the **mental model of React**:

```
state → render → UI update
```

Instead of memorizing APIs, this project focuses on understanding:

- how React re-renders
- when effects run
- how data flows through components
- how memoization affects rendering

# ✨ Author

Built as part of a **React fundamentals study project** while exploring React documentation and architecture patterns.
