Chronicler
==========

A simple wrapper around `onhashchange` events that
works great together with
[routine](https://github.com/kjbekkelund/routine).

```javascript
var history = chronicler();
history.start();

history.on("change", function(fragment) {
    console.log(fragment); //=> "some/url"
});

window.location.hash = "some/url";
```

Installation
------------

```
npm install chronicler
```
