client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат 
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
  const mentionRegex = RegExp(`^<@!?766665508266311730>$`);
  const mentionRegexPrefix = RegExp(`^<@!?766665508266311730$>`);

  if (message.author.bot) return;
  if (message.content.match(mentionRegex)) message.channel.send(`My prefix ?`);
  const prefix = message.content.toLowerCase().match(mentionRegexPrefix) ?
      message.content.match(mentionRegexPrefix)[0] : config.prefix;
  if (!message.content.toLowerCase().startsWith(config.prefix)) return;
})
