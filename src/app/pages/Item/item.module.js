(function () {
  'use strict';

  angular.module('BlurAdmin.pages.item', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
   $stateProvider
       .state('item', {
         url: '/item',
         templateUrl: 'app/pages/item/item.html',
         title: 'การจัดการสินค้า',

         sidebarMeta: {
           icon: 'ion-document',
           order: 800,
         },
       });
 }

})();
