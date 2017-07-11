(function () {
  'use strict';

  angular.module('BlurAdmin.pages.setting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('setting', {
         url: '/setting',
         templateUrl: 'app/pages/setting/setting.html',
         title: 'ตั้งค่าระบบ',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
