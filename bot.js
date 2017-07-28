var discord = require("discord.js");
var music = require("discord.js-music-v11");
var bot = new discord.Client();

music(bot, {
	prefix: '!',       
	maxQueueSize: 10, 
	clearInvoker: true,
	anyoneCanSkip: true
});

bot.login("MzM5MjA2NjgwOTI1NDM3OTUy.DFll8A.c1dABCFPvYj2caPks3ydZnJJEQ4");