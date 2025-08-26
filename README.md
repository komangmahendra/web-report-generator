# Generate Report HTML

This repository contains a full-stack project for generating and displaying reports via a web interface. It consists of a backend API (using Hono.js) and a frontend web app (using React, TypeScript, Vite, and Tailwind CSS).

## Project Structure

- `be/` — Backend API server (Hono.js)
- `fe/` — Frontend web application (React + Vite)

### Backend (`be/`)

- Built with [Hono.js](https://hono.dev/)
- Provides REST API endpoints (GET, POST, PUT, DELETE)
- Main entry: `src/index.ts`
- Example endpoints:
  - `GET /hello` — Greeting message
  - `POST /echo` — Echoes posted JSON
  - `PUT /update` — Updates data
  - `DELETE /remove` — Simulates delete

**Setup:**

```sh
cd be
npm install
npm run dev
```

### Frontend (`fe/`)

- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- Main entry: `src/main.tsx`
- UI components in `src/components/`

**Setup:**

```sh
cd fe
npm install
npm run dev
```

## Development

Run backend and frontend servers separately for local development. The frontend can be configured to call the backend API.

## License

MIT
# web-report-generator
