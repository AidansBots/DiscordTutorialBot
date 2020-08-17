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
    }
})

bot.login('insert token');
