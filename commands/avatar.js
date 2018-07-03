const Discord = require('discord.js'); // Importing discord.js & require method

exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author; // User mention
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL) // User's avatar
    .setColor('RANDOM') // Generate random color
    message.channel.send(embed)
};
