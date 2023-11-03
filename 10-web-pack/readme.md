# Application Bundling

## Steps for creating a product build
1. minify the JS files
2. uglify the JS files
3. bundle the JS files
4. version the bundled JS file
5. minify the css files
6. bundle the css files
7. version the bundled css file
8. update the reference of the generated js & css file in the inde.html
9. create a build

## To use the example
- To create a production build
    > npm run build
- To start the development server
    > npm start

## ES6 modules
- Everything defined in a file is consider PRIVATE by default
- Any public entity has to be explictly "exported"
- To use any public entity from another file, they have to explicity imported