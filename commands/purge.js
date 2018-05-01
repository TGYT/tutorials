const Discord = require('discord.js'); // require

exports.run = (client, message, args) => {
  
  if(isNaN(args[0])) return message.channel.send('Please provide a valid amount to purge or delete messages!'); // if amount is not in numbers return message
  if (args[0] > 100) return message.channel.send('Supply a amount less than 100!'); // if amount is is more than 100 returns message
  
  message.channel.bulkDelete(args[0]) // deletes the amount of messages provided
};

//  let's test it out! Type node index.js in your console, make sure to save the file. Join my Discord server link in the description down below.