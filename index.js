const Discord = require('discord.js'); // Importing Discord.js package
const client = new Discord.Client(); // New Discord client constructor
const prefix = '!'; // Command Prefix

client.on('ready', () => { // Ready Event
  console.log('Bot has started!'); // Logs "Bot has started!"
  client.user.setStatus('dnd'); // Client's Status [online, idle, dnd, offline]
  client.user.setActivity(`with YouTube with ${client.users.size}`); // Game status
});

client.on('guildMemberAdd', (member) => {
  var joinrole = member.guild.roles.find('name', 'User');
  member.addRole(joinrole);
  const joinchannel = member.guild.channels.find('name', 'bot-spam');
  joinchannel.send('New Member Joined!'); // let's test this out!!! Thanks for watching please subscribe for more videos join my server too.!!!!
});

client.on('message', async message => { // Message Event
  
  if (message.author.bot) return undefined; // Bot doesn't reply to itself
  let msg = message.content.toLowerCase(); // Message content to lowercase
  let args = message.content.slice(prefix.length).trim().split(' '); // Arguments 
  let command = args.shift().toLowerCase(); // Shift arguments to lowercase
  
  try {
    if (command === 'echo') command = 'say';
    if (command === 'sayhitoyt') command = 'youtube';
    if (command === 'ui') command = 'userinfo';
    let commands = require(`./commands/${command}.js`); // Run command folder
    commands.run(client, message, args);
  } catch (e) {
    console.log(e.stack); // Throws the error in console
  } finally {
    console.log(`${message.author.tag} used ${command} command`);
  }
});

client.login(process.env.SECRET);