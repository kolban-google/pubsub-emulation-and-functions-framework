const { PubSub } = require('@google-cloud/pubsub');

async function create() {
    const pubsub = new PubSub();

    // Create a topic
    await pubsub.createTopic('my-topic');
    console.log('Topic called: \'my-topic\' Created');

    // Create a subscription (PUSH)
    const options = {
        "pushEndpoint": "http://localhost:8086"
    }
    await pubsub.createSubscription('my-topic', 'my-sub', options);
    console.log('Subscription called: \'my-sub\' Created');
}

create();
