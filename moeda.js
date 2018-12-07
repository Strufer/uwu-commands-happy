const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.content.split(' ').slice(1).join(' ').length < 1) return message.reply(":flag_br: | Você precisa escrever algo. Escreva ``s!moeda cara`` ou ``s!moeda coroa`` e veja qual resultado vai sair...")
  const rolled = Math.floor(Math.random() * 2) + 1;
  let coin2 = 'https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg'
  let coin1 = 'https://www.dhresource.com/0x0s/f2-albu-g4-M01-CB-6B-rBVaEFf172SADIH4AAxRIyzuR3s387.jpg/united-states-of-america-coins-liberty-head.jpg'

  let headembed = new Discord.RichEmbed()
  
  .addField(`Resultado`, `:flag_br: | Você virou a moeda para: **cara**!`)
  .setThumbnail(coin1)
  .setColor("GREEN");
  let tailembed = new Discord.RichEmbed()
  .setThumbnail(coin2)
  .addField(`Resultado`, `:flag_br: | Você virou a moeda para: **coroa**!`)
  .setColor("GREEN");
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}

module.exports.help = {
  name: "moeda"
}
