$(document).ready(function() {

    // Initialize scroll It plugin for back to top link...
    $.scrollIt();

});


// Don't break on browsers without console.log();
try { console.assert(1); } catch(e) { console = { log: function() {}, assert: function() {} }; }