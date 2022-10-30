"use strict";

/**
 * A set of functions called "actions" for `custom-api`
 */

module.exports = {
  blogCategories: async (ctx, next) => {
    try {
      const entries = await strapi.entityService.findMany("api::blog.blog", {
        filters: {
          blog_category: {
            slug: ctx.url.split("?blog_category.slug=")[1],
          },
        },
        populate: "*",
      });
      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },

  serviceCategories: async (ctx, next) => {
    try {
      const entries = await strapi.entityService.findMany("api::service.service", {
        filters: {
          service_category: {
            slug: ctx.url.split("?service.slug=")[1],
          },
        },
        populate: "*",
      });
      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },

  filterService: async(ctx, next) => {
    try {
      // return ctx.request.body;

      let query = {};
      let sorting = { id: 'asc' };

      if (ctx.request.body.hasOwnProperty('search')) {
        query['title'] = {
          $contains: ctx.request.body.search
        }
      }

      if (ctx.request.body.hasOwnProperty('category')) {
        query['service_category'] = {
          slug: {
            $in: ctx.request.body.category
          }
        }
      }

      if (ctx.request.body.hasOwnProperty('budget_low') && ctx.request.body.hasOwnProperty('budget_high')) {
        query['price'] = {
          $between: [ctx.request.body.budget_low, ctx.request.body.budget_high],
        }
      }

      if (ctx.request.body.hasOwnProperty('locality')) {
        query['location'] = {
          $in: ctx.request.body.locality
        }
      }

      if (ctx.request.body.hasOwnProperty('badge')) {
        if (ctx.request.body.badge == 'trusted_service') {
          query['trusted_service'] = {
            $eq: true
          }
        }
        if (ctx.request.body.badge == 'featured') {
          query['featured'] = {
            $eq: true
          }
        }
      }
      
      if (ctx.request.body.hasOwnProperty('sort')) {
        if (ctx.request.body.sort == 'recently-added') {
          sorting = { id: 'asc' }
        }
        if (ctx.request.body.sort == 'last-added') {
          sorting = { id: 'desc' }
        }
        if (ctx.request.body.sort == 'most-expensive') {
          sorting = { price: 'desc' }
        }
        if (ctx.request.body.sort == 'least-expensive') {
          sorting = { price: 'asc' }
        }
      }

      const entries = await strapi.entityService.findMany("api::service.service", {
        filters: query,
        sort: sorting,
        populate: "*",
      });
      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },

  reviewCalculator: async(ctx, next) => {
    try {
      // return ctx.url.split("?service.id=")[1];

      // grab the review
      const entries = await strapi.entityService.findMany("api::service-review.service-review", {
        filters: {
          service: {
            id: ctx.url.split("?service.id=")[1],
          },
        },
        populate: "*",
      });


      // calculate no. and rating
      

      // send the data back
      return entries;

    } catch (err) {
      ctx.body = err;
    }
  },

  userLogin: async(ctx, next) => {
    try {
      const entries = await strapi.entityService.findMany("api::service-review.service-review", {
        filters: {
          service: {
            id: ctx.url.split("?service.id=")[1],
          },
        },
        populate: "*",
      });

      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },

  singleService: async(ctx, next) => {
    const review = await strapi.entityService.findMany('api::service-review.service-review', {
      filters: {
        service: {
          slug: ctx.params.slug
        }
      },
      populate: ['service']
    });

    const entry = await strapi.entityService.findMany('api::service.service', {
      filters: { slug: ctx.params.slug },
      populate: ['thumbnail', 'service_category', 'website_user', 'gallery.images']
    });
    return {
      data: entry,
      review: review,
      rating: {
        total: 11,
        rate: 4.7
      }
    };
  }
};
