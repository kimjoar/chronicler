var EventEmitter = require('events').EventEmitter;

module.exports = function() {
    return pushState();
};

function pushState() {
    var events = new EventEmitter();

    function change() {
        goTo(getHash());
    }

    function goTo(hash) {
        events.emit("change", decodeURI(hash));
    }

    return {
        start: function() {
            window.addEventListener("hashchange", change, false);
            change();
        },
        stop: function() {
            window.removeEventListener("hashchange", change, false);
        },
        goTo: goTo,
        on: events.on.bind(events),
        once: events.once.bind(events),
        removeListener: events.removeListener.bind(events)
    }
}

function getHash() {
    var match = window.location.href.match(/#(.*)$/);
    return match ? match[1] : '';
}

