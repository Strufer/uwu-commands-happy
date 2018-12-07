const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user= message.mentions.users.first() || message.author;
  if(!user) return message.channel.send(':flag_br: | Você precisa mencionar alguém para abraçar!');
  let gifs = ['https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif'] 
  let random = Math.round(Math.random() * gifs.length);
  let embed = new Discord.RichEmbed()
      .setTitle(`:flag_br: | ${message.author.tag} deu um abraço no (a) ${user.tag} :raised_hands: `)
      .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
      .setColor('GREEN')
      .setTimestamp()
      message.reply(embed);
    

}
module.exports.help = {
    name: "abraçar"
}
