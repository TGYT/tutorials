const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

client.on('ready', () => {
    console.log('Bot has started!');
    client.user.setStatus('online');
    client.user.setActivity('with YouTube');
});

client.on('guildMemberAdd', async (member) => {
    let autoRole = await db.fetch(`autorole_${member.guild.id}`).catch(err => console.log(err));
    let autorole = member.guild.roles.find('name', autoRole);
    member.addRole(autorole);
    const joinchannel = member.guild.channels.find('name', 'bot-spam');
    joinchannel.send(`Welcome to ${member.guild.name}, ${member.user.tag}!`);
});

client.on('message', async message => {
    var prefix = '!';
    let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null) fetchedPrefix = prefix;
    else prefix = fetchedPrefix;

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return undefined;
    let args = message.content.slice(prefix.length)
        .trim()
        .split(' ');
    let command = args.shift()
        .toLowerCase();

    try {
        // Command Aliases
        if (command === 'echo') command = 'say';
        if (command === 'sayhitoyt') command = 'youtube';
        if (command === 'ui') command = 'userinfo';
        if (command === 'asciify') command = 'ascii';
        let commands = require(`./commands/${command}.js`); // Run command folder
        commands.run(client, message, args); // Runs [Client, Message, Args]
    } catch (e) {
        console.log(e.stack); // Throws the error in console
    } finally {
        console.log(`${message.author.tag} used ${command} command`); // Logs if the command has been used.
    }
});

client.login(process.env.SECRET); // Login
