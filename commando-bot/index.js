const Commando = require('discord.js-commando');
const env = require('../env');
const path = require('path');
const client = new Commando.Client({
    owner: env.ownerid,
    commandPrefix: 'c!'
});

client.registry
    .registerGroups([])
    .registerDefaults();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

process.on('unhandledRejection', (err) => {
    console.error(err);
});

client.login(env.TUTORIAL_BOT_TOKEN).catch((err) => {
    console.error(err);
});