const {cmd , commands} = require('../command')

cmd({
    pattern: "help",
    desc: "help the  bot",
    category: "main",
    react: "🔱",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*👾 ԃҽɳυɯαɳ ɱԃ ɯα Ⴆσƚ 👨‍💻💗*

*Thanks For Using* 💥

_Get .allmenu For The Bot All Menu_ ⚔

> *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙴𝙽𝚄𝚆𝙰𝙽-𝙼𝙳*
`;

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
      },
      {
        "name": "cta_url",
        "buttonParamsJson": JSON.stringify({
          display_text: "CHANEL OF BOT",
          id: `https://whatsapp.com/channel/0029VaivwGS96H4baEiYFE1s`
        })
      }


await conn.sendMessage(from,{image:{url: `https://unitedcamps.in/Images/file_4270.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
