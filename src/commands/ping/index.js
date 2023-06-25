import { SlashCommandBuilder} from 'discord.js'


export const comment = new SlashCommandBuilder().setName('ping').setDescription('ping command') 


export const action = async (ctx) => {
    ctx.reply('pong !')

}