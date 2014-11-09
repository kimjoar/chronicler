var test = require('tape');
var chronicler = require('./');

test('onhashchange', function(t) {
    window.location.hash = "1";

    var history = chronicler();

    history.once("change", function() {
        t.pass();
        window.location.hash = "2";
    });

    history.once("change", function() {
        t.pass();
        history.goTo("3");
    });

    history.once("change", function() {
        t.pass();
        t.end();
    });

    setTimeout(function() {
        history.start();
    }, 0);
});

