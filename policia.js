exports.run = (client, message, args)  => {
    
    var falas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
    let user = message.mentions.users.first();
    var variavel = falas[Math.floor(Math.random() * falas.length)]
    if (message.mentions.users.size < 1) return message.reply('**:flag_br: | Você não mencionou o usuário que deseja chamar a Polícia!**').catch(console.error);
    message.channel.send({embed: {
      description: `:flag_br: | ${message.author} chamou a Policia para ${user}` ,
      color: 000000,
      timestamp: new Date(),
      image: {
        url: `https://static1.squarespace.com/static/5a8272ac8fd4d2d419948712/5b805b2ab8a045cacc76f3f9/5b8066d0352f53cbba24672b/1535141779603/a8e6de7fa2b31402cadb3efdca5b4a6d.gif?format=1000w`
      } 
    }
  })
}
