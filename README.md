# Event Planner

A multi-page React app for planning events. Visitors can browse event categories and features, create an account, log in, and manage their own list of events. It was built step by step as a way to learn React, and it is deployed on Vercel with a Neon Postgres database.

**Live site:** https://event-planner-one-iota.vercel.app

## Features

- **Home page** with event categories, features and testimonials
- **Events page** (login required) to add, search, delete and clear events
- **Ideas page** that loads data from an external API with loading and error states
- **Contact page** with a controlled form
- **Real authentication**: sign up, log in, log out, and stay logged in after a refresh
- **Dark and light theme** that is remembered between visits
- **Responsive layout** that adapts to phones and desktops

## Tech stack

| Area | Tools |
|---|---|
| Frontend | React 18, Vite, React Router |
| State | `useState`, `useReducer`, Context API, custom hooks |
| Backend | Vercel Serverless Functions (Node.js) |
| Database | Neon Postgres |
| Security | `bcryptjs` for password hashing, `jsonwebtoken` for login tokens |
| Hosting | Vercel (deploys automatically from GitHub) |

## React concepts used

| Concept | Where |
|---|---|
| Components and props | `CategoryCard`, `FeatureCard`, `TestimonialCard` |
| `useState` | Forms, search box, login form |
| `useEffect` | Tab title, saving to `localStorage`, API calls, token check |
| `useRef` | Focusing the event name input after adding an event |
| `useMemo` and `useCallback` | Search filter and stable callbacks with `memo` |
| `useContext` | `ThemeContext`, `EventsContext`, `AuthContext` |
| `useReducer` | Adding, deleting and clearing events |
| Custom hooks | `useLocalStorage`, `useFetch`, `useEvents`, `useAuth` |
| React Router | Pages, `NavLink`, protected routes, redirects |

## Project structure

```
event-planner/
├── api/                      Vercel serverless functions
│   ├── signup.js             Creates an account
│   ├── login.js              Checks a password and returns a token
│   └── me.js                 Checks a token and returns the user
├── src/
│   ├── App.jsx               Providers and router
│   ├── main.jsx              App entry point
│   ├── Components/
│   │   ├── AuthContext.jsx       Login state and functions
│   │   ├── EventsContext.jsx     Events state, reducer and search
│   │   ├── ThemeContext.jsx      Dark and light theme
│   │   ├── EventPlanner.jsx      Layout, menu and routes
│   │   ├── EventPlanner.css      All styles
│   │   ├── ProtectedRoute.jsx    Redirects logged-out visitors
│   │   ├── Navbar.jsx            Menu with Log in and Log out
│   │   ├── EventForm.jsx         Form to add an event
│   │   ├── ContactForm.jsx       Contact form
│   │   ├── CategoryCard.jsx, FeatureCard.jsx, TestimonialCard.jsx
│   │   ├── Footer.jsx
│   │   ├── useLocalStorage.js    Saves state in the browser
│   │   └── useFetch.js           Loads data from an API
│   ├── Pages/
│   │   ├── Home.jsx, EventsPage.jsx, IdeasPage.jsx
│   │   ├── LoginPage.jsx, ContactPage.jsx, NotFound.jsx
│   └── data/                 Fixed data (categories, features, testimonials)
├── vercel.json               Page refresh rule that keeps /api working
└── package.json
```

## Getting started

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
git clone https://github.com/Gloriane7767/event-planner.git
cd event-planner
npm install
npm run dev
```

Open the link that Vite prints (usually `http://localhost:5173`).

The `api/` functions only run on Vercel (or with `npx vercel dev`). With plain `npm run dev`, the pages work, but sign up and log in do not.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Environment variables

Set these in your Vercel project under **Settings, Environment Variables**. Never commit them to GitHub.

| Name | Purpose |
|---|---|
| `DATABASE_URL` | Connection string for the Neon database (added automatically when you connect Neon to the project) |
| `JWT_SECRET` | A long random string used to sign login tokens |

Generate a secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Database setup

Run this once in the Neon SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API reference

| Method | Endpoint | Body | Success response |
|---|---|---|---|
| POST | `/api/signup` | `{ "email", "password" }` | `201` with `{ message, user }` |
| POST | `/api/login` | `{ "email", "password" }` | `200` with `{ token, user }` |
| GET | `/api/me` | Header `Authorization: Bearer <token>` | `200` with `{ user }` |

Error responses use `{ "error": "message" }` with status `400`, `401`, `405`, `409` or `500`.

## How login works

```
Sign up  ->  password is hashed with bcrypt  ->  saved in Neon
Log in   ->  password is compared with the saved hash  ->  server returns a token
Refresh  ->  browser sends the token to /api/me  ->  server confirms who it is
Log out  ->  browser deletes the token
```

Passwords are never stored as plain text. Tokens expire after 7 days.

## Deployment

1. Push the code to GitHub.
2. Import the repository in Vercel (the Vite preset is detected automatically).
3. Add a Neon database from the Vercel Marketplace and connect it to the project.
4. Add the `JWT_SECRET` environment variable.
5. Every push to `main` builds and publishes a new version.

## Known limitations

- There is no limit on login attempts.
- There is no password reset and no email verification.

These would be the next things to add before real users depend on the app.

## Troubleshooting

| Problem | Fix |
|---|---|
| `vite: not found` | Run `npm install` |
| Build fails on Vercel but works locally | A file was never committed. Run `git status` and check every new file is listed |
| `Could not resolve "./Something"` | A file name differs by capital letter, or the file is missing from GitHub |
| White page after a change | Open the browser Console (F12) and read the first red line |
| `/api/...` returns the website instead of JSON | Check the `vercel.json` rewrite excludes `api/` |

## License

This project was built for learning. Add a license of your choice before sharing it publicly.
