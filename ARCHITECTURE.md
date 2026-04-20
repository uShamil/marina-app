# Marina Reservation System - Architecture & Schema
*Auto-generated on: Mon, 20 Apr 2026 00:26:04 GMT*

This document outlines the current state, architecture, and documentation schema of the Pelra Marina Reservation Application.

## 1. Tech Stack
*   **Frontend Framework:** React 18 (Vite)
*   **Styling:** Tailwind CSS (utility-first styling), Vanilla CSS
*   **Routing:** React Router v6
*   **Database & Authentication:** Supabase (PostgreSQL + GoTrue Auth)
*   **Icons & Components:** Swiper.js

---

## 2. Directory Structure (Auto-Scanned)
```text
src/
├── App.css
├── App.jsx
├── assets
│   ├── b1.jpg
│   ├── footer_bg.jpg
│   ├── helm.svg
│   ├── pelra.png
│   ├── pelra_logo.png
│   ├── pelra_logo2.png
│   └── react.svg
├── components
│   ├── home
│   │   ├── AvailableMarinas.jsx
│   │   ├── BestDeals.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestBlog.jsx
│   │   └── SearchBar.jsx
│   ├── layout
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   └── PageBanner.jsx
│   └── marinas
│       ├── MarinaCard.jsx
│       ├── MarinaFilters.jsx
│       ├── MarinaList.jsx
│       └── MarinaSlideCard.jsx
├── data
│   └── marinas.js
├── hooks
│   ├── AuthContext.js
│   ├── useAuth.jsx
│   └── useMarinaAvailability.js
├── index.css
├── lib
│   └── supabase.js
├── main.jsx
└── pages
    ├── Dashboard.jsx
    ├── Home.jsx
    ├── Login.jsx
    ├── MarinaDetail.jsx
    ├── Marinas.jsx
    ├── Register.jsx
    └── UnderConstruction.jsx

```

---

## 3. Database Schema (Supabase)

### Table: `marinas`
| Column Name   | Type    | Description                                   |
| :------------ | :------ | :-------------------------------------------- |
| `id`          | uuid    | Primary key, unique identifier                |
| `name`        | text    | Name of the boat/yacht (e.g. "Azimut 60")     |
| `location`    | text    | Marina city/location (e.g., "Dubai", "Miami") |
| `price`       | integer | Booking price (per hour or per day)           |
| `image`       | text    | URL to the primary image                      |
| `guests`      | integer | Maximum passenger capacity                    |
| `bedrooms`    | integer | Number of sleeping cabins                     |
| `rating`      | integer | Review rating (out of 5)                      |

---

## 4. Authentication Flow Map

1. **Guest State:** Visitor clicks **Sign Up** -> `/register` -> `supabase.auth.signUp()`.
2. **Authenticated State:** `useAuth` hook -> User goes to `/dashboard`.