exports.handleMessage = (data, context) => {
    console.log("handleMessage function called!");
    console.log(`${data}`);
    console.log(`${JSON.stringify(context)}`);
};