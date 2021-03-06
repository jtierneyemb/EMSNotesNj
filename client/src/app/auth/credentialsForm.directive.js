/**
 * @ngdoc directive
 * @name feCredentialsForm
 * @description
 * Form for login or signup
 *
 * @example:
 <fe-credentials-form></fe-credentials-form>
 */


(function () {
  'use strict';

  angular
    .module('frontend')
    .directive('feCredentialsForm', directiveFunc);

  /** @ngInject */
  function directiveFunc() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/auth/credentialsForm.html',
      scope: {
        form: '=',
        errors: '=',
        submit: '&',
        entity: '=',
        ok: '@',
        signingup: '='
      }
    };

    return directive;
  }

})();
