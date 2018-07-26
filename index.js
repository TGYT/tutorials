const Discord = require('discord.js'); // Importing Discord.js package
const client = new Discord.Client(); // New Discord client constructor
const db = require('quick.db'); // npm i quick.db

client.on('ready', () => { // Ready Event
    console.log('Bot has started!'); // Logs "Bot has started!" when the bot is started
    client.user.setStatus('online'); // Client's status [online, idle, dnd, offline]
    client.user.setActivity('with YouTube'); // Game status
});

client.on('guildMemberAdd', async (member) => {
    let autoRole = await db.fetch(`autorole_${member.guild.id}`)
        .catch(err => console.log(err));
    let autorole = member.guild.roles.find('name', autoRole);
    member.addRole(autorole);
    const joinchannel = member.guild.channels.find('name', 'bot-spam');
    joinchannel.send(`Welcome to ${member.guild.name}, ${member.user.tag}!`); // let's test this out!!! Thanks for watching please subscribe for more videos join my server too.!!!!
});

client.on('message', async message => { // Message Event
    var prefix = '!';
    
    let fetchedPrefix = await db.fetch(`prefix_${message.guild.id}`);
    if (fetchedPrefix === null) fetchedPrefix = prefix;
    else prefix = fetchedPrefix;
    // let's test it out!
    if (message.author.bot) return; // If the bot is the author, returns.
    let args = message.content.slice(prefix.length)
        .trim()
        .split(' '); // Arguments 
    let command = args.shift()
        .toLowerCase(); // Shift arguments to lowercase

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
