const Discord = require('discord.js'); // discord.js package

exports.run = (client, message, args) => { // exporting message event, client object, etc.
  
  let user = message.mentions.users.first() || message.author; // Get User from mention
  let embed = new Discord.RichEmbed() // Embed Constructor
  .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL) // User's Avatar
  .setColor('RANDOM') // Generates random color
  .addField('ID', user.id, true) // User ID
  .addField('Username', user.username, true) // Username
  .addField('Discrim', user.discriminator, true) // User Tag/discriminator
  .addField('Status', user.presence.status, true) // User Status (online, idle, do not disturb, invisible/offline)
  .addField('Bot?', user.bot, true) // if the user is bot or not
  .setThumbnail()
  message.channel.send(embed) // Sends the embed in the channel
};