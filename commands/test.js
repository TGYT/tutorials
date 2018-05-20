const DiscordTools = require('discordtools');
const tools = new DiscordTools(process.env.SECRET);

exports.run = (client, message, args) => {
  tools.removerole('445258568598421535', '357555941215961099', '445269691406221344').then(g => {
    console.log(g);
  })
}
