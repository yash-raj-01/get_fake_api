const {
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
  getusers,
  getproducts
} = require("./index");

console.log("========================================");
console.log("🧪 Running get-fake-api Test Suite");
console.log("========================================\n");

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failed++;
  }
}

console.log("▶ Testing Users Module:");
const usersDefault = getUsers();
assert(usersDefault.length === 10, "getUsers() returns default 10 users");
assert(typeof usersDefault[0].email === "string" && usersDefault[0].email.includes("@"), "User has valid email");
assert(typeof usersDefault[0].company.name === "string", "User has nested company");

const users5 = getUsers(5);
assert(users5.length === 5, "getUsers(5) returns exactly 5 users");

const femaleUsers = getUsers({ gender: "female", count: 3 });
assert(femaleUsers.length === 3 && femaleUsers.every(u => u.gender === "female"), "Filtered female users successfully");

const userById = getUserById(2);
assert(userById && userById.id === 2 && userById.fullName === "John Doe", "getUserById(2) finds correct user");

const userSearch = getUsers({ q: "Sarah" });
assert(userSearch.length > 0 && userSearch[0].firstName === "Sarah", "Search query q='Sarah' finds matching user");

console.log("\n▶ Testing Products Module:");
const productsDefault = getProducts();
assert(productsDefault.length === 10, "getProducts() returns default 10 products");
assert(typeof productsDefault[0].price === "number", "Product price is numeric");

const electronics = getProducts({ category: "electronics" });
assert(electronics.length > 0 && electronics.every(p => p.category === "electronics"), "Filter by category works");

const productById = getProductById(1);
assert(productById && productById.id === 1, "getProductById(1) returns product");

const sortedProducts = getProducts({ sortField: "price", sortOrder: "desc", count: 5 });
assert(sortedProducts[0].price >= sortedProducts[1].price, "Sorting products by price descending works");

console.log("\n▶ Testing Posts & Comments Module:");
const posts = getPosts(3);
assert(posts.length === 3, "getPosts(3) returns 3 posts");
assert(Array.isArray(posts[0].tags), "Post contains tags array");

const postById = getPostById(1);
assert(postById && postById.id === 1, "getPostById(1) returns post");

const comments = getComments(4);
assert(comments.length === 4, "getComments(4) returns 4 comments");

const postComments = getCommentsByPostId(1);
assert(postComments.length > 0 && postComments.every(c => c.postId === 1), "getCommentsByPostId(1) returns filtered comments");

console.log("\n▶ Testing Orders Module:");
const orders = getOrders(2);
assert(orders.length === 2, "getOrders(2) returns 2 orders");
assert(Array.isArray(orders[0].items) && orders[0].items.length > 0, "Order has items");

const orderById = getOrderById(1);
assert(orderById && orderById.orderNumber === "ORD-2026-9041", "getOrderById(1) returns order with orderNumber");

console.log("\n▶ Testing Auth Module:");
const token = getAuthToken();
assert(typeof token === "string" && token.split(".").length === 3, "getAuthToken() returns valid JWT format");

const session = getAuthSession();
assert(session.accessToken && session.user && session.tokenType === "Bearer", "getAuthSession() returns full auth session");

console.log("\n▶ Testing Backward Compatibility Aliases:");
assert(typeof getusers === "function", "Lowercase alias getusers is present");
assert(typeof getproducts === "function", "Lowercase alias getproducts is present");

console.log("\n▶ Testing Async fakeApi Client:");
fakeApi.getUsers({ count: 2, delay: 50 }).then((asyncUsers) => {
  assert(asyncUsers.length === 2, "fakeApi.getUsers({ count: 2 }) returns via Promise");
  
  console.log("\n========================================");
  if (failed === 0) {
    console.log(`🎉 ALL TESTS PASSED (${passed}/${passed})`);
  } else {
    console.error(`💥 SOME TESTS FAILED (${failed} failed, ${passed} passed)`);
    process.exitCode = 1;
  }
  console.log("========================================\n");
});