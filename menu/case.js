/**
 * 🔥 ZAMANX BOT - Full Menu System
 * 👑 Made with ❤️ by 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
 */

module.exports.handleCommand = async (sock, msg, extra) => {
  try {
    const jid = msg.key.remoteJid;
    const text =
      msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";
    const sender = msg.pushName || "User";

    const prefix = ".";
    if (!text.startsWith(prefix)) return;

    const command = text.slice(1).trim().split(" ")[0].toLowerCase();

    // ---------------- MAIN MENU ----------------
    if (command === "menu" || command === "help") {
      const menuText = `
╭━━〔𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑〕━╮
┃ 👋 Hello, *${sender}*
┃ 📌 Prefix: ${prefix}
┃ 👑 Owner: ZAMAN X
╰━━━━━━━━━━━━━━━━━╯

✨ *Main Menu* ✨

📖 Quran → ${prefix}quranmenu
🤖 AI → ${prefix}aimenu
🎭 Anime → ${prefix}animemenu
😍 Reactions → ${prefix}reactionmenu
🔄 Convert → ${prefix}convertmenu
😂 Fun → ${prefix}funmenu
⬇️ Downloader → ${prefix}dlmenu
👥 Group → ${prefix}groupmenu
⚙️ Other → ${prefix}othermenu
👑 Owner → ${prefix}ownermenu

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: menuText });
    }

    // ---------------- QURAN MENU ----------------
    else if (command === "quranmenu") {
      const quranText = `
📖 *QURAN MENU* 📖

${prefix}quran - 🕋 Get Quran verse
${prefix}surah - 📖 Surah info
${prefix}ayat - ✨ Ayat translation

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: quranText });
    }

    // ---------------- AI MENU ----------------
    else if (command === "aimenu") {
      const aiText = `
🤖 *AI MENU* 🤖

${prefix}ai - 💡 Ask AI anything
${prefix}img - 🎨 AI Image Generator
${prefix}chatgpt - 🧠 Chat with GPT
${prefix}stickerai - 🔥 AI Sticker Maker

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: aiText });
    }

    // ---------------- ANIME MENU ----------------
    else if (command === "animemenu") {
      const animeText = `
🎭 *ANIME MENU* 🎭

${prefix}anime - 🎬 Random Anime Info
${prefix}manga - 📚 Random Manga Info
${prefix}waifu - 💖 Random Waifu
${prefix}neko - 🐱 Random Neko

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: animeText });
    }

    // ---------------- REACTION MENU ----------------
    else if (command === "reactionmenu") {
      const reactionText = `
😍 *REACTION MENU* 😍

${prefix}hug - 🤗 Hug someone
${prefix}kiss - 😘 Kiss someone
${prefix}slap - 👋 Slap someone
${prefix}pat - 🐾 Pat someone

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: reactionText });
    }

    // ---------------- CONVERT MENU ----------------
    else if (command === "convertmenu") {
      const convertText = `
🔄 *CONVERT MENU* 🔄

${prefix}sticker - 🎭 Image/Video to Sticker
${prefix}toimg - 🖼️ Sticker to Image
${prefix}tomp3 - 🎵 Video to MP3
${prefix}tourl - 🌐 File to URL

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: convertText });
    }

    // ---------------- FUN MENU ----------------
    else if (command === "funmenu") {
      const funText = `
😂 *FUN MENU* 😂

${prefix}joke - 🤣 Random Joke
${prefix}meme - 😂 Random Meme
${prefix}quote - 🧠 Random Quote
${prefix}fact - 📘 Random Fact

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: funText });
    }

    // ---------------- DOWNLOADER MENU ----------------
    else if (command === "dlmenu") {
      const dlText = `
⬇️ *DOWNLOADER MENU* ⬇️

${prefix}ytmp3 - 🎵 YouTube to MP3
${prefix}ytmp4 - 🎬 YouTube to MP4
${prefix}tiktok - 🎶 TikTok Video
${prefix}insta - 📸 Instagram Post

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: dlText });
    }

    // ---------------- GROUP MENU ----------------
    else if (command === "groupmenu") {
      const groupText = `
👥 *GROUP MENU* 👥

${prefix}kick - 🔨 Remove member
${prefix}add - ➕ Add member
${prefix}promote - 👑 Promote to admin
${prefix}demote - 👤 Demote admin
${prefix}link - 🔗 Get group link

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: groupText });
    }

    // ---------------- OTHER MENU ----------------
    else if (command === "othermenu") {
      const otherText = `
⚙️ *OTHER MENU* ⚙️

${prefix}ping - ⚡ Check bot speed
${prefix}about - 👑 Bot Info
${prefix}owner - 📞 Contact Owner

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: otherText });
    }

    // ---------------- OWNER MENU ----------------
    else if (command === "ownermenu") {
      const ownerText = `
👑 *OWNER MENU* 👑

${prefix}setpp - 🖼️ Change Bot DP
${prefix}setbio - ✍️ Change Bio
${prefix}block - ⛔ Block user
${prefix}unblock - ✅ Unblock user

━━━━━━━━━━━━━━━━━━
> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
`;
      await sock.sendMessage(jid, { text: ownerText });
    }

    // ---------------- UNKNOWN COMMAND ----------------
    else {
      await sock.sendMessage(jid, {
        text: `⚠️ Unknown command: *${prefix}${command}*  
Type *${prefix}menu* to see available commands 📜`,
      });
    }
  } catch (err) {
    console.error("❌ Command Error:", err.message);
  }
};
