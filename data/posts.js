const basePosts = [
  {
    id: 1,
    userId: 1,
    title: "Mastering Asynchronous JavaScript in Modern Web Apps",
    body: "Promises and async/await have fundamentally transformed how JavaScript handles concurrency. Understanding microtasks, macrotasks, and the event loop is crucial for building performant user experiences.",
    tags: ["javascript", "webdev", "programming"],
    reactions: { likes: 142, dislikes: 3 },
    views: 1250,
    createdAt: "2026-09-12T10:30:00Z"
  },
  {
    id: 2,
    userId: 2,
    title: "10 Principles for Crafting Clean API Contracts",
    body: "Designing intuitive REST and GraphQL APIs starts with consistent error envelopes, predictable pagination structures, and semantic HTTP status codes.",
    tags: ["api", "architecture", "backend"],
    reactions: { likes: 218, dislikes: 5 },
    views: 3410,
    createdAt: "2026-09-15T14:20:00Z"
  },
  {
    id: 3,
    userId: 3,
    title: "The Art of Micro-interactions in Design Systems",
    body: "Micro-interactions provide sensory feedback that makes user interfaces feel tangible and alive. From subtle button spring animations to smooth page transitions, details define quality.",
    tags: ["ui", "ux", "design"],
    reactions: { likes: 95, dislikes: 1 },
    views: 890,
    createdAt: "2026-09-20T08:15:00Z"
  },
  {
    id: 4,
    userId: 4,
    title: "Zero-Downtime Deployments with Docker and Kubernetes",
    body: "Rolling updates and health check probes ensure your users never encounter 502 bad gateway errors during peak traffic releases.",
    tags: ["devops", "docker", "cloud"],
    reactions: { likes: 310, dislikes: 8 },
    views: 4500,
    createdAt: "2026-09-24T16:45:00Z"
  },
  {
    id: 5,
    userId: 5,
    title: "Building Real-time Dashboards with WebSockets",
    body: "Learn how to establish low-latency bidirectional connections between Node.js backends and browser frontends using native WebSockets.",
    tags: ["nodejs", "realtime", "frontend"],
    reactions: { likes: 178, dislikes: 4 },
    views: 2100,
    createdAt: "2026-10-01T11:00:00Z"
  }
];

const baseComments = [
  {
    id: 1,
    postId: 1,
    user: { id: 2, username: "johndoe", fullName: "John Doe" },
    body: "Great explanation of the event loop! The microtask queue distinction cleared up a tricky bug I had.",
    createdAt: "2026-09-12T11:45:00Z"
  },
  {
    id: 2,
    postId: 1,
    user: { id: 4, username: "liamc", fullName: "Liam Chen" },
    body: "Async/await with Promise.allSettled is a game changer for resilient error handling.",
    createdAt: "2026-09-12T13:20:00Z"
  },
  {
    id: 3,
    postId: 2,
    user: { id: 1, username: "sconnor", fullName: "Sarah Connor" },
    body: "Standardizing error response schemas is honestly the #1 thing front-end engineers appreciate.",
    createdAt: "2026-09-15T15:10:00Z"
  },
  {
    id: 4,
    postId: 3,
    user: { id: 7, username: "cdubois", fullName: "Chloe Dubois" },
    body: "Agreed! Even a 150ms spring transition gives the interface a delightful native feel.",
    createdAt: "2026-09-20T09:30:00Z"
  },
  {
    id: 5,
    postId: 4,
    user: { id: 8, username: "arjunp", fullName: "Arjun Patel" },
    body: "Readiness probes combined with terminationGracePeriodSeconds is essential.",
    createdAt: "2026-09-24T18:00:00Z"
  }
];

function generatePost(id) {
  const titles = [
    "Understanding State Management Patterns in 2026",
    "Optimizing Core Web Vitals for Lightning-Fast Page Loads",
    "How to Write Bulletproof Unit and Integration Tests",
    "Securing JWT Authentication in Modern Single Page Apps",
    "Exploring Edge Computing and Serverless Architecture"
  ];
  const tagsList = [
    ["react", "state", "architecture"],
    ["performance", "seo", "webdev"],
    ["testing", "jest", "qa"],
    ["security", "auth", "jwt"],
    ["edge", "cloud", "serverless"]
  ];

  const index = id % titles.length;
  return {
    id,
    userId: 1 + (id % 10),
    title: `${titles[index]} (Part ${id})`,
    body: `Deep dive exploration into architectural strategies and practical code samples for building robust applications. Article #${id}.`,
    tags: tagsList[index],
    reactions: { likes: 50 + (id * 19) % 300, dislikes: (id * 3) % 15 },
    views: 400 + (id * 73) % 5000,
    createdAt: new Date(Date.now() - id * 86400000).toISOString()
  };
}

function generateComment(id) {
  return {
    id,
    postId: 1 + (id % 5),
    user: {
      id: 1 + (id % 10),
      username: `user_${id}`,
      fullName: `User ${id}`
    },
    body: `Insightful post! Really enjoyed reading through section #${id % 4 + 1}.`,
    createdAt: new Date(Date.now() - id * 3600000).toISOString()
  };
}

function getPosts(optionsOrCount) {
  let count = 5;
  let filters = {};

  if (typeof optionsOrCount === "number") {
    count = optionsOrCount <= 0 ? 0 : optionsOrCount;
  } else if (typeof optionsOrCount === "object" && optionsOrCount !== null) {
    if (typeof optionsOrCount.count === "number") count = optionsOrCount.count;
    else if (typeof optionsOrCount.limit === "number") count = optionsOrCount.limit;
    filters = optionsOrCount;
  }

  const result = [];
  const targetCount = count > 0 ? count : 0;
  const poolSize = Math.max(targetCount, basePosts.length);

  for (let i = 0; i < poolSize; i++) {
    const post = i < basePosts.length ? basePosts[i] : generatePost(i + 1);

    if (filters.userId && post.userId !== Number(filters.userId)) continue;
    if (filters.tag && !post.tags.includes(filters.tag.toLowerCase())) continue;
    if (filters.q) {
      const q = filters.q.toLowerCase();
      if (!post.title.toLowerCase().includes(q) && !post.body.toLowerCase().includes(q)) continue;
    }

    result.push(post);
    if (result.length >= targetCount) break;
  }

  return result;
}

function getPostById(id) {
  const numericId = Number(id);
  if (!numericId || numericId <= 0) return null;
  if (numericId <= basePosts.length) {
    return basePosts.find(p => p.id === numericId) || null;
  }
  return generatePost(numericId);
}

function getComments(optionsOrCount) {
  let count = 5;
  let filters = {};

  if (typeof optionsOrCount === "number") {
    count = optionsOrCount <= 0 ? 0 : optionsOrCount;
  } else if (typeof optionsOrCount === "object" && optionsOrCount !== null) {
    if (typeof optionsOrCount.count === "number") count = optionsOrCount.count;
    else if (typeof optionsOrCount.limit === "number") count = optionsOrCount.limit;
    filters = optionsOrCount;
  }

  const result = [];
  const targetCount = count > 0 ? count : 0;
  const poolSize = Math.max(targetCount, baseComments.length);

  for (let i = 0; i < poolSize; i++) {
    const comment = i < baseComments.length ? baseComments[i] : generateComment(i + 1);
    if (filters.postId && comment.postId !== Number(filters.postId)) continue;
    result.push(comment);
    if (result.length >= targetCount) break;
  }

  return result;
}

function getCommentsByPostId(postId) {
  return getComments({ postId: Number(postId), count: 10 });
}

module.exports = {
  getPosts,
  getPostById,
  getComments,
  getCommentsByPostId,
  basePosts,
  baseComments
};
