/**
 * Function body to be invoked when triggered by a published message.
 */
exports.handleMessage = (data, context) => {
  console.log(`${new Date().toLocaleTimeString()}: The handleMessage function was called!`);
  msgData = Buffer.from(context.message.data, "base64").toString("ascii");
  console.log(`Message: ${msgData}`);
};
