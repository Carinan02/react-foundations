Install the latest Vite version Globally 
# npm install -g vite@latest

Also install a related package
# npm install -g create-vite@latest

Verify list of packages installed globally
# npm list -g

Create a react application
# npm create vite@latest my-application

Inside the application folder, install packages
# npm install

Run the application in development mode
# npm run dev

Build the application for production
# npm run build

React Router to support routing in react application
# npm install react-router-dom@latest

If using typescript also need 
# npm install @type/react-router-dom@latest  -d

Optional: 
Install the Node “serve” server:
# npm install -g serve 

Serve the production build of the app

# serve -s dist -l 8080
-s option - location of the app (the dist folder)
-s option - port to listen default is 8080

Foldering when importing
'./App.tsx'     // relative: same folder
'../App.tsx'    // relative: parent folder
'../../App.tsx' // relative: two folders up
'react'         // package/module
'@/App.tsx'     // alias, if configured

