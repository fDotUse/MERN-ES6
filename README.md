<h1 align='center'>MERN-ES6 Boilerplate</h1>

# Getting Started
## Dependencies
Global tools needed to run this app:
* `node`, `npm`, `mongod`, `gulp` 

## Installing
* `git clone`
* `npm install`

## Running the app
* Make sure you have a mongod server running : `sudo mongod`

## Developer mode HRM + eval build  
* `npm run dev`

## Build for deployment
* `npm run build`

## Test production locally
* `npm run prod`

## Generating Components

Following a consistent directory structure between components offers us the certainty of predictability. We can take advantage of this certainty by creating a gulp task to automate the "instantiation" of our components. The component boilerplate task generates this:
```
⋅⋅⋅⋅⋅⋅name/
⋅⋅⋅⋅⋅⋅⋅⋅index.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅name.js
⋅⋅⋅⋅⋅⋅⋅⋅name.css // scoped to affect only its own template
```
You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `gulp component --name componentName`.

The parameter following the `--name` flag is the name of the component to be created. Ensure that it is unique or it will overwrite the preexisting identically-named component.

The component will be created, by default, inside `_client/components/`. To change this, apply the `--parent` flag, followed by a path relative to `_client/`.

For example, running `gulp component --name signup --parent ./components/auth` will create a `signup` component at `_client/components/auth/signup`.  

Running `gulp component --name footer --parent ../common/components` creates a `footer` component at `_client/common/components/footer`.  

Because the argument to `--name` applies to the folder name **and** the actual component name, make sure to camelcase the component names.

## Known Bugs
* Hot load is partially working (rebuilding the bundle but not refreshing the browser)
* Production build uglifying plugin is not working
