const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client(); // New Discord Client
const prefix = '!'; // Commands Prefix

client.on('ready', () => { // Ready Event
  console.log('Bot has started!');
  client.user.setActivity('YouTube', { type: 'WATCHING' })
});

client.on('message', message => { // Message Event
  
  if (message.author.bot) return undefined; // bot doesn't reply to itself
  
  let msg = message.content.toLowerCase(); // message's content to lowercase letter
  let args = message.content.slice(prefix.length).trim().split(' '); // arguments 
  let command = args.shift().toLowerCase(); // shift arguments to lower case
  
  if (command === 'youtube') {
    message.channel.send('Hi, **YouTube**! Subscribe to **Bolt Codes** for more videos, tutorials, series, etc.');
  }
  
  if (command === 'say') {
    let say = args.join(' ');
    message.delete(); // deletes the content (Usage: !say <text>)
    message.channel.send(say);
  }
});

client.login(process.env.SECRET); // My token is hidden so I don't have to regenerate it in every new video