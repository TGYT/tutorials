 // Importing "yajdbl" package.
const YAJDBL = require('yajdbl');
// New YAJDBL client construction.
const client = new YAJDBL.Client();
// "env.js" contains the token, which is hidden due to security reasons.
const env = require('../env');

// Events

// Ready event, emits whenever this client is connected.
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Message event, emits when a message is sent on server, this client is currently handling.
client.on('message', (message) => {
    if (message.author.isBot) return; // Returns if the message's author is a bot.
    if (message.content === 'ping') {
        return message.reply('Pong.');
    }
});

client.login(env.TUTORIAL_BOT_TOKEN); // Logging in...