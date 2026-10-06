# BENERIN Dummy Prototype

Next.js only. No FastAPI, no PostgreSQL, no Docker required. All data is dummy/static and state is kept in React memory for the prototype flow.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Flow
Home -> Diagnosis (AI chat + manual + photo placeholder) -> Technician Matching (dummy map + technicians + distance + price) -> Payment (dummy) -> Review -> Home.
