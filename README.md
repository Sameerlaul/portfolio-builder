# Portfolio

This project consists of a Programmers portfolio. It includes an individual's work experience and a generic personal information.

It uses following tools and concepts:

1. `Angular-CLI` - version 9.1.12.
2. `Bootstrap 4` - version 4.4.0.
3. `Font Awesome Icons` - version 5.13.0 - It is used for using font awesome icons directly in angular app.
4. `SCSS` - It uses custom theming by overriding bootstrap variables.
5. The website is designed to be `Responsive` using bootstrap flex. To check responsiveness of website, open dev-tools in browser and try en-larging the dev-tools by dragging it (Make sure it is attached to the browser window).

## How To Run App

1. Clone/download project - `https://github.com/Neptune-Ubicom/tr-assignment.git`

2. Go to downloaded folder & run `ng serve` for a dev server.

3. Open browser(Google Chrome preferred) to navigate to `http://localhost:4200/`.

## Code scaffolding

The project structure is as follows:

1. Entry/Bootstrap component: `AppComponent`.

2. The app consists of two main Components: `About` and `Work`. It also includes `Navbar & Footer`.

3. The above given components are subdivided as following:
   `About`: `Offer`, `Education`
   `Work`: `Icon Stack`, `Experience`, `Work Timeline`

## App Flow

1. When you hit the base url `http://localhost:4200/`, it will initially load `About` page along with `Navbar` and `Footer`.

2. When you click `Work` on the `Navbar` it loads `Work Component`.

3. Clicking brand icons in the `Footer` redirects to the base url - `http://localhost:4200/`. They are just for display purpose.
