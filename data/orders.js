const baseOrders = [
  {
    id: 1,
    orderNumber: "ORD-2026-9041",
    userId: 1,
    items: [
      { productId: 1, title: "Pro Wireless Noise-Cancelling Headphones", price: 299.99, quantity: 1, total: 299.99 },
      { productId: 3, title: "Minimalist Mechanical Keyboard RGB", price: 139.50, quantity: 1, total: 139.50 }
    ],
    totalAmount: 439.49,
    currency: "USD",
    paymentMethod: "credit_card",
    status: "delivered",
    trackingNumber: "TRK-9812-US",
    createdAt: "2026-10-01T09:14:00Z"
  },
  {
    id: 2,
    orderNumber: "ORD-2026-9042",
    userId: 2,
    items: [
      { productId: 4, title: "TitanBook 16-inch M-Pro Laptop", price: 1899.99, quantity: 1, total: 1899.99 }
    ],
    totalAmount: 1899.99,
    currency: "USD",
    paymentMethod: "apple_pay",
    status: "shipped",
    trackingNumber: "TRK-9813-US",
    createdAt: "2026-10-08T15:22:00Z"
  },
  {
    id: 3,
    orderNumber: "ORD-2026-9043",
    userId: 3,
    items: [
      { productId: 6, title: "Nordic Minimalist Ceramic Desk Lamp", price: 79.90, quantity: 2, total: 159.80 },
      { productId: 5, title: "Artisan Roasted Single-Origin Coffee Beans (1kg)", price: 34.00, quantity: 1, total: 34.00 }
    ],
    totalAmount: 193.80,
    currency: "USD",
    paymentMethod: "paypal",
    status: "processing",
    trackingNumber: "TRK-9814-UK",
    createdAt: "2026-10-12T11:45:00Z"
  },
  {
    id: 4,
    orderNumber: "ORD-2026-9044",
    userId: 4,
    items: [
      { productId: 8, title: "Clean Code & System Design Handbook", price: 49.99, quantity: 1, total: 49.99 }
    ],
    totalAmount: 49.99,
    currency: "USD",
    paymentMethod: "credit_card",
    status: "pending",
    trackingNumber: null,
    createdAt: "2026-10-15T18:05:00Z"
  }
];

const paymentMethods = ["credit_card", "paypal", "apple_pay", "stripe"];
const orderStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

function generateOrder(id) {
  const status = orderStatuses[id % orderStatuses.length];
  const paymentMethod = paymentMethods[id % paymentMethods.length];
  const qty = 1 + (id % 3);
  const price = Number((25.00 + (id * 19.5) % 300).toFixed(2));
  const total = Number((price * qty).toFixed(2));

  return {
    id,
    orderNumber: `ORD-2026-${9000 + id}`,
    userId: 1 + (id % 10),
    items: [
      {
        productId: 1 + (id % 10),
        title: `Product Item #${1 + (id % 10)}`,
        price,
        quantity: qty,
        total
      }
    ],
    totalAmount: total,
    currency: "USD",
    paymentMethod,
    status,
    trackingNumber: status === "pending" || status === "cancelled" ? null : `TRK-${1000 + id}-GL`,
    createdAt: new Date(Date.now() - id * 43200000).toISOString()
  };
}

function getOrders(optionsOrCount) {
  let count = 4;
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
  const poolSize = Math.max(targetCount, baseOrders.length);

  for (let i = 0; i < poolSize; i++) {
    const order = i < baseOrders.length ? baseOrders[i] : generateOrder(i + 1);

    if (filters.status && order.status.toLowerCase() !== filters.status.toLowerCase()) continue;
    if (filters.userId && order.userId !== Number(filters.userId)) continue;
    if (filters.paymentMethod && order.paymentMethod.toLowerCase() !== filters.paymentMethod.toLowerCase()) continue;

    result.push(order);
    if (result.length >= targetCount) break;
  }

  return result;
}

function getOrderById(id) {
  const numericId = Number(id);
  if (!numericId || numericId <= 0) return null;
  if (numericId <= baseOrders.length) {
    return baseOrders.find(o => o.id === numericId) || null;
  }
  return generateOrder(numericId);
}

module.exports = {
  getOrders,
  getOrderById,
  baseOrders
};
