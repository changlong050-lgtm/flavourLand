# WEB103 Project 1 - FlavourLand

Submitted by: **Liam Wu**

About this web app: **FlavourLand is an interactive web application that showcases international cuisine from around the world. Users can browse a collection of dishes from different countries, view detailed information about each dish including recipes and preparation methods, and explore culinary traditions from various cultures.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
  - Displays 10 food dishes with name, country, description, and image
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as `localhost:3000/foods/1` and `localhost:3000/foods/2`**
  - Shows complete recipe, description, country of origin, and food image on detail page
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists
  - Food items are displayed as cards with background images, styled with Picocss

The following **additional** features are implemented:

- [x] Responsive card-based layout for better user experience
- [x] Background image styling with CSS cover and center positioning
- [x] Navigation header with logo and home button
- [x] Dynamic URL routing for individual food detail pages
- [x] Organized project structure with separate client and server folders
- [x] Comprehensive recipe instructions for each dish

## Video Walkthrough

**Note: please be sure to show the unique URL for each detailed view in your video walkthrough.**

Here's a walkthrough of implemented required features:

![](project1_demo.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  **LICECap**
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

**Challenges encountered:**
- **Setting up Vite Proxy for API Requests**
  - Initially struggled to understand how the frontend and backend communicate during development
  - Learned that the proxy configuration in `vite.config.js` is essential for avoiding CORS issues
  - Key insight: The `target` in the proxy config only includes the base URL (protocol + host + port), and the request path is automatically appended
  - Example: `'/gifts': { target: 'http://localhost:3001' }` forwards `/gifts` requests to `http://localhost:3001/gifts`
  
- Managing separate front-end and back-end file structures with proper routing
- Implementing dynamic URL parameters for individual food detail pages
- Styling responsive cards with background images using Picocss

**Project Structure:**
- `client/` - Front-end files (HTML, CSS, JavaScript)
- `server/` - Back-end files (Express.js, API routes)
- `public/` - Static assets (images, stylesheets)
- `scripts/` - JavaScript files for DOM manipulation

## License

Copyright [2026] [Liam Wu]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
