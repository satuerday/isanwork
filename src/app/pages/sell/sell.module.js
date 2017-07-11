(function () {
  'use strict';

  angular.module('BlurAdmin.pages.sell', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('sell', {
         url: '/sell',
         templateUrl: 'app/pages/sell/sell.html',
         title: 'การสั่งขาย',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
