(function () {
  'use strict';

  angular.module('BlurAdmin.pages.pledge', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('pledge', {
         url: '/pledge',
         templateUrl: 'app/pages/pledge/pledge.html',
         title: 'การขายฝาก (จำนำ)',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
