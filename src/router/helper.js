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
  registration: new RouteConstructor(() => `/registration`),
  profiles: new RouteConstructor(() => `/profiles`),
  profileCreate: new RouteConstructor(() => `/profiles/create`),
  profileDetails: new RouteConstructor(
    ($profileId) => `/profiles/${$profileId}`
  ),
};

export default routeHelper;
