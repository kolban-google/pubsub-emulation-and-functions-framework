/**
 * Publish a message to the PubSub topic.
 */
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

const bufferData = Buffer.from("Hello World");
pubsub.topic("my-topic").publish(bufferData).then(data => {
  console.log("Published a message to the \`my-topic` topic");
});