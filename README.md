# Santos Web Programming Portfolio

This repository contains the React client and database/API code used for the CTWEBPGL long exam portfolio.

## Local development

Start MongoDB first, then run the backend and frontend in separate terminals.

```powershell
cd "C:\Users\rache\OneDrive\Documents\Ronron\My Codes\santos-webprogg\santos-server"
npm run dev
```

```powershell
cd "C:\Users\rache\OneDrive\Documents\Ronron\My Codes\santos-webprogg\santos-client"
npm run dev
```

The frontend usually opens at `http://localhost:5173/`. If Vite chooses another port, use the URL printed in the terminal.

## Deployment plan

Recommended hosting setup for the portfolio:

- Frontend: Vercel
- API/backend routes: Vercel
- Database: MongoDB Atlas

### Vercel environment variables

Set these in the Vercel project:

- `MONGO_URI=mongodb+srv://...`
- `JWT_SECRET=your-secret-key`

The frontend automatically uses `/api` on Vercel, so the same project can serve the React pages and the API routes.

## Notes

- The client uses React Router, so direct page refreshes need SPA rewrites on the host.
- The Vercel project serves both the frontend and the API routes from the same domain.
- Replace the pending host link in the portfolio document after deployment.
