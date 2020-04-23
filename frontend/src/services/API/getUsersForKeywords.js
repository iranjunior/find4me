/**
 * @typedef {Object} Response
 * @property {number} status - Request status
 * @property {bool} success - Success
 * @property {bool} error - Error
 * @property {Users} data - Responses
 *
 * @typedef {Object} Users
 * @property {Object[]} users - Usuarios
 *
 *
 * @param {string} keywords
 * @param {number} limit
 * @param {number} offset
 *
 * @returns {Response}
 */
async function getUsersForKeywords(keywords, limit = 10, offset = 0) {
  try {
    const response = await this.get('/user', {
      params: {
        keywords,
        limit,
        offset,
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        success: true,
        error: false,
        data: response.data,
      };
    }
    return {
      status: response.status,
      success: false,
      error: true,
      data: response.data || response.error,
    };
  } catch (error) {
    return {
      status: 500,
      success: false,
      error: true,
      data: error,
    };
  }
}

export default getUsersForKeywords;
