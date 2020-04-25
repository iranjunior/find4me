
const patterns = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/,
};

export const isEmail = (email) => (email.match(patterns.email) !== null);
export const isPassword = (password) => (password.match(patterns.password) !== null);
