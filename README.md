<div align="center">
  <img src="public/Comcamp-Logo.png" alt="ComCamp 37 Logo" width="200"/>

# 🐰 ComCamp 37 - Frontend 🦊

**The official registration website for ComCamp 37.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Animation:** Motion
- **Form & Validation:** React Hook Form + Zod

## 🚀 Getting Started

Ready to explore the code? Follow these simple steps to get the project running locally.

### Prerequisites
- Node.js (>= 18.0.0)
- npm, yarn, pnpm, or bun

### Installation

1. Clone this repository
```bash
git clone [https://github.com/your-repo/comcamp37-frontend.git](https://github.com/your-repo/comcamp37-frontend.git)
```

2. Navigate into the project directory
```bash
cd comcamp37-frontend
```

3. Install the dependencies
```bash
npm install
```

4. Set up environment variables
```bash
cp .env.example .env
```
*(Make sure to fill in the required variables inside `.env`)*

5. Start the development server
```bash
npm run dev
```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) 🎉

## 📂 Project Structure

```text
comcamp37-frontend/
├── app/                  # Next.js App Router
│   ├── api/              # API Endpoints (ig-story-confirmation)
│   ├── application/      # Core registration and questionnaire system
│   └── ...
├── components/           # Reusable UI Components
│   ├── landing/          # Components specific to the Landing Page
│   ├── result/           # Components for the result announcement
│   ├── ui/               # Ui Components
│   └── ...
├── contexts/             # Context Providers (UserContext, StudentContext)
├── lib/                  # Utility functions, configs, and Auth clients
├── mock/                 # Mock data used during development
├── public/               # Static assets
└── ...
```

---
<div align="center">
  <p>Made with 🧡 by ComCamp 37 Technical Team</p>
</div>