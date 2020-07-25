const {PubSub} = require('@google-cloud/pubsub');
const util = require("util")
const pubsub = new PubSub();

pubsub.getTopics().then(function(data) {
  console.log("Topics listed");
  console.log(`${util.inspect(data)}`);
});