# React Router Setup Documentation

This document explains how React Router is configured in this project to enable client-side navigation without full page reloads.

## Overview

The application uses **React Router v6** with **BrowserRouter** to provide seamless client-side navigation. All navigation happens via the HTML5 History API without full page reloads.

## Key Components

### 1. BrowserRouter Wrapper (main.jsx)

The `BrowserRouter` component is wrapped around the entire application at the root level:

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

**Why this matters:**
- Provides routing context to all components
- Enables the History API for URL management
- Required for all routing functionality

### 2. Routes Configuration (App.jsx)

Routes are defined using `Routes` and `Route` components:

```jsx
import { Routes, Route } from 'react-router-dom'

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

**How it works:**
- `Routes` component examines the current URL
- Matches the URL to the appropriate `Route`
- Renders the corresponding component
- The `path="*"` catches all unmatched routes (404 handler)

### 3. Navigation Links

Navigation is implemented using `Link` components instead of `<a>` tags:

```jsx
import { Link } from 'react-router-dom'

<Link to="/posts">Posts</Link>
```

**Why use Link instead of <a>:**
- Prevents full page reload
- Updates URL via History API
- Maintains application state
- Faster navigation (SPA behavior)

## How Client-Side Navigation Works

### 1. Link Click Flow

When a user clicks a navigation link:

```
User clicks <Link to="/posts">
    ↓
React Router intercepts the click
    ↓
Prevents default browser navigation
    ↓
Updates URL using History API (window.history.pushState)
    ↓
Routes component detects URL change
    ↓
Renders matching component (Posts)
    ↓
Page content updates WITHOUT reload
```

### 2. Direct URL Navigation

When a user navigates directly to a URL (e.g., types `/posts` in browser):

```
Browser requests http://localhost:3000/posts
    ↓
Server responds with index.html (for all routes)
    ↓
React app loads
    ↓
BrowserRouter reads current URL (/posts)
    ↓
Routes component matches URL to route
    ↓
Renders Posts component
```

### 3. Browser Back/Forward

When a user clicks browser back/forward buttons:

```
User clicks back button
    ↓
Browser triggers 'popstate' event
    ↓
BrowserRouter listens to event
    ↓
Updates application to previous route
    ↓
Renders appropriate component
```

## Server Configuration

For client-side routing to work properly, the server must be configured to serve `index.html` for all routes.

### Development Server (Vite)

Vite automatically handles this during development. All routes serve `index.html`.

### Production - GitHub Pages

GitHub Pages doesn't support server-side configuration, so we use a workaround:

1. **404.html**: Copy of `index.html` placed in the public directory
2. When a route like `/posts` is accessed directly, GitHub Pages returns 404
3. The custom 404.html loads the React app
4. React Router reads the URL and renders the correct component

```
User navigates to /posts
    ↓
GitHub Pages: "404 Not Found"
    ↓
Returns 404.html (which is our React app)
    ↓
React app loads with URL /posts
    ↓
React Router renders Posts component
```

### Production - Other Servers

For other production servers, configure a catch-all route:

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

## Route Structure

Current routes in the application:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/posts` | Posts | Posts listing with API integration |
| `/about` | About | About page with tech stack info |
| `*` | NotFound | 404 page for invalid routes |

## Benefits of This Setup

### ✅ Performance
- No full page reloads
- Faster navigation
- Reduced server requests

### ✅ User Experience
- Instant page transitions
- Smooth navigation
- Maintains scroll position
- Browser back/forward work correctly

### ✅ State Management
- Application state persists across navigation
- No need to refetch global data
- Maintains user session

### ✅ SEO Considerations
While client-side routing can affect SEO, this setup:
- Uses clean URLs (no hash fragments)
- Supports direct linking to any page
- Can be enhanced with server-side rendering if needed

## Testing Client-Side Navigation

### Test 1: Link Navigation
1. Start dev server: `npm start`
2. Navigate to http://localhost:3000
3. Click "Posts" link in navigation
4. **Expected**: URL changes to `/posts` without page reload
5. Open browser DevTools Network tab
6. Click "About" link
7. **Expected**: No requests to server, only client-side render

### Test 2: Direct URL Access
1. Navigate directly to http://localhost:3000/posts
2. **Expected**: Posts page renders correctly
3. Try http://localhost:3000/about
4. **Expected**: About page renders correctly

### Test 3: Page Refresh
1. Navigate to http://localhost:3000/posts
2. Press F5 or Cmd+R to refresh
3. **Expected**: Posts page still renders (doesn't 404)

### Test 4: Browser History
1. Navigate: Home → Posts → About
2. Click browser back button twice
3. **Expected**: Returns to Home, URL updates correctly

### Test 5: 404 Handling
1. Navigate to http://localhost:3000/invalid-route
2. **Expected**: Custom 404 page renders (not browser 404)

## Common Issues and Solutions

### Issue: 404 on Direct URL Access in Production

**Problem**: Routes work when navigating within the app, but direct URLs return 404.

**Solution**: Configure server to serve `index.html` for all routes, or use the 404.html workaround for GitHub Pages.

### Issue: Full Page Reload on Link Click

**Problem**: Clicking links causes full page reload.

**Cause**: Using `<a>` tags instead of `<Link>` components.

**Solution**: Replace all `<a href="/path">` with `<Link to="/path">`

### Issue: BrowserRouter Not Found

**Problem**: Error: "BrowserRouter is not defined"

**Solution**: Make sure `react-router-dom` is installed:
```bash
npm install react-router-dom
```

### Issue: Routes Don't Update

**Problem**: URL changes but component doesn't update.

**Cause**: Routes not wrapped in `<Routes>` component or BrowserRouter not at root.

**Solution**: Ensure proper component hierarchy:
```
BrowserRouter (in main.jsx)
  └── App
        └── Routes
              └── Route components
```

## Migrating from Hash Router

If you previously used HashRouter (URLs like `/#/posts`), migrating to BrowserRouter:

1. Replace `<HashRouter>` with `<BrowserRouter>` in main.jsx
2. Update any `<a>` tags to `<Link>` components
3. Remove hash (#) from any hardcoded URLs
4. Configure server to handle client-side routing
5. Update deployment configuration (add 404.html for GitHub Pages)

## Advanced Topics

### Code Splitting

For larger apps, use lazy loading:

```jsx
import { lazy, Suspense } from 'react'

const Posts = lazy(() => import('./pages/Posts'))

<Route 
  path="/posts" 
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <Posts />
    </Suspense>
  } 
/>
```

### Protected Routes

For authentication:

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = // check auth
  return isAuthenticated ? children : <Navigate to="/login" />
}

<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

### URL Parameters

For dynamic routes:

```jsx
<Route path="/posts/:id" element={<PostDetail />} />

// In PostDetail component:
import { useParams } from 'react-router-dom'

function PostDetail() {
  const { id } = useParams()
  // Use id to fetch post
}
```

## Resources

- [React Router Documentation](https://reactrouter.com/)
- [BrowserRouter API](https://reactrouter.com/en/main/router-components/browser-router)
- [Routes and Route API](https://reactrouter.com/en/main/components/routes)
- [Link Component](https://reactrouter.com/en/main/components/link)

## Summary

This React Router setup provides:
- ✅ Client-side navigation without full page reloads
- ✅ Support for direct URL access and deep linking
- ✅ Browser history integration (back/forward buttons)
- ✅ Custom 404 handling
- ✅ GitHub Pages deployment support
- ✅ Clean URLs without hash fragments

All routing is handled client-side for optimal performance and user experience.
