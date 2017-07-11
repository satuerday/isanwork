(function () {
  'use strict';

  angular.module('BlurAdmin.pages.report', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('report', {
         url: '/report',
         templateUrl: 'app/pages/report/reprot.html',
         title: 'รายงาน',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
