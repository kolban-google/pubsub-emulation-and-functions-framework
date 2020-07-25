const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

const options = {
  "pushEndpoint": "http://localhost:8086"
}

pubsub.createSubscription('my-topic', "my-sub", options).then(data => {
  console.log("Subscription Created");
});