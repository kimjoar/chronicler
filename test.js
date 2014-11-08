var test = require('tape');
var chronicler = require('./');

test('onhashchange can be stopped', function(t) {
    var history = chronicler();
    history.start();

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

    window.location.hash = "1";
});

