/**
 * 🔥 ZAMANX BOT - Core Functions
 * 👑 Made with ❤️ by 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑
 */

const axios = require("axios");
const fs = require("fs");
const path = require("path");

// 🌟 Random helper
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const randomEmoji = () => {
  const emojis = ["🔥", "⚡", "❤️", "💀", "👑", "😂", "✨", "🤖"];
  return emojis[Math.floor(Math.random() * emojis.length)];
};

// 🌟 JSON Fetcher
async function fetchJson(url, options = {}) {
  try {
    const res = await axios({ url, method: "GET", ...options });
    return res.data;
  } catch (e) {
    return { error: true, message: e.message };
  }
}

// 🌟 Buffer Downloader
async function getBuffer(url, options = {}) {
  try {
    const res = await axios({
      method: "GET",
      url,
      responseType: "arraybuffer",
      ...options,
    });
    return Buffer.from(res.data, "binary");
  } catch (e) {
    console.error("❌ Buffer Error:", e.message);
    return null;
  }
}

// 🌟 File Saver
function saveFile(buffer, filename) {
  try {
    const filePath = path.join(__dirname, "media", filename);
    fs.writeFileSync(filePath, buffer);
    return filePath;
  } catch (e) {
    console.error("❌ Save File Error:", e.message);
    return null;
  }
}

// 🌟 Group Utils
async function groupAdd(sock, jid, number) {
  try {
    await sock.groupParticipantsUpdate(jid, [number + "@s.whatsapp.net"], "add");
    return true;
  } catch (e) {
    console.error("❌ Add Error:", e.message);
    return false;
  }
}

async function groupKick(sock, jid, number) {
  try {
    await sock.groupParticipantsUpdate(jid, [number + "@s.whatsapp.net"], "remove");
    return true;
  } catch (e) {
    console.error("❌ Kick Error:", e.message);
    return false;
  }
}

async function groupPromote(sock, jid, number) {
  try {
    await sock.groupParticipantsUpdate(jid, [number + "@s.whatsapp.net"], "promote");
    return true;
  } catch (e) {
    console.error("❌ Promote Error:", e.message);
    return false;
  }
}

async function groupDemote(sock, jid, number) {
  try {
    await sock.groupParticipantsUpdate(jid, [number + "@s.whatsapp.net"], "demote");
    return true;
  } catch (e) {
    console.error("❌ Demote Error:", e.message);
    return false;
  }
}

// 🌟 Sticker Helper
async function sendSticker(sock, jid, buffer, quoted) {
  try {
    await sock.sendMessage(jid, { sticker: buffer }, { quoted });
  } catch (e) {
    console.error("❌ Sticker Error:", e.message);
  }
}

// 🌟 Text Sender with Branding
async function sendBrandedText(sock, jid, text, quoted) {
  const branded = `${text}\n\n━━━━━━━━━━━━━━━━━━\n> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑`;
  await sock.sendMessage(jid, { text: branded }, { quoted });
}

module.exports = {
  sleep,
  randomEmoji,
  fetchJson,
  getBuffer,
  saveFile,
  groupAdd,
  groupKick,
  groupPromote,
  groupDemote,
  sendSticker,
  sendBrandedText,
};
