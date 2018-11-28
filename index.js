const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('online');
    client.user.setActivity('with YouTube');
});

client.on('guildMemberAdd', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'super-testing');
    if (!logChannel) return undefined;
    logChannel.send(`${member.user.tag} has just joined!`);
});

client.on('guildMemberRemove', (member) => {
    const logChannel = member.guild.channels.find(channel => channel.name === 'super-testing');
    if (!logChannel) return undefined;
    logChannel.send(`${member.user.tag} has just left!`);
}); // let's test it out! Make sure to restart the bot.

client.on('message', async (message) => {
    var prefix = '!';
    var fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null) fetchedPrefix = prefix;
    else prefix = fetchedPrefix;

    if (message.author.bot) return undefined;
    if (!message.content.startsWith(prefix)) return undefined;
    var args = message.content.slice(prefix.length).trim().split(' ');
    var command = args.shift().toLowerCase();
    try {
        if (command === 'echo') command = 'say';
        if (command === 'sayhitoyt') command = 'youtube';
        if (command === 'ui') command = 'userinfo';
        if (command === 'asciify') command = 'ascii';
        if (command === 'clear') command = 'purge';
        if (command === 'yt') command = 'youtube';
        let commands = require(`./commands/${command}.js`);
        commands.run(client, message, args);
    } catch (e) {
        console.log(e.stack);
    } finally {
        console.log(`${message.author.tag} used ${command} command`);
    }
});

client.login('NDM1NzQyNzg3NDU1OTQyNjc2.DrzViw.dG2sDXwiYgn09Pwzcuto0dUX9sk');