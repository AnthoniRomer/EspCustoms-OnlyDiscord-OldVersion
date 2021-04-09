const Discord = require('discord.js');

module.exports = {
    name: 'decir',
    category: 'moderation',
    description: 'ESP repite lo que le dices / añadiendo embed podras escribir un embed.',
    usage: `decir`,
    run: (client, message, args) => {
        message.delete()

        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send('No tienes permiso para usar este comando.').then(m => m.delete({timeout: 5000}));
        
        if (args.length < 1)
            return message.channel.send('Debes especificar algo para que el bot repita!').then(m => m.delete({timeout: 5000}));

        if (args[0].toLowerCase() === 'embed') {
            const embed = new Discord.MessageEmbed()
                .setColor(process.env.COLOREMBED)
                .setDescription(args.slice(1).join(' '))

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(' '));
        }
    }
}