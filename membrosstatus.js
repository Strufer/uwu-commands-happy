const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
  let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
  let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
  let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;

  let statusembed = new Discord.RichEmbed()
  .setColor("GREEN")
  .addField('Status dos Membros', `
  **:white_check_mark: | Online:** ${MembrosOnline}
   **:warning:| Ausentes:** ${MembrosAusente} 
   **:no_entry: | Ocupado:** ${MembrosOcupado} 
   **:white_circle: | Offline:** ${MembrosOffline} `) ;
  
  message.channel.send(statusembed);
    

}
module.exports.help = {
    name: "membrosstatus"
}
