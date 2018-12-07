const Discord = require("discord.js")
const cooldown = new Set()

module.exports.run = async (bot, message, args) => {
    if (cooldown.has(message.author.id)) {
        let cooldownemb = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} Esfriar..`, message.author.displayAvatarURL)
        .setDescription(`:flag_br: | Você precisa esperar 5 segundos!`)
        .setColor(`GREEN`)
        .setFooter(`:flag_br: | Esta mensagem será apagada em 5 segundos.`)
        return message.channel.send(cooldownemb).then(message => {
         message.delete(5000) 
        })
        
        }
        cooldown.add(message.author.id);
      
        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, 10000);
      let m421 = args.join(" ");
      if (!m421) return message.reply(`:flag_br: | Por favor, defina um nome!`)
      
      if (m421.length > 30) return message.reply(`:flag_br: | ${user1} Eu não posso avaliar o seu waifu! É mais de 30 textos!`)
      let result = Math.floor((Math.random() * 100) + 0);
      
        const happyrate = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 ❤`)
      .setColor(`GREEN`)
        
          const sadembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 😭`)
      .setColor(`GREEN`)
          
            const idkembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 🤔`)
      .setColor(`GREEN`)
            
          const shrugembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 🤷`)
      .setColor(`GREEN`)
                    
              const okembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 👌`)
      .setColor(`GREEN`)
                            
      const thumbupembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 👍`)
      .setColor(`GREEN`)
      
      const eyesembed = new Discord.RichEmbed()
      .setDescription(`:flag_br: | Eu classificaria **${m421}** ${result}/100 👀`)
      .setColor(`GREEN`)
      
      if (result > 90) return message.channel.send(happyrate)
      if (result < 30) return message.channel.send(sadembed)
      if (result > 40) return message.channel.send(idkembed)
      if (result > 50) return message.channel.send(shrugembed)
      if (result > 60) return message.channel.send(okembed)
      if (result > 70) return message.channel.send(thumbupembed)
      if (result > 80) return message.channel.send(eyesembed)
}
module.exports.help = {
    name: "waifu"
}
