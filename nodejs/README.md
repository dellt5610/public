# nodejs
<h1>Setup</h1>
<p>Install NodeJS: https://nodejs.org and run "node -v" to verify if installation is OK or not</p>
<p>Install Git: https://git-scm.com</p>
<p>Create a new folder for your project</p>
<p>Create a new file server.js and save it into that project folder</p>
<p>Open terminal -> cd to that project folder and run: node server.js</p>
<p>Create <b>package.json</b> file: <b>npm init</b></p>
<p><i>
iMac:nodejs paris$ npm init<br/>
This utility will walk you through creating a package.json file.<br/>
It only covers the most common items, and tries to guess sensible defaults.<br/>

See `npm help json` for definitive documentation on these fields
and exactly what they do.<br/>

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.<br/>

Press ^C at any time to quit.<br/>
name: (nodejs)<br/>
version: (1.0.0)<br/>
description: nodejs demo<br/>
entry point: (demo_buffer.js) index.js<br/>
test command: echo \"Error: no test specified\" && exit 1<br/>
git repository: (https://github.com/leduynhac/nodejs.git)<br/>
keywords:<br/>
author: leduynhac<br/>
license: (ISC) MIT<br/>
About to write to /Users/paris/Desktop/workspace/@leduynhac/nodejs/package.json:<br/>

{<br/>
  "name": "nodejs",<br/>
  "version": "1.0.0",<br/>
  "description": "nodejs demo",<br/>
  "main": "index.js",<br/>
  "scripts": {<br/>
    "test": "echo \\\"Error: no test specified\\\" && exit 1"<br/>
  },<br/>
  "repository": {<br/>
    "type": "git",<br/>
    "url": "git+https://github.com/leduynhac/nodejs.git"<br/>
  },<br/>
  "author": "leduynhac",<br/>
  "license": "MIT",<br/>
  "bugs": {<br/>
    "url": "https://github.com/leduynhac/nodejs/issues"<br/>
  },<br/>
  "homepage": "https://github.com/leduynhac/nodejs#readme"<br/>
}<br/>


Is this ok? (yes) y  <br/>
</i></p>
<p>The node module lookup algorithm looks like this (from Node.js in Action):</p>
<img src="https://lh3.googleusercontent.com/t647e3CPariM1ZbOLuwby1jECE7FyQtS1MWGaZS2mshlc-twZSjL765yKb22ydKujNGcXiwXBHhSULTIwNJpt5cA1CVKdLSjT_KTvniXLm3mUDH41SxUlciaCPvqq13rpwfouLr-uZpqpaaYNd6s51xkECgYt01YvKUlkbAtDa-vl9KHdx7RBFU0lztdeGH6EtDbXzTp7u9_c7G8Om9Ch7EWUWQ1XSp6dc_2Y4o-qQbm2PRX4Q6fF-JJIW9v1NqqA-DtI52oEa-2WEqU2lr_wr6xOfzwXt82fAgXEd9Cw96eaWXTsHGiXOjjJ56IWyjdd4h7dfi8hYgZQ3XBtPp3G0RgZ-iWL8gKw5jVVkaMvQzodKPa7ldz1iyDma-qTaz0t8Lwi9o9LEkN50qJNsI7akeA5Ys178OyOSwQwkC7nl-FdwEcGR9yMMr7mI8T0yZZXJx5Sqx06V9MtdNMUlFrDagAvuDAQ1uelWlTH2JB_K8JWldeuy0harXqAl0rjpv910doEPXl6zOD-w5v99DNJavbBviJf7J3tzp1mmgG1q0ljqV_hh9YkSW1kRAwjOFKhkx6MVk-IOiaVnAoX0cifIbSlAcVWkzGUnVPfQ=w655-h686-no"/> 
<h2>Install Node Monitor for each File Save Action</h2>
<p>Install: <b>npm install nodemon -g</b></p>
<p>Check version: <b>nodemon -v</b></p>
<h2>Install Express</h2>
<p>
<b>References</b><br/>
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment<br/>
</p>
<p>
Install Express locally: <b>npm install express --save</b><br/>
[To be reviewed] Install Express globally: <b>npm install -g express</b><br/>
Setup NODE_MODULES environment variable:<br/>
[MacOS]: <b>NODE_MODULES=/usr/local/lib/node_modules/</b><br/>
(<i>Normally, the express module will be installed locally in the node_modules folder at the root directory of your project. But we can install it globally to be reused by all projects by setting the NODE_MODULES env var like above</i>)<br/>  
</p>
<h2>Express Application Generator</h2>
Install: <b>npm install -g express-generator</b><br/>
Create a demo application: <b>express demo-express-skeleton</b><br/>
<img src="https://lh3.googleusercontent.com/dx7diPCtD_WfKlod0QSGNOfQLOO1GTs1a4Kp-1aZvhKyVBvGVtX1v8j_IMsx67baYkMCvvZ94Tq2_VTYn0xp_shE9-ZMEnq4nRXsvG-ftGCdYkBAxdbkNRCeitrw-u3geNcVZEmbqc7YgoDZ3jCjSQha-Z2RSCy8DwnZhdz_dC3GgnMq6SrK6L3oIBGjCnPoGQHl7CBmbMH9YWfltMASPddchTrTwf8pHwd8ZSFkw77nZh02lAscmsLlhL1JcY30obiiIz-ujf5iNlqfB-g4bsn1vgQBd_FRWAgW1pBfYZ-kGggSSUksCoEiOujBsr2Imk9ToK9OSiQlPFiWbvMA8jqYQYrj6nj-Q0witNuDj17ycFVBrIy10pjl3YautxKKlcsPHqX4OMzj93vgr1U--82ogLaeX6rLZfXK3Eb66h3E0x3gn7TmrOP__LgJnk8kcYdC1Qz0EqaCl5Syn1yiPNHVQ-2sew6KOarkmCga68mjNKs1ZNcZ-BZYmh6ZpnQ6W82LoAftEOouY2jPy7vsXe9HERdwLVdcmkjSLK9wh9ReOq_todryoFJzztRMui598uTPI_OXSSqfQUl-UgRJQAHNZqL_vXGBrMZkoQ=w2176-h1534-no" />
<h1>YARN - A replacement of NodeJS</h1>
Run faster then NodeJS<br/>
Install YARN: <b>npm install yarn -g</b><br/>
Check version: <b>yarn -v</b><br/>
Create project: <b>yarn init -y</b><br/>
Install Express module: <b>yarn add express</b><br/>
<h1>Express Middleware</h1>
<h1>Express EJS & Reload modules</h1>
<p>Install EJS: <b>yarn add ejs</b></p>
<p>Install Reload: <b>yarn add reload --dev</b></p>
<p>(<i>yarn add reload --dev</i> will add this module into devDependencies part of the file package.json instead of dependencies part)</p>
<p>to live preview changes of the files js, ejs, we need to add scripts, ex: <b>nodemon demo_express_ejs.js -e ejs,js</b> into scripts part of package.json file and execute the command <b>yarn server</b> for running the added scripts.</p>
<p>In addition:</p>
<p>- in the js file, at the end of the file, you will add <b>reload(app)</b></p>
<p>- in the ejs file, at the end of the file, you will add <b>&lt;script src="reload/reload.js"&gt;&lt;/script&gt;</b></p>
<h1>Visual Studio Code - Extensions</h1>
<p><b>html live preview</b>: to help you see the dynamic changes on html file</p>
<p><b>html snippets</b></p>
<p><b>npm intellisenser</b></p>
<p><b>line-counter</b></p>
<h1>Creating an HTTPS Server with Node.js<h1/>
https://blog.cloudboost.io/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e
