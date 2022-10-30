'use strict';

/**
 * locality service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locality.locality');
