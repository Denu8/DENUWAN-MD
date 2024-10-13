const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "about2",
    desc: "To get the bot informations Denuwan Md",
    react: "💗",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*Hey I'm DENUWAN MD Bot* ⚔

             _Created By WHITE-DEVIL Team_ 🔱

              𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝚃𝙷𝙴 𝙱𝙾𝚃`

const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "MENU",
          id: `${prefix}menu`
        })
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "PING",
          id: `${prefix}ping`
        })
      }

return await conn.sendMessage(from,{image: {url: `https://unitedcamps.in/Images/file_4270.jpg`},caption:about},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
