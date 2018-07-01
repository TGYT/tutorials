const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!'); // Checks permission
  let member = message.mentions.members.first() || message.guild.members.get(args[0]); // Member mention
  if (!member) return message.channel.send('Please mention a member to kick!');
  if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal than you!');
  
  let reason = args.slice(1).join(' '); // Reason arguments
  
  await member.kick(reason) // Kicks a member.
  .catch(error => message.channel.send(`Sorry I couldn't kick, Error: ${error}`));
  
  let kickEmbed = new Discord.RichEmbed() //  RichEmbed constructor
  .setTitle('Kicked!') // Embed title
  .setDescription(`${member.user.tag} has been kicked for ${reason}`) // Embed's description
  message.channel.send(kickEmbed);
};