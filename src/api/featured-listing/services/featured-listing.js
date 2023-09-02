'use strict';

/**
 * featured-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-listing.featured-listing');
