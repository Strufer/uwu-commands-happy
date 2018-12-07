const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

let falas = ["Oi.", "Adeus.", "Fica quieto.","Não sabia.","Nunca nem vi.","Essa já tinham me contado.","Te amo também <3","Não quero falar com você.","Ta maluco mermão.","Sim, eu já sabia que ele era gay.","Quem disse isso?","Isto é mentira sua.","Strufer é gostoso, disto eu sei.","Eu sou foda? Obrigado.","Não conta pra ninguém, mas eu já tive um caso com a Loritta.","HiddenWhite é desmamado.","Bora call pra jogar menesgréfiti.","Vou comer algo, já volto.","KKKKKKKKKK é mentira sua né?","Já fui, mas não sou mais.","Até parece né?","Hoje meu dia foi uma PORR*.","Tirei 10 na prova de burrice.","Me chama no Whatsapp.","Gostei de você, bora fechar?","Não.","Sim.","Talvez.","Estou te observando, CUIDADO!","Cuidado, estou com tua mãe agora mané.","Adiciona o Strufer - BOT no teu servidor aí.","O que foi brother?","RaffaMoreira, 777.","HueHue BR."]  //Falas que poderá dizer
let falas1 = Math.floor((Math.random() * falas.length));  //Para mandar randómicamente
  
message.channel.createWebhook("Tozé", "https://cdn.discordapp.com/attachments/509863176473673728/512834355563986954/Screenshot_1.png").then(w => {
    w.send(falas[falas1]); //As falas mais o randómicamente resulta no random das falas.
    w.delete();
})
 
//Onde diz tozé é o nome do webhook e o htt... ky... é a imagem que ficará

}
