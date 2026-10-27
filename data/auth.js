const { baseUsers } = require("./users");

function getAuthToken(payload = {}) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const defaultPayload = {
    sub: payload.id || 1,
    name: payload.fullName || "Sarah Connor",
    email: payload.email || "sarah.connor@example.com",
    role: payload.role || "developer",
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600
  };
  const body = Buffer.from(JSON.stringify({ ...defaultPayload, ...payload })).toString("base64url");
  const signature = Buffer.from("mock_signature_" + Math.random().toString(36).substring(2)).toString("base64url");
  return `${header}.${body}.${signature}`;
}

function getAuthSession(user = null) {
  const selectedUser = user || baseUsers[0];
  const accessToken = getAuthToken(selectedUser);
  const refreshToken = `mock_refresh_${Math.random().toString(36).substring(2)}${Date.now()}`;

  return {
    user: selectedUser,
    tokenType: "Bearer",
    accessToken,
    refreshToken,
    expiresIn: 3600,
    issuedAt: new Date().toISOString()
  };
}

module.exports = {
  getAuthToken,
  getAuthSession
};
