exports.handleMessage = (data, context) => {
  console.log("handleMessage function called!");
  console.log(`${data}`);
  console.log(`${JSON.stringify(context)}`);
  msgData = Buffer.from(context.message.data, "base64").toString("ascii");
  console.log(`Message: ${msgData}`);
};
