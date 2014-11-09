var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

module.exports = function() {
    var events = new EventEmitter();

    var obj = hashChange(function(fragment) {
        events.emit("change", decodeURI(fragment));
    });

    return assign(obj, {
        on: events.on.bind(events),
        once: events.once.bind(events),
        removeListener: events.removeListener.bind(events)
    });
};

function hashChange(onChange) {
    var trigger = function() {
        onChange(getHash());
    }

    return {
        start: function() {
            window.addEventListener("hashchange", trigger, false);
            trigger();
        },
        stop: function() {
            window.removeEventListener("hashchange", trigger, false);
        },
        goTo: function goTo(hash) {
            window.location.hash = hash;
        }
    }
}

function getHash() {
    var match = window.location.hash.match(/^#(.*)$/);
    return match ? match[1] : '';
}

