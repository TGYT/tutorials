const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let user = message.mentions.users.first();
  let embed = new Discord.RichEmbed() // RichEmbed()
  .setAuthor(user.tag, user.displayAvatarURL)
  .setThumbnail(user.displayAvatarURL())
  .addField('ID', user.id, true)
  .addField('Username', user.tag, true)
  .addField('Bot?', user.bot, true)
  .addField('Status', user.presence.status, true)
  .addField('Game', user.presence.activity.name, true)
  .setTimestamp()
  message.channel.send(embed);
};