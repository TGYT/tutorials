const figlet = require('figlet'); // require method

exports.run = (client, message, args) => { // importing...
  if (!args.join(' ')) return message.channel.send('Please provide text!');
  figlet(args.join(' '), (err, data) => {
    message.channel.send(data, { // send the output to the channel
      code: 'ascii'
    });
  });
};
// let's test this out! That's it for today!!! Join our Discord server.