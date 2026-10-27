const { getUsers, getUserById, baseUsers } = require("./data/users");
const { getProducts, getProductById, baseProducts } = require("./data/products");
const { getPosts, getPostById, getComments, getCommentsByPostId, basePosts, baseComments } = require("./data/posts");
const { getOrders, getOrderById, baseOrders } = require("./data/orders");
const { getAuthToken, getAuthSession } = require("./data/auth");

const fakeApi = {
  async getUsers(options = {}) {
    const delay = typeof options === "object" && options.delay ? options.delay : 200;
    return new Promise((resolve) => setTimeout(() => resolve(getUsers(options)), delay));
  },

  async getUserById(id, delay = 150) {
    return new Promise((resolve) => setTimeout(() => resolve(getUserById(id)), delay));
  },

  async getProducts(options = {}) {
    const delay = typeof options === "object" && options.delay ? options.delay : 200;
    return new Promise((resolve) => setTimeout(() => resolve(getProducts(options)), delay));
  },

  async getProductById(id, delay = 150) {
    return new Promise((resolve) => setTimeout(() => resolve(getProductById(id)), delay));
  },

  async getPosts(options = {}) {
    const delay = typeof options === "object" && options.delay ? options.delay : 200;
    return new Promise((resolve) => setTimeout(() => resolve(getPosts(options)), delay));
  },

  async getComments(options = {}) {
    const delay = typeof options === "object" && options.delay ? options.delay : 200;
    return new Promise((resolve) => setTimeout(() => resolve(getComments(options)), delay));
  },

  async getOrders(options = {}) {
    const delay = typeof options === "object" && options.delay ? options.delay : 200;
    return new Promise((resolve) => setTimeout(() => resolve(getOrders(options)), delay));
  },

  async login(credentials = {}, delay = 300) {
    return new Promise((resolve) => setTimeout(() => resolve(getAuthSession(baseUsers[0])), delay));
  }
};

const api = {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  getPosts,
  getPostById,
  getComments,
  getCommentsByPostId,
  getOrders,
  getOrderById,
  getAuthToken,
  getAuthSession,
  fakeApi,
  data: {
    users: baseUsers,
    products: baseProducts,
    posts: basePosts,
    comments: baseComments,
    orders: baseOrders
  },
  getusers: getUsers,
  getproducts: getProducts,
  getposts: getPosts,
  getcomments: getComments,
  getorders: getOrders
};

module.exports = api;