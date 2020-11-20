const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Some command description here.',
    guildOnly: false,
    nsfw: false,

    execute(bot, message, args) {
        let embed = new Discord.RichEmbed()
            .setColor("#f096ea")
            .setAuthor("Bot Invite")
            .addField("Invite Me:", "[Invite Me](https://discord.com/oauth2/authorize?client_id=757923735171891240&permissions=8&scope=bot)")
            .setFooter("Powered By Cat; " + " Requested by " + message.author.username);
        message.channel.send(embed);
    }
};
