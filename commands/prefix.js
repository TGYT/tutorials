const db = require('quick.db');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send('You do not have permission to set server prefix');
  if (!args.join(' ')) return message.channel.send('Please provide a prefix to set server prefix.');
  
  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(prefix => {
    message.channel.send(`Prefix has been set to ${prefix}`);
  });
};