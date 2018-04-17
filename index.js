const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client(); // New Discord Client
const prefix = '!'; // you can change the string to whatever you want

client.on('ready', () => { // Ready Event
    console.log('Bot has started!');
});

client.on('message', message => { // Message Event
  
  let msg = message.content.toLowerCase();
  
    if (msg === prefix + 'youtube') {
        message.channel.send('Hi, **YouTube**! Subscribe to **Bolt Codes** for more videos, tutorials, series, etc.');
    }
});

client.login(process.env.SECRET); // My token is hidden so I don't have to regenerate it in every new video

// so let's test it out just type node index.js in console to run it