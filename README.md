USER LIST app

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Description

Design and implement a single-page React application that displays a list of users fetched
from a public API. Candidates are permitted to utilize custom-built CSS, as well as React
UI libraries such as Material UI, Chakra UI, and others.

This Project is for coding challenge with the following prerequisite:

Public API: https://jsonplaceholder.typicode.com/users

1. API Integration: Fetch a list of users from a public API.
2. Display: Present the user list, including their names and other pertinent information.
3. Search/Filter: Implement an input field that facilitates filtering of the displayed user list
based on a text search.
4. Profile Data Fetching: Display user details on the profile page (/user/:id) by
fetching data from the public API.
