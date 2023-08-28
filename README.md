# Lazy Image Generator

A simple Next.js app that displays lazy-loaded images when they come into the viewport. The project is built with TypeScript and utilizes the Next.js framework along with Tailwind CSS for styling.

## Overview

This project uses Next.js, TypeScript, and Tailwind CSS to create a responsive and performant lazy image generator. By only loading images when they are about to be viewed, the app enhances user experience and optimizes performance.

## Installation

1. Clone this repository: `git clone https://github.com/your-username/lazy-image-generator.git`
2. Navigate to the project directory: `cd lazy-image-generator`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open your browser and navigate to: `http://localhost:3000`



## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-rendered applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
- [Tailwind CSS](https://v2.tailwindcss.com/docs): A utility-first CSS framework.
- [ESLint](https://eslint.org/): A pluggable and configurable linter tool for identifying and fixing problems in your code.

## Some configs
`tsconfig.ts`

“strict" : true

"noImplicitAny": true,

“noImplicitReturns”: true,


`.eslintrc.json`

“rules”:{

"@next/next/no-img-element":“off”,

“jsx-a11y/alt-text”:“off”

}

`tailwind.config.js`

content: [
"./app//*.{js,ts,jsx,tsx}",

"./pages//.{js,ts,jsx,tsx}",

"./components/**/.{js,ts,jsx,tsx}",

],

`global.css`

@tailwind base;

@tailwind components;

@tailwind utilities;

## How it Works

The app uses the [randomfox.ca](https://randomfox.ca) public API to display random fox images. Images are loaded lazily, improving app performance. A new image container is added to the HTML when the user taps a button. The image is then loaded and rendered only when it enters the viewport.

## Components

- `page.tsx`: The main component of the app, responsible for rendering the layout, heading, footer, and logic for fetching images from the API. This component calls the `LazyImage` component to render images lazily.

- `LazyImage` Component: Responsible for lazy loading images using a DOM observer. The component utilizes a gray background placeholder while images are loading. It allows for passing HTML image attributes as props.

## Customization

To customize the lazy image generator:

1. Modify the logic in the `page.tsx` file as needed.
2. Update the image source in the `addNewImage` event.
3. Modify image types and attributes in the `page.tsx` file.
4. Adjust the gray background placeholder in the `LazyImage` component.
5. Implement any additional changes you need.

## Styling

For styling, you can learn more about [Tailwind CSS](https://v2.tailwindcss.com/docs).

## License

This project is licensed under the [MIT License](LICENSE).
