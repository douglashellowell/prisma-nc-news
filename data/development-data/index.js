/**
 * @typedef {Object} Article
 * @property {string} title
 */

/**
 * @typedef {Object} Comment
 * @property {string} body
 */

/**
 * @typedef {Object} Topic
 * @property {string} slug
 *
 */

const articleData = require('./articles.js');
const commentData = require('./comments.js');
const topicData = require('./topics.js');
const userData = require('./users.js');

/**
 * @type {Object}
 * @property {Article[]} articleData
 * @property {Comment[]} commentData
 */
module.exports = {
  articleData,
  commentData,
  topicData,
  userData,
};
