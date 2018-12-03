const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const env = require('../env');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({ game: { name: 'with Alpha Dev', type: 'PLAYING' }, status: 'online' });
});

client.on('guildMemberAdd', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'super-testing');
    if (!logChannel) return undefined;
    logChannel.send(`${member.user.tag} has just joined.`);
});

client.on('guildMemberRemove', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'super-testing');
    if (!logChannel) return undefined;
    logChannel.send(`${member.user.tag} has just left.`);
});

client.on('message', async (message) => {
    var prefix = '!';
    var fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null || typeof fetchedPrefix === 'undefined') fetchedPrefix = prefix;
    else prefix = fetchedPrefix;

    if (message.author.bot) return undefined;
    if (!message.content.startsWith(prefix)) return undefined;
    var args = message.content.slice(prefix.length).trim().split(' ');
    var command = args.shift().toLowerCase();
    try {
        if (command === 'echo') command = 'say';
        if (command === 'clear') command = 'purge';
        if (command === 'yt') command = 'youtube';
        let commands = require(`./commands/${command}.js`);
        commands.run(client, message, args);
    } catch (err) {
        throw err;
    }
});

client.login(env.TUTORIAL_BOT_TOKEN);