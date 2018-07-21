const figlet = require('figlet'); // npm i figlet

exports.run = (client, message, args) => {
  if (!args.join(' ')) return message.channel.send('Please provide text!');
  figlet(args.join(' '), (err, data) => {
    message.channel.send(data, { // send the output to the channel
      code: 'ascii'
    });
  });
};
