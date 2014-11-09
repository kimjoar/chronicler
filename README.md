Chronicler
==========

A simple wrapper around `onhashchange` events that
works great together with
[routine](https://github.com/kjbekkelund/routine).

```javascript
var h = chronicler();
h.on("change", function(fragment) {
    console.log(fragment); //=> "some/url"
});

h.start();

window.location.hash = "some/url";
```

Installation
------------

```
npm install chronicler
```
