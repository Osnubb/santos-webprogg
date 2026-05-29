# Santos Web Programming Portfolio

This repository contains the React client and Express/MongoDB backend used for the CTWEBPGL long exam portfolio.

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

Recommended hosting setup:

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

### Frontend environment variables

Set these in Vercel:

- `VITE_API_URL=https://your-backend.onrender.com/api`
- `VITE_APP_URL=https://your-frontend.vercel.app`

### Backend environment variables

Set these in Render:

- `PORT=5000`
- `MONGO_URI=mongodb+srv://...`
- `JWT_SECRET=your-secret-key`
- `CLIENT_URL=https://your-frontend.vercel.app`

## Notes

- The client uses React Router, so direct page refreshes need SPA rewrites on the host.
- The backend already allows the local and deployed client origins through CORS.
- Replace the pending host link in the portfolio document after deployment.
