Chronicler
==========

A simple wrapper around `onhashchange` events that
works great together with
[routine](https://github.com/kjbekkelund/routine).

```javascript
var hash = chronicler();
hash.on("change", function(fragment) {
    console.log(fragment); //=> "some/url"
});

hash.start();

window.location.hash = "some/url";
```

Installation
------------

```
npm install chronicler
```

Or download from `dist` folder.
