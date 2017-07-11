(function () {
  'use strict';

  angular.module('BlurAdmin.pages.storege', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('storege', {
         url: '/storege',
         templateUrl: 'app/pages/storege/storege.html',
         title: 'การจัดการสินค้าคงคลัง',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
