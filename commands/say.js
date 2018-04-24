exports.run = (client, message, args) => {
    let say = args.join(' '); // Arguments
    message.delete(); // Deletes the content (Usage: !say <text>)
    message.channel.send(say); // Sends the message into the channel
}