$(document).ready(function() {

    // Initialize scrollIt plugin for back to top link...
    $.scrollIt();

    // Initialize tool tips
    $('[data-toggle="tooltip"]').tooltip();

});

// Don't break on browsers without console.log();
try { console.assert(1); } catch(e) { console = { log: function() {}, assert: function() {} }; }