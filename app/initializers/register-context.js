export function initialize(application) {
  application.inject('route', 'context', 'service:context');
  application.inject('controller', 'context', 'service:context');
  application.inject('component', 'context', 'service:context');
}

export default {
  name: 'register-context',
  initialize
};
