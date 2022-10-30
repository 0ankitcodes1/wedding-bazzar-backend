module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom-blog-categories",
      handler: "custom-api.blogCategories",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/custom-service-categories",
      handler: "custom-api.serviceCategories",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/filter-service",
      handler: "custom-api.filterService",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/review-calculater",
      handler: "custom-api.reviewCalculator",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/user-login",
      handler: "custom-api.userLogin",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/single-service/:slug",
      handler: "custom-api.singleService",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
