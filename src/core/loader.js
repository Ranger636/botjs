import {REST, Routes} from 'discord.js'
import fg from 'fast-glob'

const updataSlashCommands = () =>{
    const rest = new REST({version: 10}).setToken(process.env.TOKEN)

    rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            process.env.GUILD_ID
        ),
        {
            body:{}
        }
    )
}


export const loadCommands = async() =>{
    const files = await fg('./src/commands/**/index.js')
    console.log(files)
}