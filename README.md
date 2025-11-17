<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## React Router Setup

This project includes a React SPA with properly configured React Router v6 for client-side navigation.

### Frontend Stack

- **React 18.x** - UI library
- **React Router DOM v6.x** - Client-side routing with BrowserRouter
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling framework

### Key Features

- ✅ **Client-side navigation** - Links navigate without full page reloads
- ✅ **React Router v6 syntax** - Uses `<Routes>` and `element` prop
- ✅ **BrowserRouter** - Clean URLs without hash symbols
- ✅ **404 catch-all route** - Handles unmatched paths gracefully
- ✅ **Laravel SPA fallback** - Deep links and page refreshes work correctly

### Development

```bash
# Install dependencies
npm install

# Run development server (hot reload)
npm run dev

# Build for production
npm run build
```

### SPA Routing Configuration

The Laravel backend includes a catch-all route in `routes/web.php` that serves the React app for any unmatched path:

```php
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
```

This ensures that:
- Direct navigation to client-side routes (e.g., `/about`) works correctly
- Page refreshes on any route load the SPA properly
- React Router handles all routing on the client side

**To disable SPA routing**: Remove or comment out the catch-all route in `routes/web.php` and define specific Laravel routes instead.

### Project Structure

```
resources/
├── css/
│   └── app.css              # Tailwind CSS and global styles
├── js/
│   ├── app.jsx              # React entry point with BrowserRouter
│   ├── App.jsx              # Main app component with Routes
│   └── pages/               # Page components
│       ├── Home.jsx
│       ├── About.jsx
│       └── NotFound.jsx     # 404 page
├── views/
│   └── app.blade.php        # Laravel blade view serving the React app
routes/
└── web.php                  # Laravel routes with SPA fallback
```

### Testing Client-Side Navigation

1. Start the dev server: `npm run dev`
2. Visit the app and click navigation links - no page reload should occur
3. Navigate to `/about` directly in the browser - should load correctly
4. Refresh the page on `/about` - should stay on the same route

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
