# Sri Lakshmi Multi Shop — Website

A complete, multi-page e-commerce website. Every page is a separate `.html` file — clicking any link navigates to a new page (not a single-page app).

## How to Run

**Option A — Open directly:** Double-click `index.html`. Most things work, but the cart/admin use `localStorage`, which some browsers restrict on `file://` URLs.

**Option B — Local server (recommended):**
```
cd srilakshmi
python3 -m http.server 8000
```
Then open `http://localhost:8000/index.html`.

**Option C — Any static host** (Netlify, Vercel, GitHub Pages, your own hosting): upload the whole `srilakshmi` folder as-is. No build step needed.

## Site Map (Customer-Facing)

| Page | File |
|---|---|
| Home | `index.html` |
| Products (all, with filters) | `products.html` |
| Product Detail (variants, colours, reviews) | `product.html?id=1` |
| About Us | `about.html` |
| Cart | `cart.html` |

Clicking the logo always returns to `index.html`. The "Products" nav link has a dropdown to jump straight into a category.

## Admin Panel

The brief asked that typing **`/admin`** in the URL opens the admin dashboard, without a login screen. Since this is a static folder (no server routing), the equivalent here is the **`/admin/`** folder:

```
http://localhost:8000/admin/
```
(or `admin/index.html`)

| Page | File |
|---|---|
| Dashboard (stats, low-stock alerts) | `admin/index.html` |
| Manage Products (edit/delete, search) | `admin/products.html` |
| Add / Edit Product | `admin/add-product.html` |
| Orders (sample data) | `admin/orders.html` |
| Customers (sample data) | `admin/customers.html` |

No login is required — matches the "don't ask for role" requirement. If you later add a real backend, this is the place to add an auth check.

## Data & Persistence

- **Products** are defined in `js/app.js` (`PRODUCTS` array) and cached into the browser's `localStorage` once edited via the Admin panel (`Store` object). To reset everything back to the original 12 products, open the browser console on any page and run:
  ```js
  localStorage.removeItem('slm_products')
  ```
- **Cart** is also stored in `localStorage` (`slm_cart`) so it persists across pages and reloads, per-browser.
- **Reviews** added on a product page are stored in-memory for that page load only (they reset on refresh). Wire these into the same `Store`/backend if you want them to persist.

## Connecting a Real Backend

Everything currently runs client-side. To go live with real orders/customers:
1. Replace the `Store` and `Cart` objects in `js/app.js` with calls to your API/database (e.g. Supabase, Firebase, or a custom Node/PHP backend).
2. Replace the sample tables in `admin/orders.html` and `admin/customers.html` with live queries.
3. Add authentication in front of the `/admin/` folder (e.g. HTTP basic auth at the server/hosting level, or a login page that gates access).

## Customizing

- **Colours/fonts/spacing:** all in `css/style.css` (CSS variables at the top — `--crimson`, `--gold`, fonts, etc.)
- **Shop info (address, phone, email, hours):** appears in `js/app.js` (`renderFooter()`) and `about.html` — update both.
- **Product images:** currently illustrated with generated SVG icons (`productSVG()` in `js/app.js`) so the site works with zero image assets. To use real photos, replace the `<div class="product-card-img">...productSVG(...)</div>` blocks with `<img src="...">` tags.
