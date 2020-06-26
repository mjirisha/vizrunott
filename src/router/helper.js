class RouteConstructor {
  constructor(func) {
    this.func = func;
  }

  href(...args) {
    return this.func(...args);
  }
}

const routeHelper = {
  root: new RouteConstructor(() => `/`),
  profiles: new RouteConstructor(() => `/profiles`),
};

export default routeHelper;
