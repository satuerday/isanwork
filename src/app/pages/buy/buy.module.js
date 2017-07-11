(function () {
  'use strict';

  angular.module('BlurAdmin.pages.buy', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('buy', {
         url: '/buy',
         templateUrl: 'app/pages/buy/buy.html',
         title: 'การสั่งขาย',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
