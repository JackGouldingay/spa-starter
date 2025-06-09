# How to use react inside jekyll and just the docs theme

To use inside of jekyll with just the docs we need to setup a few things.

## Steps

First of all we need to setup a new layout for reusablity, this can also be done in the main html file.

### React Layout

inside ~/_layouts we need to create a react.html layout with the following content.

```html
---
layout: home
---

<div id="root"></div><!-- We have added this to be able to have the react app displayed to the right of just the docs theme. -->
<link rel="stylesheet" href="{{page.css}}><!-- page.css gets passed in with the front matter -->
<script type="module" src="{{page.source}}"></script> <!-- page.source also gets sent in via front matter-->
```

### React index file

At top level of the jekyll project we need to create a react.html or what ever you want the URL to be.

Note the endpoint that you hit in the URL needs to match the react router basename.

Now to get this to show in the jekyll just the docs theme it is simple as we have created the layout earlier, see code below on what your html file should look like.

```html
---
layout: react
title: React
source: /assets/react-app/starter.es.js
css: /assets/react-app/starter.css
---
```

## Final comments

You may want to update your `_config.yml` to exclude the react app if you have embedded it inside the jekyll project. Otherwise jekyll will restart with every change you make to the react app instead of once its been built and added to the `~../assets/react-app` folder.

I have also added a scripts folder to be able to run the creation of the `../~/assets/react-app` and the copying of the build files over to the jekyll build. This can be ran by using the `npm run deploy` command inside the react app. This may need reconsidering for CI CD pipelines.
