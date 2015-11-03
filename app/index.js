import angular, {module, bootstrap} from 'angular';

import './modules/core';
// Entry point of the application
module('coaching.philos.io', ['core']);

// Bootstrap the application
bootstrap(document.body, ['coaching.philos.io']);

