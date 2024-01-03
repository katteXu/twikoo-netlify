const handler = require("twikoo-netlify").handler;

exports.handler = handler;
// exports.handler = async function (...args) {
//   // 获取event
//   const event = args[0];
//   const headers = {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Content-Type",
//     "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
//   };
//   if (event.httpMethod === "OPTIONS") {
//     return { statusCode: 200, headers };
//   } else {
//     // 调用twikoo-netlify的handler函数
//     const result = await handler(...args);
//     result.headers = { ...result.headers, ...headers };
//     return result;
//   }
// };
