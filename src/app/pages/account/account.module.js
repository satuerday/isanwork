(function () {
  'use strict';

  angular.module('BlurAdmin.pages.account', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('account', {
         url: '/account',
         templateUrl: 'app/pages/account/account.html',
         title: 'การบัญชี',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
