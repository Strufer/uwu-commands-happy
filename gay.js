const Discord = require("discord.js");

module.exports.run = async (bot, message, args,) => {
  
    if(message.mentions.users.size < 1) return message.reply(":flag_br: | Você precisa mencionar alguém.")
    let user1 = message.mentions.users.first() || message.author;
    let gay = Math.round(Math.random() * 100);
    
    let gayembed = new Discord.RichEmbed()
    
        .setColor("GREEN")
        .setTitle(`:gay_pride_flag: | **eu acho que ${user1.tag} e ${gay}% gay!**`);
    return message.reply(gayembed);
}; 
module.exports.help = {
    name: "gay"
};
