const handler = require("twikoo-netlify").handler;

exports.handler = async function (...args) {
  // 获取event
  const event = args[0];
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }
  // 调用twikoo-netlify的handler函数
  return handler(...args);
};
