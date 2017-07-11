(function () {
  'use strict';

  angular.module('BlurAdmin.pages.member', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('member', {
         url: '/member',
         templateUrl: 'app/pages/member/member.html',
         title: 'การจัดการรายชื่อ',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
