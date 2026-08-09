<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=220&section=header&text=CANNOIL%20E-COMMERCE&fontSize=64&fontColor=FFD700&fontAlignY=42&desc=🌿%20Health%20%26%20Wellness%20Storefront%20%C2%B7%20React%20%2B%20Vite%20%C2%B7%20Tailwind%20CSS&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=20&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=760&lines=%F0%9F%8C%BF+Natural+Wellness+Product+Catalog;%E2%9A%9B%EF%B8%8F+Modular+React+Component+Architecture;%F0%9F%93%B1+Responsive+Desktop+%2B+Mobile+Navigation;%F0%9F%8E%A8+Tailwind+CSS+%2B+PostCSS+Styling+Pipeline;%F0%9F%8F%86+%231+GitHub+Committer+in+Colombia)](https://git.io/typing-svg)

<br/>

<p align="center">
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/Engineer-Manuel%20Nieto-blue?style=for-the-badge&logo=github"/>
  </a>
  <a href="https://committers.top/colombia#NietoDeveloper">
    <img src="https://img.shields.io/badge/Committers.top-%231%20Colombia-gold?style=for-the-badge"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000"/>
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/NietoDeveloper/Cannoil-Ejemplo1">
    <img src="https://img.shields.io/badge/📂_Source-NietoDeveloper%2FCannoil--Ejemplo1-000000?style=for-the-badge&logo=github&logoColor=FFD700"/>
  </a>
</p>

</div>

---

## 📋 Overview

**Cannoil E-Commerce** is a specialized online store application designed for health and natural wellness products. Built with a modular React architecture and styled using utility-first CSS frameworks, this project demonstrates clean frontend design, responsive layouts, and organized component structures tailored for modern digital storefronts.

Developed by **Manuel Nieto** (**NietoDeveloper**), ranked **#1 in Colombia** and **#3 in Latin America** on `committers.top`.

---

## 🗂️ Project Structure

```text
Cannoil-Ejemplo1/
├── .vscode/        # Workspace configurations
├── dist/           # Production build output
├── public/         # Static public assets
└── src/
    ├── assets/     # Static images and data sources (e.g., product data)
    ├── Components/ # Modular UI components
    │   ├── About/
    │   ├── Contact/
    │   ├── Footer/
    │   ├── Landing/
    │   ├── Navbar/
    │   ├── NavbarMobile/
    │   ├── Resume/
    │   ├── Tech/
    │   └── Work/
    ├── Pages/      # View controllers (Home, Error handling)
    ├── Utils/      # Helper functions and utilities
    ├── App.jsx     # Root application component
    └── main.jsx    # DOM mounting point
```

---

## 🔄 Component Composition Flow

```mermaid
flowchart TD
    A([🌐 main.jsx]) --> B[App.jsx]
    B --> C[Pages]
    C -->|Route: Home| D[Landing]
    C -->|Route: Error| E[Error Handling]
    D --> F[Navbar / NavbarMobile]
    D --> G[About]
    D --> H[Work]
    D --> I[Tech]
    D --> J[Resume]
    D --> K[Contact]
    D --> L[Footer]

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style D fill:#06B6D4,color:#000,stroke:#06B6D4
    style L fill:#000,color:#FFD700,stroke:#FFD700
```

---

## ✨ Key Features

- **Specialized Health Catalog:** Curated product display showcasing natural wellness goods.
- **Responsive Mobile Navigation:** Dedicated desktop and mobile navigation bars (`Navbar` and `NavbarMobile`) ensuring optimal UX across devices.
- **Modular Component Architecture:** Decoupled sections (`Landing`, `About`, `Work`, `Contact`) for easy maintenance and scalability.
- **Modern Styling:** Fast processing pipeline leveraging PostCSS and Tailwind CSS for a sleek, modern aesthetic.

---

## 🛠️ Technology Stack

<div align="center">

| Category | Technologies |
|:---------|:--------------|
| 🎨 **Frontend Library** | React (JavaScript ES6+) |
| ⚡ **Build Tooling** | Vite |
| 💅 **Styling Framework** | Tailwind CSS, PostCSS |
| 🔧 **Version Control** | Git / GitHub |

</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation & Execution

**Step 1 — Clone the repository**

```bash
git clone https://github.com/NietoDeveloper/Cannoil-Ejemplo1.git
```

**Step 2 — Navigate to the project directory**

```bash
cd Cannoil-Ejemplo1
```

**Step 3 — Install dependencies**

```bash
npm install
```

**Step 4 — Run the development server**

```bash
npm run dev
```

**Step 5 — Open your browser** and navigate to `http://localhost:5173` to view the application.

---

## 👨‍💻 Author

**Manuel Nieto (NietoDeveloper)**
Role: Full-Stack Software Engineer & Systems Architect
Location: Bogotá, Colombia
Rankings: #1 in Colombia & #3 in Latin America (committers.top)
Portfolio: [manuelnieto.netlify.app](https://manuelnieto.netlify.app)
GitHub: [@NietoDeveloper](https://github.com/NietoDeveloper)

---

## 📄 License

This project is licensed under the **MIT License**.

<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=130&section=footer&animation=fadeIn" width="100%"/>

</div>
