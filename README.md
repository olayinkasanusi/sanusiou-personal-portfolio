# Sanusi Olayinka Uthman — Professional Full Stack Portfolio

This repository hosts the professional engineering portfolio of **Sanusi Olayinka Uthman**, a Full Stack Software Engineer specializing in Node.js backend architectures, RESTful APIs, database design, React, Next.js, and TypeScript. 

Designed as a high-end technical developer catalog, this project acts as a live demonstration of full-stack system architecture, robust server design, modern component patterns, rigid responsive styling grids, strict accessibility standards, and performant asset optimizations.

---

## 🎯 Purpose of the Project

The primary purpose of this portfolio is to transcend traditional, static resume layouts and establish direct technical credibility. It serves as:
1. **An Interactive Developer Sandbox**: Introducing mock shell diagnostics terminals and responsive sliding grid animations that display programming fluency natively.
2. **A High-Performance Full-Stack Benchmark**: Demonstrating speed optimizations, rapid client-side search engines, zero-lag state handling, and layout-glow glassmorphic design languages.
3. **An Engineering Case-Study Hub**: Detailing full-stack technical solutions, Node.js API data pipelines, database mutations via PostgreSQL/Supabase, and end-to-end feature ownership.

---

## 💎 Core Features & UX Systems

### 1. Developer Bash Diagnostics Console (`/about`)
* **Terminal Simulation**: An interactive Unix terminal console that mimics typing animations to output technical metadata (`profile.json`).
* **Syntax Highlighter**: Built-in JSON token highlighter to render typescript interfaces, arrays, numbers, and strings with specific IDE themes.

### 2. Dual-Mode Responsive Timeline (`/about`)
* **SVG Canvas (Desktop $\ge$ 768px)**: Draws an interactive bezier curved path with responsive nodes, years, and title indicators that animate on intersection.
* **Vertical Timeline (Mobile < 768px)**: Adapts seamlessly to mobile viewports to prevent horizontal overflow. Replaces the SVG with vertical cards featuring tech badges (`Code`, `Award`, `Layers`, `Server`) and scroll fades.

### 3. Compact Skill Tabs Panel (`/about`)
* **Interactive Filtering**: Groups technology cards under three distinct categories (Backend & Server, Frontend & Logic, DB & Cloud) to compress vertical space on mobile devices by **66%**.
* **Spring Transitions**: Features active sliding background indicators driven by Framer Motion's `layoutId`.

### 4. Senior Metrics Dashboard (`/projects`)
* **Dynamic Search & Filtering**: A local real-time search engine with animated categories powered by Framer Motion's layout animations.
* **Card Glare & Modals**: Reflective glassmorphic cards that support custom glare sheet reflections on mouse hovers and quick-view detail panels.

---

## 🛠️ Technical Stack & Tooling

* **Backend & Server**: Node.js, Express.js, RESTful APIs, JWT Authentication, Asynchronous Streams.
* **Databases & Cloud**: PostgreSQL, Supabase, MongoDB, Vercel Serverless.
* **Core Runtime & Frontend**: React 19 (Functional Components, Custom Hooks), Next.js, & TypeScript (Strict Types).
* **Build Architecture**: Vite Bundler (Hot Module Replacement, Code-Splitting).
* **Styling System**: Vanilla CSS & Tailwind CSS v4 (Custom Properties, Utility Classes).
* **Animations Engine**: Framer Motion (Layout Springs, Viewport Staggers, Exit Animations).
* **Routing Strategy**: React Router v7 (Client-Side Navigation, Route Transitions).

---

## 🚀 Local Development Guide

### 1. Installation
Clone this repository to your workspace and install the Node dependencies:
```bash
npm install
```

### 2. Launching Development Server
Start the local Vite development server with Hot Module Replacement active:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to inspect the application.

### 3. Production Compilation
Verify compilation correctness and bundle the application into an optimized `/dist` folder for hosting:
```bash
npm run build
```
