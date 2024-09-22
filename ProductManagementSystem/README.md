# Product Management System

## Installing / Getting started
A quick introduction of the minimal setup you need to get the app running.

``` js
npm create vite@latest
```
This create the app. After that you need to write the project & package name (you can even skip this part).
<br>Then choose the required framework using which you intend to build this app (In this case, I have choosen React).
<br>Then choose the desired variant (Here you have 4 options: TypeScript, TypeScript with compiler, JavaScript & JavaScript with compiler). Here, I choosed JavaScript

You can even create react app through create-react-app but the execution speed of the program created through create-react-app (CRA) is slow compared to that of vite. CRA is used to create those app which is bit complex and large.
<br>To create React app through CRA, run the following command:

``` js
npx create-react-app "AppName"
```

Then run the following commands:
``` js
cd "folder_name"
```

``` js
npm install
```
**OR**
``` js
npm i
```
This code install the necessary packages required to build the project
``` js
npm run dev
```
It starts the development server. On following the link provided, you get to see the sample app.
<br>If you ever intend to change the command for runnig the code, you can do that by making some changes in the package.json file.

### Integrating tailwind css in vite
Since we are using tailwind css instead of vanilla css, so we need to install its packages as dev-dependencies.
``` js
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
The above code install packages for tailwind css and initializes it
<br>Then configure your 'tailwind.config.js' file
``` js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Then add '@tailwind' directives for each of Tailwind's layer in your './src/index.css' file
``` js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Then restart your build process
``` js
npm run dev
```

### Initial Configuration
Here are some of the dependencies and devDependencies packages needed to be installed for the project development

#### Setting up routes
First install the package:
``` js
npm i react-router-dom
```
This package allows to navigate from one route to the other wihtout page refreshing
<br>Then in './src/App.jsx' file, import BrowserRouter, Routes and Route using the following command
``` js
import {BrowserRouter, Routes, Route} from 'react-router-dom'
```
Then you can set routes in your jsx.
<br>We can change routes through anchor tag "<a href=""></a>" but this refreshes the page and re-render all the components. So, it is not viable for react. 
<br>Hence, we choose to use Link "<Link to=""></Link>" which is provided by "react-router-dom" package itself
<br>To use it first we need to install react-router-dom package as stated earlier and then import Link to the file, where we want to change route. 
<br>To import use the following command
``` js
import { Link } from "react-router-dom"
```


[comment]: #(``` js
npm i prop-types
```
This package allows you to set the required dataType for the props which is passed as argument. If the argument passed is not of the type specified then, it throws console error)

[comment]: # (## Developing
In order to develop the project, follow these steps)

[comment]: # (### Building
To build the project for deployment, follow these steps)

[comment]: # (### Deploying/Publishing
To deploy the project to a server, follow these steps)

[comment]: # (## Features)

[comment]: # (## Contributing)

## Links
+ <a href = "https://github.com/Roshan9807950330/DP_BasicReact">Project homepage</a>
+ Other Projects:
  - <a href = "https://github.com/Roshan9807950330/Text-Utility-App">Text Utility App</a>
  - <a href = "https://github.com/Roshan9807950330/News-App">News App</a>
+ <a href = "https://github.com/Roshan9807950330">Profile</a>
  
[comment]: # (## Licensing)
