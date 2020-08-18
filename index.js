const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = 'insert prefix';

bot.once('ready', () => {
    console.log('Our bot is online')
});

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === `test`){
        message.channel.send('I am working!');
    } else if(command === 'ping'){
        message.channel.send('pong!')
    } else if(command === 'embed'){
        const testEmbed = new Discord.MessageEmbed();
        testEmbed.setTitle('User Info');
        testEmbed.setDescription(`Username: ${message.author.username}\n ID: ${message.author.id}`);
        testEmbed.setColor('#34ebc9');
        testEmbed.setTimestamp();
        testEmbed.setFooter('Made by Aidan#2917 | Make sure to like and sub!');
        testEmbed.setImage(`https://p1.hiclipart.com/preview/373/977/320/discord-for-macos-white-and-blue-logo-art.jpg`)
        message.channel.send(testEmbed);
}})

bot.login('insert token');
