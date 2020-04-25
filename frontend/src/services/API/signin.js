/**
 * @typedef {Object} Response
 * @property {number} status - Request status
 * @property {bool} success - Success
 * @property {bool} error - Error
 * @property {User} data - Responses
 *
 * @typedef {Object} Data
 * @property {string} email - email
 * @property {string} password - password
 *
 * @typedef {Object} User
 * @property {string} uuid - uuid,
 * @property {string} createdAt - createdAt,
 * @property {string} updatedAt - updatedAt,
 * @property {string} token - token
 *
 * @param {Data} data
 *
 * @returns {Response}
 */
async function signIn({ email, password }) {
  try {
    const response = await this.post('/signin',
      {
        email,
        password,
      });

    if (response.status === 200) {
      return {
        status: response.status,
        success: true,
        error: false,
        data: response.data.user,
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

export default signIn;
