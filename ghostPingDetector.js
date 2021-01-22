client.on('messageDelete', (message) => {
        if (message.author.bot) return;

        if (message.mentions.members.first() && !message.mentions.members.first().user.bot && message.mentions.members.first().user.id !== message.author.id) {
            let embed = new MessageEmbed()
                .setTitle('Ghost Ping Detected!')
                .setColor('RANDOM')
                .addField('Author', message.author)
                .addField('Message', message.content);
                 client.channels.cache.get("801912830596218901").send(embed) //replace id with ur ghost ping logs channel id
        }
    })
}
