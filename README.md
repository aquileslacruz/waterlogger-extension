## Description

This is a Chrome Extension for a water drinking logging app.

## Installation
```
cd popup
yarn install
cd ../admin
yarn install
cd ..
./build.sh
```
We need to install the `node_modules` for each of the react apps that will be used. And then run the script to build the chrome extension.

After that on the `Manage Extensions` page on Development mode, you can load the generated `build` folder.

## Dependencies

This project depends on having a server working on `localhost:8000`