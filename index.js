const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: `TrulyPain`, type: "LISTENING" }, status: 'online' });
});

client.on('message', msg => {
  client.user.setPresence({ activity: { name: `TrulyPain`, type: "LISTENING" }, status: 'online' });
  if (msg.content === 'Hello' || msg.content === 'hello' || msg.content === 'Hey' || msg.content === 'hey' || msg.content === 'Hi' || msg.content === 'hi') {
    msg.reply('Hello, how are ya?');
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    client.channels.cache.get('850033338579550242').send('Welcome to iGeeks and thanks for joining :fire: :computer: ' + member.toString() +' Please read the rules');
  });

client.login('ODUwMDQxNTkyMTU2Mzg5NDY2.YLj87A.rm69kKc_C_PFpWpzRLlBD1R_1bs');