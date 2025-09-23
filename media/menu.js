// 📂 menu.js  
// 🌟 Full Stylish Global Menu — ZAMANX BOT  

const more = String.fromCharCode(8206)  
const readMore = more.repeat(2001)  
const moment = require('moment-timezone')  

// Dynamic date, time & uptime  
const date = moment().tz('Asia/Karachi').format('DD-MMM-YYYY')  
const time = moment().tz('Asia/Karachi').format('hh:mm A')  
const uptimeSec = process.uptime()  
const hours = Math.floor(uptimeSec / 3600)  
const minutes = Math.floor((uptimeSec % 3600) / 60)  
const seconds = Math.floor(uptimeSec % 60)  
const uptimeStr = `${hours}h ${minutes}m ${seconds}s`  

// Status box to show at menu start & each category start  
const statusBox = `  
╭━━〔𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪〕━╮  
┃ 🔥 Mode: PRIVATE | FULL POWER  
┃ 💀 Status: ZAMAN PROTOCOL ACTIVE  
┃ 👑 Owner: 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ❦︎𓆪  
┃ ⚡ Version: 6.6.6 (X Build)  
┃ ⏳ Uptime: ${uptimeStr}  
┃ 📅 Date: ${date}  
┃ 🕒 Time: ${time}  
┃ 📌 Commands: 222+ Loaded  
┃ 📱 Device: ANDROID-XCORE  
╰━━━━━━━━━━━━━━━━━╯  
`  

global.menu = `  
${statusBox}  
╔═══❖•⊰ *ZAMANX BOT ALL MENU* ⊱•❖═══╗  
║◈ .menu  
║◈ .menuowner  
║◈ .downloadmenu  
║◈ .groupmenu  
║◈ .automenu  
║◈ .aimenu  
║◈ .githubmenu  
║◈ .logomenu  
║◈ .toolsmenu  
║◈ .textmenu  
║◈ .utilitymenu  
║◈ .exploitsmenu  
║◈ .photomenu  
║◈ .reactmenu  
║◈ .gamemenu  
║◈ .funmenu  
║◈ .animemenu  
╚═══════════════╝  
${readMore}  

*『𝙄𝙛 𝙮𝙤𝙪 𝙘𝙖𝙣'𝙩 𝙝𝙖𝙣𝙙𝙡𝙚 𝙩𝙝𝙚 𝙝𝙚𝙖𝙩... 𝙙𝙤𝙣'𝙩 𝙩𝙤𝙪𝙘𝙝 𝙩𝙝𝙚 𝙛𝙞𝙧𝙚. 🔥』*  
*『Signed off by 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪 🚀』*  
${readMore}  
`  

// ================== OWNER MENU ==================  
global.ownermenu = `  
${statusBox}  
╔══❖•⊰ 👑 OWNER MENU ⊱•❖══╗  
║1. Self ✅  
║2. Public ✅  
║3. Block ✅  
║4. Nice ✅  
║5. Repo ✅  
║6. Restart ✅  
║7. Shutdown ✅  
║8. Setbio ✅  
║9. Setname ✅  
║10. Setpp ✅  
║11. Save ✅  
║12. Join ✅  
║13. Leave ✅  
║14. Delaymsg ✅  
║15. Numinfo ✅  
║16. Del ✅  
║17. Reactch ✅  
║18. Idcheck ✅  
╚══════════════╝  
`  

// ================== DOWNLOAD MENU ==================  
global.downloadmenu = `  
${statusBox}  
╔══❖•⊰ 📥 DOWNLOAD MENU ⊱•❖══╗  
║1. Video ✅  
║2. Video2 ✅  
║3. MediaFire ✅  
║4. Song ✅  
║5. Song2 ✅  
║6. Play ✅  
║7. Gitclone ✅  
║8. TikTok ✅  
║9. Insta ✅  
║10. FB ✅  
║11. IMG ✅  
║12. APK ✅  
║13. Ytmp4 ✅  
║14. Ytmp3 ✅  
╚═══════════╝  
`  

// ================== AUTO MENU ==================  
global.automenu = `  
${statusBox}  
╔══❖•⊰ 🤖 AUTO MENU ⊱•❖══╗  
║1. Antilink ✅  
║2. Antilinkick ✅  
║3. Antibug ✅  
║4. Antidelete ✅  
║5. Autostatus ✅  
║6. Autoreact ✅  
║7. AutoGreet ✅  
║8. AutoTyping ✅  
║9. Autorecording ✅  
║10. Autoread ✅  
╚═══════════════╝  
`  

// ================== AI MENU ==================  
global.aimenu = `  
${statusBox}  
╔══❖•⊰ ⚡ AI MENU ⊱•❖═╗  
║1. Chatgpt ✅  
║2. LLama ✅  
║3. Claude ✅  
║4. Mistral ✅  
╚═════════╝  
`  

// ================== GROUP MENU ==================  
global.groupmenu = `  
${statusBox}  
╔═❖•⊰ 👥 GROUP MENU ⊱•❖══╗  
║1. Kick ✅  
║2. Add ✅  
║3. Kickall ✅  
║4. Open ✅  
║5. Close ✅  
║6. Tagall ✅  
║7. Tagadmin ✅  
║8. Hidetag ✅  
║9. Listactive ✅  
║10. Changename ✅  
║11. Closetime ✅  
║12. Ginfo ✅  
║13. Warn ✅  
║14. Gpp ✅  
║15. Promote ✅  
║16. Demote ✅  
║17. Promoteall ✅  
║18. Demoteall ✅  
║19. Adminkill ✅  
║20. Leave ✅  
╚═══════════════╝  
`  

// ======= Baaki menus bhi isi style me aapke naam aur design ke sath replace ho jayenge ======  

module.exports = {  
  menu: global.menu,  
  ownermenu: global.ownermenu,  
  downloadmenu: global.downloadmenu,  
  automenu: global.automenu,  
  aimenu: global.aimenu,  
  groupmenu: global.groupmenu,  
  githubmenu: global.githubmenu,  
  logomenu: global.logomenu,  
  toolsmenu: global.toolsmenu,  
  textmenu: global.textmenu,  
  utilitymenu: global.utilitymenu,  
  exploitsmenu: global.exploitsmenu,  
  photomenu: global.photomenu,  
  reactmenu: global.reactmenu,  
  gamemenu: global.gamemenu,  
  funmenu: global.funmenu,  
  animemenu: global.animemenu  
}