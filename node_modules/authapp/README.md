# ⚛️ Authapp - React 19 + Redux Toolkit Authentication & CRUD Dashboard

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A high-performance Single Page Application (SPA) built with **React 19**, **TypeScript**, **Redux Toolkit**, **Tailwind CSS v4**, and **Vite**. 

It features user authentication (Sign up, Sign in, Password Update, Password Reset), protected client routes, and asynchronous CRUD state management with Axios interceptors for automated JWT authorization.

---

## 📁 Project Structure

```plaintext
Authapp/
├── public/                       # Public static assets
├── src/
│   ├── api/                      # Axios client & endpoints configuration
│   │   ├── axiosInstance.ts      # Axios instance with JWT request interceptor
│   │   └── endPoints.ts          # Centralized API route declarations
│   ├── component/                # Application page & UI components
│   │   ├── about/                # About page view
│   │   ├── allStudents/          # Student grid & table view
│   │   ├── contact/              # Contact view
│   │   ├── createStudent/        # Create student form
│   │   ├── forget/               # Password recovery request form
│   │   ├── home/                 # Landing page / hero dashboard
│   │   ├── login/                # User login form
│   │   ├── missionVision/        # Mission & Vision view
│   │   ├── register/             # User registration form
│   │   ├── sweetAlert.tsx        # SweetAlert alert utility helpers
│   │   ├── updatePassword/       # Password update form
│   │   └── updateStudent/        # Edit student details form
│   ├── layout/                   # Layout wrappers
│   │   ├── header.tsx            # Navigation header with auth controls
│   │   ├── footer.tsx            # Footer component
│   │   └── rootLayout.tsx        # Application root layout component
│   ├── redux/                    # State management (Redux Toolkit)
│   │   ├── authslice.ts          # Auth state thunks & reducers
│   │   ├── crudSlice.ts          # CRUD operations thunks & reducers
│   │   └── store.ts              # Redux store config
│   ├── Route/                    # Client-side routing
│   │   └── route.tsx             # React Router DOM configuration
│   ├── types/                    # TypeScript interfaces & types
│   │   └── type.ts               # State & data model contracts
│   ├── App.tsx                   # Main component root
│   ├── App.css                   # Stylesheet
│   ├── index.css                 # Global CSS & Tailwind CSS import
│   └── main.tsx                  # React entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # Single Page Application HTML root
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## ⚡ Key Features

- **JWT Authentication**: User login, registration, password updates, and token management via Redux Toolkit async thunks.
- **Axios Interceptor**: Automatically attaches the authorization token (`x-access-token`) from `localStorage`/`sessionStorage` to API requests.
- **CRUD Operations**: Fetch list, view details, create new entries, edit, and delete entries.
- **Modern UI & Styling**: Styled using Tailwind CSS v4 with custom responsive components.
- **Toast Notifications**: Built-in visual alerts with `Sonner` and `SweetAlert2`.

---

## 🚀 Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```
