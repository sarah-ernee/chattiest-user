# Chattiest User Frontend

The frontend is mainly built using NextJS, React Bootstrap components and Tailwind CSS. Given the single-page nature of this application, I have decided to just call the components in `index.js` with lifted states. 

This is so that the API calls can happen based on user action in `UploadCard.js` but data will show on `ResultCard.js`.

## Navigating the Repo

Source code is stored in `src` folder which contains the three core folders:
1. components - where I define my components
2. pages - where I connect backend API to frontend with Axios and where `index.js` page is stored
3. styles - where I define global CSS and initialize Tailwind CSS for component styling

To serve the localhost, run `npm i` and then `npm run dev`. 