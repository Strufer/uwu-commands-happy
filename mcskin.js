const Discord = require("discord.js");
exports.run = async (client, message, args) => {

let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('**:flag_br: | Cite um nick de Minecraft!**');
  
  let embed = new Discord.RichEmbed()

  .setTitle(`:frame_photo: | ${args[0]}`)
.setImage(`https://mc-heads.net/body/${args[0]}`)
 .setFooter(message.author.tag, message.author.avatarURL )
  .setTimestamp(new Date())
  .setColor('GREEN')
  message.channel.send(embed)
};
