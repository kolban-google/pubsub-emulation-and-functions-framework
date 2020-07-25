const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

pubsub.createTopic('my-topic').then(function(data) {
  console.log("Topic Created");
});