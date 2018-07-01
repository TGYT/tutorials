const Discord = require('discord.js'); // discord.js package

exports.run = (client, message, args) => { // Exporting message event, client object, etc.
  let user = message.mentions.users.first() || message.author; // Get User from mention
  let embed = new Discord.RichEmbed() // Embed constructor
  .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL) // Embed's author
  .setThumbnail(user.displayAvatarURL) // User's avatar
  .setColor('RANDOM') // Generates random color
  .addField('ID', user.id, true) // User ID
  .addField('Username', user.username, true) // Username
  .addField('Discrim', user.discriminator, true) // User tag/discriminator
  .addField('Status', user.presence.status, true) // User status (online, idle, do not disturb, invisible/offline)
  .addField('Bot?', user.bot, true) // If the user is bot or not
  .setThumbnail()
  message.channel.send(embed) // Sends the embed in the channel
};