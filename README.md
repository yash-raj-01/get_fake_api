# get-fake-api 🚀

> Zero-dependency, 100% offline mock data generator for developers. Build, prototype, and test backend REST routes (GET, POST, PATCH, PUT, DELETE) and frontend UI applications without rate limits, API keys, or network latency.

[![npm version](https://img.shields.io/badge/npm-v1.0.0-blue.svg)](https://npmjs.com/package/get-fake-api)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)]()
[![offline ready](https://img.shields.io/badge/offline-ready-orange.svg)]()

---

## 📌 Table of Contents

- [Why get-fake-api?](#-why-get-fake-api)
- [Installation](#-installation)
- [Importing](#-importing)
- [Where Can It Be Used?](#-where-can-it-be-used)
- [Building REST API Routes (Express Example)](#-building-rest-api-routes-express-example)
  - [GET Routes (Fetch & Filter)](#1-get-routes-fetching--filtering-data)
  - [POST Routes (Create Resource & Login)](#2-post-routes-simulating-resource-creation--auth)
  - [PATCH Routes (Partial Update)](#3-patch-routes-simulating-partial-updates)
  - [PUT Routes (Full Update)](#4-put-routes-simulating-complete-replacement)
  - [DELETE Routes (Remove Resource)](#5-delete-routes-simulating-deletion)
- [Next.js App Router Example](#-nextjs-app-router-example)
- [Frontend Prototyping (React / Loading Spinners)](#-frontend-prototyping-react--loading-spinners)
- [Testing & Mocking (Jest / Vitest / MSW)](#-testing--mocking-jest--vitest--msw)
- [API Reference & Query Filters](#-api-reference--query-filters)
  - [👤 Users](#-users)
  - [🛍️ Products](#️-products)
  - [📝 Posts & Comments](#-posts--comments)
  - [💳 Orders & Carts](#-orders--carts)
  - [🔑 Authentication & JWT](#-authentication--jwt)
  - [📦 Direct Data Access](#-direct-data-access)
- [Simulated Async Delays (`fakeApi`)](#-simulated-async-delays-fakeapi)
- [Contributing & Testing](#-contributing--testing)
- [License](#-license)

---

## 💡 Why get-fake-api?

External mock APIs like JSONPlaceholder or DummyJSON are great, but:
- ❌ They fail when you are offline, on a flight, or have spotty internet.
- ❌ They hit rate limits when running large automated test suites.
- ❌ Network latency can slow down your rapid local development.
- ❌ You cannot run them synchronously when seeding unit tests.

**`get-fake-api` solves this:**
- 🔌 **100% Offline & Zero Dependencies:** Runs entirely in memory in Node.js or the browser.
- ⚡ **Synchronous & Asynchronous:** Generate data instantly or simulate real network latency with `fakeApi`.
- 🛠️ **Dynamic & Extensible:** Request 5, 50, or 500 items on demand with dynamic generation.
- 🎯 **Realistic Schemas:** Complete with avatars, nested addresses, tags, e-commerce pricing, order statuses, and mock JWT tokens.

---

## 📥 Installation

```bash
# npm
npm install get-fake-api

# yarn
yarn add get-fake-api

# pnpm
pnpm add get-fake-api

# bun
bun add get-fake-api
```

---

## 📦 Importing

### CommonJS (Node.js)
```javascript
const {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  getPosts,
  getComments,
  getOrders,
  getAuthToken,
  getAuthSession,
  fakeApi
} = require("get-fake-api");
```

### ES Modules / TypeScript
```javascript
import {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  getPosts,
  getComments,
  getOrders,
  getAuthToken,
  getAuthSession,
  fakeApi
} from "get-fake-api";
```

---

## 🎯 Where Can It Be Used?

| Environment | Use Case | Example |
| :--- | :--- | :--- |
| **Backend REST APIs** | Mock endpoints before databases are configured | Express, Fastify, Koa, NestJS, Hono |
| **Full-Stack Frameworks** | Serverless route handlers & API prototyping | Next.js (`app/api`), Remix, Nuxt, SvelteKit |
| **Frontend UI Prototyping** | Populate tables, dashboards, cards, and carts | React, Vue, Angular, Svelte, Tailwind UI |
| **Async & Loading UI** | Test skeleton loaders, spinners, and latency | `fakeApi.getUsers({ delay: 500 })` |
| **Unit & Integration Tests** | Deterministic mock fixtures with zero network calls | Jest, Vitest, Cypress, Playwright |
| **Mock Service Worker** | Browser and node request interception | MSW handlers |
| **Mobile Prototyping** | Offline feed and user profile simulation | React Native, Flutter, Expo |

---

## 🚀 Building REST API Routes (Express Example)

Here is how you can use `get-fake-api` to build a complete mock REST API handling **GET**, **POST**, **PATCH**, **PUT**, and **DELETE** requests in Express:

```javascript
const express = require("express");
const {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  getPosts,
  getOrders,
  getAuthSession
} = require("get-fake-api");

const app = express();
app.use(express.json());
```

### 1. GET Routes (Fetching & Filtering Data)

Use sync methods to return mock items, filter by query parameters, or find items by ID:

```javascript
// GET /api/users - List users with optional search & filters
app.get("/api/users", (req, res) => {
  const { count, gender, role, q } = req.query;

  const users = getUsers({
    count: count ? Number(count) : 10,
    gender,
    role,
    q
  });

  res.json({ success: true, count: users.length, data: users });
});

// GET /api/users/:id - Get single user by ID
app.get("/api/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  res.json({ success: true, data: user });
});

// GET /api/products - Search products with price range & sorting
app.get("/api/products", (req, res) => {
  const { category, minPrice, maxPrice, sortField, sortOrder, q } = req.query;

  const products = getProducts({
    category,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    sortField: sortField || "price",
    sortOrder: sortOrder || "asc",
    q
  });

  res.json({ success: true, count: products.length, data: products });
});
```

### 2. POST Routes (Simulating Resource Creation & Auth)

Simulate creating new resources by combining the client's request payload with realistic default schemas and assigning a generated ID:

```javascript
// POST /api/users - Simulate creating a new user
app.post("/api/users", (req, res) => {
  const { firstName, lastName, email, role } = req.body;

  if (!firstName || !email) {
    return res.status(400).json({ success: false, message: "First name and email are required" });
  }

  // Create a realistic mock record merging payload with fallback defaults
  const newUser = {
    id: Date.now(),
    firstName,
    lastName: lastName || "Doe",
    fullName: `${firstName} ${lastName || "Doe"}`,
    username: email.split("@")[0],
    email,
    role: role || "user",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    createdAt: new Date().toISOString()
  };

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

// POST /api/auth/login - Simulate user authentication and JWT session
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  // Generate authentic mock JWT token and session
  const session = getAuthSession({ email, role: "admin" });

  res.json({
    success: true,
    message: "Login successful",
    session
  });
});
```

### 3. PATCH Routes (Simulating Partial Updates)

Use `getUserById` or `getProductById` to fetch the baseline record, merge incoming changes, and return the updated entity:

```javascript
// PATCH /api/users/:id - Partial update (e.g. changing email or role)
app.patch("/api/users/:id", (req, res) => {
  const existingUser = getUserById(req.params.id);

  if (!existingUser) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Merge existing entity with updated fields from req.body
  const updatedUser = {
    ...existingUser,
    ...req.body,
    id: existingUser.id, // preserve original ID
    updatedAt: new Date().toISOString()
  };

  res.json({
    success: true,
    message: "User updated successfully (PATCH)",
    data: updatedUser
  });
});
```

### 4. PUT Routes (Simulating Complete Replacement)

Replace a resource while preserving schema integrity:

```javascript
// PUT /api/products/:id - Complete replacement of product
app.put("/api/products/:id", (req, res) => {
  const existingProduct = getProductById(req.params.id);

  if (!existingProduct) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  const replacedProduct = {
    id: existingProduct.id,
    title: req.body.title || "Untitled Product",
    price: req.body.price || 0,
    category: req.body.category || "general",
    description: req.body.description || "",
    stock: req.body.stock ?? 10,
    updatedAt: new Date().toISOString()
  };

  res.json({
    success: true,
    message: "Product replaced successfully (PUT)",
    data: replacedProduct
  });
});
```

### 5. DELETE Routes (Simulating Deletion)

Validate existence and return standard REST deletion responses:

```javascript
// DELETE /api/posts/:id - Delete a post
app.delete("/api/posts/:id", (req, res) => {
  const postId = Number(req.params.id);

  res.json({
    success: true,
    message: `Post ${postId} deleted successfully`,
    deletedId: postId
  });
});
```

---

## ⚡ Next.js App Router Example

In Next.js (`app/api/products/route.js` or `.ts`):

```javascript
import { NextResponse } from "next/server";
import { getProducts } from "get-fake-api";

// GET /api/products
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const count = Number(searchParams.get("count")) || 8;

  const products = getProducts({ category, count });
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(request) {
  const body = await request.json();

  const newProduct = {
    id: Date.now(),
    ...body,
    createdAt: new Date().toISOString()
  };

  return NextResponse.json(newProduct, { status: 201 });
}
```

---

## 🎨 Frontend Prototyping (React / Loading Spinners)

Use `fakeApi` to simulate real-world async network delays, enabling you to test loading spinners, skeleton UI screens, and state management without spinning up a backend server:

```jsx
import React, { useState, useEffect } from "react";
import { fakeApi } from "get-fake-api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      // Simulates a 400ms network roundtrip
      const data = await fakeApi.getUsers({ count: 6, delay: 400 });
      setUsers(data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <div className="spinner">Loading users...</div>;

  return (
    <div className="user-grid">
      {users.map(u => (
        <div key={u.id} className="card">
          <img src={u.avatar} alt={u.fullName} />
          <h3>{u.fullName}</h3>
          <p>{u.company.title} at {u.company.name}</p>
          <span>{u.email}</span>
        </div>
      ))}
    </div>
  );
}
```

---

## 🧪 Testing & Mocking (Jest / Vitest / MSW)

### Jest / Vitest Mocking
```javascript
import { getUsers, getAuthToken } from "get-fake-api";

test("should authenticate and process 5 users", () => {
  const users = getUsers(5);
  expect(users).toHaveLength(5);
  expect(users[0]).toHaveProperty("email");

  const token = getAuthToken({ id: users[0].id });
  expect(token.split(".")).toHaveLength(3); // Valid JWT structure
});
```

### Mock Service Worker (MSW)
```javascript
import { http, HttpResponse } from "msw";
import { getProducts, getProductById } from "get-fake-api";

export const handlers = [
  http.get("https://api.example.com/products", () => {
    return HttpResponse.json(getProducts(12));
  }),
  http.get("https://api.example.com/products/:id", ({ params }) => {
    const product = getProductById(params.id);
    return HttpResponse.json(product);
  })
];
```

---

## 📖 API Reference & Query Filters

### 👤 Users

```javascript
const users = getUsers({ count: 10, gender: "female", role: "developer", q: "Sarah" });
const user = getUserById(1);
```

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` / `limit` | `number` | `10` | Total users to return. Generates dynamically if greater than base set. |
| `gender` | `string` | - | Filter by `"male"` or `"female"`. |
| `role` | `string` | - | Filter by role (e.g. `"developer"`, `"manager"`, `"designer"`). |
| `company` | `string` | - | Filter by company name substring. |
| `q` | `string` | - | Full-text search across `fullName`, `email`, and `username`. |

**Sample User Object:**
```json
{
  "id": 1,
  "firstName": "Sarah",
  "lastName": "Connor",
  "fullName": "Sarah Connor",
  "username": "sconnor",
  "email": "sarah.connor@example.com",
  "gender": "female",
  "age": 29,
  "phone": "+1-202-555-0143",
  "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  "role": "developer",
  "company": {
    "name": "Cyberdyne Systems",
    "title": "Senior Full Stack Engineer",
    "department": "Engineering"
  },
  "address": {
    "street": "742 Evergreen Terrace",
    "city": "Springfield",
    "state": "Oregon",
    "zipCode": "97477",
    "country": "United States"
  },
  "website": "https://sarahconnor.dev"
}
```

---

### 🛍️ Products

```javascript
const items = getProducts({
  category: "smartphones",
  minPrice: 200,
  maxPrice: 1000,
  sortField: "price",
  sortOrder: "desc"
});
```

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` / `limit` | `number` | `10` | Number of products to return. |
| `category` | `string` | - | Categories: `electronics`, `smartphones`, `laptops`, `groceries`, `home-decoration`, `fashion`, `books`, `skincare`. |
| `brand` | `string` | - | Filter by brand (e.g. `"Apple"`, `"Samsung"`). |
| `minPrice` | `number` | - | Minimum price filter. |
| `maxPrice` | `number` | - | Maximum price filter. |
| `rating` | `number` | - | Minimum rating filter (e.g. `4.5`). |
| `isAvailable` | `boolean` | - | Filter by stock availability (`stock > 0`). |
| `sortField` | `string` | - | Field to sort by: `"price"`, `"rating"`, `"stock"`, `"discountPercentage"`. |
| `sortOrder` | `string` | `"asc"` | `"asc"` or `"desc"`. |
| `q` | `string` | - | Search keyword in title, description, or brand. |

---

### 📝 Posts & Comments

```javascript
const posts = getPosts({ count: 5, tag: "tech" });
const singlePost = getPostById(1);
const comments = getComments({ postId: 1 });
const postComments = getCommentsByPostId(1);
```

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` | `number` | `10` (posts) / `5` (comments) | Quantity to return. |
| `userId` | `number` | - | Filter posts by author's user ID. |
| `tag` | `string` | - | Filter by tag (e.g. `"javascript"`, `"react"`, `"productivity"`). |
| `q` | `string` | - | Search post title and body. |
| `postId` | `number` | - | Filter comments for a specific post. |

---

### 💳 Orders & Carts

```javascript
const orders = getOrders({ status: "shipped", paymentMethod: "credit_card" });
const order = getOrderById(1);
```

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `count` | `number` | `4` | Number of orders to return. |
| `status` | `string` | - | `"pending"`, `"processing"`, `"shipped"`, `"delivered"`, `"cancelled"`. |
| `userId` | `number` | - | Orders placed by a specific user ID. |
| `paymentMethod` | `string` | - | `"credit_card"`, `"paypal"`, `"apple_pay"`, `"stripe"`. |

Includes `items` array, `totalAmount`, `trackingNumber`, and `createdAt`.

---

### 🔑 Authentication & JWT

Generate mock JWT tokens and user session payloads for route protection, testing authentication guards, or mocking login endpoints.

```javascript
// Generate base64url encoded mock JWT string
const token = getAuthToken({ id: 42, role: "admin" });

// Generate full authentication response object
const session = getAuthSession();
```

**Session Output:**
```json
{
  "user": {
    "id": 1,
    "fullName": "Sarah Connor",
    "email": "sarah.connor@example.com",
    "role": "developer"
  },
  "tokenType": "Bearer",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "mock_refresh_9b8x21729000000",
  "expiresIn": 3600,
  "issuedAt": "2026-10-27T04:00:00.000Z"
}
```

---

### 📦 Direct Data Access

Access the underlying immutable base mock datasets directly:

```javascript
const { data } = require("get-fake-api");

console.log(data.users);     // Base users array
console.log(data.products);  // Base products array
console.log(data.posts);     // Base posts array
console.log(data.comments);  // Base comments array
console.log(data.orders);    // Base orders array
```

---

## ⏳ Simulated Async Delays (`fakeApi`)

When developing frontends, you often need to test loading states, skeleton screens, and button disable spinners. `fakeApi` wraps synchronous data in a `Promise` with a configurable delay (in milliseconds):

```javascript
const { fakeApi } = require("get-fake-api");

// Simulate a 350ms network delay
const users = await fakeApi.getUsers({ count: 5, delay: 350 });

// Simulate fetching a product by ID with 200ms delay
const product = await fakeApi.getProductById(3, 200);

// Simulate a login call
const session = await fakeApi.login({ email: "user@example.com" }, 500);
```

Available `fakeApi` methods:
- `fakeApi.getUsers(options)`
- `fakeApi.getUserById(id, delay)`
- `fakeApi.getProducts(options)`
- `fakeApi.getProductById(id, delay)`
- `fakeApi.getPosts(options)`
- `fakeApi.getComments(options)`
- `fakeApi.getOrders(options)`
- `fakeApi.login(credentials, delay)`

---

## 🛠️ Contributing & Testing

Run the test suite:
```bash
npm test
```

Publishing to npm:
```bash
npm publish --access public
```

---

## 📄 License

MIT © [yashraj](https://github.com/yashraj)
