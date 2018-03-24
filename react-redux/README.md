I tested this autocomplete in all major evergreen browsers, an iPhone SE, and an iPad Pro 10.5. Whenever this guide says Run `command` it means run it from this app's directory.

# Initial setup
* Install Node.js `8.9.0`
* Run `npm install` to install all necessary dependencies into node_modules. It may take a while.
* Run `npm run dev` to run a development server on `localhost:8080` that will render the app while reloading on file changes.
* https://code.visualstudio.com is my recommended code editor, but any editor with TypeScript support will work.

# Architecture
React is used to render components. TypeScript is used instead of JavaScript to achieve type safety. Tslint is used to keep code clean according to `tslint.json` and automatically fix some linting violations.

* `components` contains all the react presentational components. These components have no redux dependencies and can be easily reused across apps. Ideally most react components are of this category due the reusability. See https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0 for inspiration.
* `types` contains all TypeScript types.

# Testing
* Run `npm test` to run the full suite of tests. This command uses webpack to produce a node build for running the tap framework.
* Run `npm run test-watch` to run `npm test` on file change.

# Production builds
Run `npm run build` from the app directory to minify typescript and produce a single browser compatible JavaScript bundle and create the necessary index.html file.

# Potential Autocomplete UX Improvements
* Highlight the matching text in the dropdown option so the user can see why the results are suggested
* Allow the user to navigate the dropdown options using the arrow keys instead of having to click or tab.
* Add an X on the right side of the input to allow the user to clear all text.
* Make it ARIA accessible https://webkit.org/blog-files/aria1.0/combobox_with_live_region_status.html 
* Limit the amount of dropdown options depending on the size of the screen

# Potential testing improvements
* Add a single test for search.tsx for showing the selectedOption when selected

# Potential Build Tool Improvements 
* Use a library like `testem` to run tests on change across all browsers to check for browser specific regressions.
* Universal rendering could to decrease the initial page load time. A library like https://github.com/nfl/react-helmet can accomplish this.
* Docker might help manage deployment and development across multiple environments.
* Git Flow could be used if more people were to be working on this at the same time http://nvie.com/posts/a-successful-git-branching-model/