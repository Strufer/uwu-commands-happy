exports.run = (client, message, args)  => {

    let reason = args.slice(0).join(' ');

      if (reason.length < 1) return message.channel.send(':flag_br: | '+ message.author + " diga uma mensagem!");

    message.channel.sendMessage(`:pencil: | Palavra revertida por: **${message.author.username}** \n \n **` + args.join(' ').split('').reverse().join('') + '**');

}
