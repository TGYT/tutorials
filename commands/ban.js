const Discord = require('discord.js'); // Importing discord.js

exports.run = async (client, message, args) => { // Importing events, const, and etc.
  
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission to ban members');
  
  let member = message.mentions.members.first(); // Member mention
  if (!member) return message.channel.send('Please mention a member to ban!'); // Returns if the member isn't mentioned
  if (!member.bannable) return message.channel.send('You cannot ban a member with role higher or equal than you'); // Returns if the member isn't bannable
  
  let reason = args.slice(1).join(' '); // Reason Arguments
  await member.ban(reason) // Bans a mentioned member
  .catch(e => console.log(e)); // Catchs error and sends in console
  let embed = new Discord.RichEmbed() // RichEmbed constructor
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setTitle('Banned!') // Embed Title
  .setDescription(`${member.user.tag} has been banned!\nReason: ${reason}`)
  message.channel.send(embed);
}