# React Projects are SPA (Single Page Applications)

React is a single page application framework, because you have only [one page](/index.html) to render, and that page is the application.

As it's quite evident that there's no code in the page, the question arises, as to where the page is coming from.

![vite react template](https://github.com/user-attachments/assets/cdd2dc59-396a-4c8b-90d9-09d28a48eacb)

In react we do not create html elements, we create components, and then react will render the components to the page.

## Prequisites

Before going any further, here are browser extensions that'll help with debugging and inspecting the page.

- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [React Server Components](https://chromewebstore.google.com/detail/rsc-devtools/jcejahepddjnppkhomnidalpnnnemomn?hl=en)

## Continuing down the structure

The HTML has two important parts:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

The div tag with the id of `root` is where the application will be rendered.
This is using the classic way of manipulating the DOM with JavaScript.

The script tag is where the application is loaded.
It's a module, and it's loaded using the `type="module"` attribute.

### Main.jsx (Entry Point)

In this starter template, the `main.jsx` selects the root element, and renders an app component.

The `App.jsx` component has some initial logic, and then renders the `Vite + React` heading, as well as the rest of the page.

To better understand, we can clear the content of the div tag with the className of `App`.

Now enter something like `Hello World!` and it'll be the only thing that's rendered.

### Cleaning Up

To make things even easier, we can remove everything except for the App function and the export.

We can also delete the CSS files as well.
Well, in order to avoid any errors, we need to remove the import from the main file.

We can also get rid of the assets and public folder, as it's not needed.

## Summary

The react project features a single html file, that has a div tag with the id of `root`, and a script tag that loads the main.jsx file.

The main.jsx file is the entry point, and it's where the application is rendered.

It features an App component, which is the main component of the application.
