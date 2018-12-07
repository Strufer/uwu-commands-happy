const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var falas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
    let user= message.mentions.users.first() 
    var variavel = falas[Math.floor(Math.random() * falas.length)]
    if (message.mentions.users.size < 1) return message.reply('**:flag_br: | Você não mencionou o usuário que deseja matar!**').catch(console.error);
    message.channel.send({embed: {
      description: "**:flag_br: | <@" + message.author.id + "> Matou " + user + " :gun:**" ,
      color: "GREEN",
      timestamp: new Date(),
      image: {
        url: `https://thumbs.gfycat.com/SpryColorlessLark-size_restricted.gif`
      } 
    }
  })
}
module.exports.help = {
    name: "matar"
}
