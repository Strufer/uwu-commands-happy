const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
    let user = message.mentions.users.first() || message.author;
    if(message.mentions.users.size < 1) return message.reply(":flag_br: | Você precisa mencionar alguém.")
    var embed =  new Discord.RichEmbed()
      .setImage(user.displayAvatarURL)
      .setColor('GREEN')
      .setTitle('Avatar')
      .setFooter(`message.guild.iconURL`)
      .setFooter(`<@${user}>`)
      .setDescription(user+":flag_br: | Clique aqui => "+"[Download]("+user.displayAvatarURL+")")
      .setFooter(`Criado por ${bot.user.tag}`, (bot.user.displayAvatarURL))
      message.channel.send(embed);
}

module.exports.help = {
    name: "avatar"
}
