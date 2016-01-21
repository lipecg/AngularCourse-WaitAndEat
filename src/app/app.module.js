(function() {
    'use strict';
    
    angular
    .module('app', [
        // Angular modules.
        'ngRoute',
    
        // Thirt-party modules.
        'firebase',
        
        // Custom modules.
        'app.landing',
        'app.waitList'
    ]);
    
})();