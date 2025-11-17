# NewLaravel Frontend

React frontend application for the NewLaravel post management system with React Router v6.

## Features

✅ **Client-Side Routing**: Navigate between pages without full page reloads using React Router v6  
✅ **BrowserRouter Setup**: Properly configured for SPA navigation  
✅ **Deep Linking Support**: Direct URLs work correctly (e.g., `/posts`, `/about`)  
✅ **404 Handling**: Custom 404 page for non-existent routes  
✅ **GitHub Pages Ready**: Includes 404.html fallback for deployment  

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Styling

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
# or
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the app with the correct base path and deploy to GitHub Pages.

## Project Structure

```
frontend/
├── src/
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Posts.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx         # Main app with routes
│   ├── main.jsx        # Entry point with BrowserRouter
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── 404.html            # GitHub Pages fallback for client-side routing
├── package.json
└── vite.config.js
```

## React Router Setup

The app uses **BrowserRouter** for clean URLs without hash (#) fragments:

### Main Entry Point (main.jsx)

```jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

### Routes Configuration (App.jsx)

```jsx
import { Routes, Route, Link } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Navigation

Use `Link` components for client-side navigation (no page reload):

```jsx
<Link to="/posts">Posts</Link>
```

## How Client-Side Routing Works

1. **Link Clicks**: Using `<Link>` components prevents full page reloads and updates the URL via the History API
2. **Direct URLs**: When you navigate directly to a URL (e.g., `/posts`), the dev server/production server serves `index.html` for all routes
3. **GitHub Pages**: The `404.html` file (copy of `index.html`) ensures that GitHub Pages serves the React app for all routes
4. **Route Matching**: React Router matches the URL to the appropriate component and renders it without reloading

## Environment Variables

### Development (.env)

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

### Production (.env.production)

```env
VITE_API_URL=https://yourapp.railway.app/api
```

Access in code:

```javascript
const API_URL = import.meta.env.VITE_API_URL
```

## API Integration

The Posts page demonstrates API integration with the Laravel backend:

```javascript
const response = await axios.get(`${API_URL}/posts`)
```

Make sure the Laravel backend is running for the Posts page to fetch data.

## Testing Client-Side Navigation

1. Start the dev server: `npm start`
2. Navigate to [http://localhost:3000](http://localhost:3000)
3. Click on navigation links - notice there are no full page reloads
4. Navigate directly to [http://localhost:3000/posts](http://localhost:3000/posts) - it works!
5. Refresh the page on any route - it still works!

## GitHub Pages Deployment

The app is configured for GitHub Pages deployment:

1. The `homepage` in `package.json` is set to your GitHub Pages URL
2. The deploy script builds with the correct base path
3. The `404.html` file ensures all routes work on GitHub Pages

### Deploy Steps

```bash
# 1. Make sure your backend is deployed and update .env.production
# 2. Run the deploy command
npm run deploy

# This will:
# - Build the app with base path /newLaravel/
# - Deploy to the gh-pages branch
# - Make it available at https://Fuyad22.github.io/newLaravel
```

### Important for GitHub Pages

- All routes must be handled by the React app
- The `404.html` file is a copy of `index.html` to handle deep links
- CORS must be configured in the Laravel backend to allow your GitHub Pages domain

## Troubleshooting

### Routes show 404 after refresh

- **Dev**: Make sure Vite dev server is running (it handles client-side routing automatically)
- **Production**: Ensure your web server is configured to serve `index.html` for all routes
- **GitHub Pages**: Make sure `404.html` exists and is a copy of `index.html`

### Links cause full page reload

- Make sure you're using `<Link>` from `react-router-dom`, not `<a>` tags
- Verify `BrowserRouter` is wrapping your app in `main.jsx`

### API calls fail

- Check that the backend is running
- Verify the API URL in your `.env` file
- Check CORS configuration in Laravel backend

## License

MIT
