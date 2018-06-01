exports.run = (client, message, args) => {
  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
  })
};