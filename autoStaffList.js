client.on("ready", () => {
    console.log("Auto StaffLists Enabled")
    setInterval(async function () {
    let msg = await client.channels.cache
    .get("801760318681382924") // the channel where your bots message id is in
    .messages.fetch("801796545028030506") // your bots message id so that he can edit it 
    let stafflist = new MessageEmbed()
    .setColor("RED") 
    .setTitle("Automatic StaffLister")   
    .setDescription([      //replace all the ids below with your staff list server id and replace all role ids with your roles
       `Owners: ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "774862061666435142").members.map(m=>`\`${m.user.tag}\``).join(", ")}`,
       `Head Admin: ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "774176113684643850").members.map(m=>`\`${m.user.tag}\``).join(", ")}`,
       `Admins: ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "769619457101660181").members.map(m=>`\`${m.user.tag}\``).join(", ")}`,
       `Head Moderator: ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "774210609075060736").members.map(m=>`\`${m.user.tag}\``).join(", ")}`,
       `Moderator: ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "769622349955465248").members.map(m=>`\`${m.user.tag}\``).join(", ")}`, 
        `Chill's Helper(s): ${client.guilds.cache.get("738322779308556308").roles.cache.find(r=>r.id == "778599764999798826").members.map(m=>`\`${m.user.tag}\``).join(", ")}`
]) //replace the names with your role names
    msg.edit(stafflist);
    }, 10000)
})
