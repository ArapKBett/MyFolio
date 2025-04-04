# Kipkorir Bett Portfolio

A bold and techy portfolio website showcasing web development and cybersecurity expertise.

## Setup

### Backend
1. Navigate to `backend/`:
   ```bash
   cd backend
   npm install

   
---

### Setup and Deployment Instructions

#### Local Setup
1. **Backend:**
   - `cd backend`
   - `npm install`
   - Configure `.env` with your MongoDB Atlas URI and EmailJS keys.
   - `npm run dev`
2. **Frontend:**
   - `cd frontend`
   - `npm install`
   - `npm start`

#### Hosting on Netlify (Frontend) and Render (Backend)
1. **Backend on Render:**
   - Push `backend/` to a GitHub repo.
   - Create a new Render app, link the repo, set `.env` variables, and deploy.
   - Note the URL (e.g., `https://your-backend.onrender.com`).

2. **Update Frontend API Calls:**
   - In `Portfolio.js` and `Contact.js`, replace `http://localhost:5000` with your backend URL.

3. **Frontend on Netlify:**
   - `cd frontend`
   - `npm run build`
   - Install Netlify CLI: `npm install -g netlify-cli`
   - `netlify deploy` (preview) and `netlify deploy --prod` (production).
   - Set publish directory to `build/`.

4. **Test:**
   - Visit your Netlify URL and ensure it connects to the backend.

---
