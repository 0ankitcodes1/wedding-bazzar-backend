"use strict";

/**
 * A set of functions called "actions" for `testing`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("api::blog.blog", {
        filters: {
          blog_category: {
            slug: ctx.url.split("?blog_category.slug=")[1],
          },
        },
        populate: "*",
      });

      // return the reduced data
      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },
};
