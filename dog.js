const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(":flag_br: | Seu cachorro é esse!")
    .setImage(body.url);

    message.channel.send(dogembed);
}

//antes installe o superagent: npm install superagent
