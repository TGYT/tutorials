const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client(); // New Discord Client
const db = require('quick.db');

client.on('ready', () => { // Ready Event
  console.log('Bot has started!');
});

client.on('message', message => { // Message Event
  
  let prefix = '!';
  if (message.author.bot) return undefined; // Bot doesn't reply to itself
  let msg = message.content.toLowerCase(); // Message's content to lowercase letter
  let args = message.content.slice(prefix.length).trim().split(' '); // Arguments 
  let command = args.shift().toLowerCase(); // Shift arguments to lower case
  
  try {
    if (command === 'echo') command = 'say';
    if (command === 'sayhitoyt') command = 'youtube';
    if (command === 'ui') command = 'userinfo'; // Let's test this out
    let commands = require(`./commands/${command}.js`); // Running commands folder and files
    commands.run(client, message, args);
  } catch (e) {
    console.log(e.stack); // Throws the error in console
  } finally {
    console.log(`${message.author.tag} used ${command} command`);
  }
});

client.login(process.env.SECRET); // My token is hidden