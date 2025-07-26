## ~ benny-creates

A simplistic block generate / template engine tailored for 
[benny](https://www.playbenny.com/).

The goal is to simplify block creation and hopefully have more people
creating blocks ( :

happy patching!

### Installing / Running

```bash
npm install
npm run create
```

Templates are available on `/templates/{type}` and newly created blocks will
endup on `blocks/{type}/{name}`

### notes

We could potentially benefit from having a template language, for  instance if
we want to have some templates with conditionals and replace strings inside of 
text files when creating new blocks.

 - [mustache](https://mustache.github.io/mustache.5.html)
 - [handlebars](https://github.com/handlebars-lang/handlebars.js/)

See also:
 - [plop](https://github.com/plopjs/plop)
 - [hygen](https://github.com/jondot/hygen)