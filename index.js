/**
 * 🔥 ZAMANX BOT - Pro Index.js
 * 🚀 Advanced Features by Pro Dev
 */

const fs = require("fs");
const readline = require("readline");
const P = require("pino");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason
} = require("@whiskeysockets/baileys");

const { handleCommand } = require("./menu/case");
const { loadSettings } = require("./settings");
const { storeMessage, handleMessageRevocation } = require("./antidelete");
const AntiLinkKick = require("./antilinkick.js");
const { antibugHandler } = require("./antibug.js");

// ✅ readline setup
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth_info");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({ version, auth: state, logger: P({ level: "fatal" }) });

  const settings = typeof loadSettings === "function" ? loadSettings() : {};
  let ownerRaw = settings.ownerNumber?.[0] || "92300xxxxxxx";
  const ownerJid = ownerRaw.includes("@s.whatsapp.net") ? ownerRaw : ownerRaw + "@s.whatsapp.net";

  // 🌍 Globals
  global.sock = sock;
  global.settings = settings;
  global.signature = settings.signature || "> 𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪👑";
  global.owner = ownerJid;
  global.ownerNumber = ownerRaw;

  // 🔧 Flags
  global.antilink = {};
  global.antilinkick = {};
  global.antibug = false;
  global.autogreet = {};
  global.autotyping = false;
  global.autoreact = false;
  global.autostatus = false;
  global.aiChat = false; // ✅ AI toggle

  console.log("✅ BOT OWNER:", global.owner);

  sock.ev.on("creds.update", saveCreds);

  // 🔥 Auto Bio Updater
  setInterval(async () => {
    try {
      const uptime = Math.floor(process.uptime() / 60);
      await sock.updateProfileStatus(`⚡ ZAMANX BOT | Uptime: ${uptime} mins`);
    } catch {}
  }, 30 * 60 * 1000);

  // ✅ Connection Updates
  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "open") {
      console.log("✅ [BOT ONLINE] Connected to WhatsApp!");

      // 🔥 First-time Welcome
      try {
        const welcomeText = `
╭━━〔𓆩⚡ 𝙕𝘼𝙈𝘼𝙉 𝙓 ⚡𓆪〕━╮
┃ ✅ Bot Successfully Linked!
┃ 👑 Owner: ZAMAN X
┃ 📢 Channel: https://whatsapp.com/channel/0029VbB45OnAInPcfOvoYm46
┃ 💀 Status: PROTOCOL ACTIVE
╰━━━━━━━━━━━━━━━━━╯

*『🚀 Welcome to ZAMANX BOT World!』*
`;
        await sock.sendMessage(sock.user.id, {
          image: fs.existsSync("./media/welcome.jpg")
            ? { url: "./media/welcome.jpg" }
            : undefined,
          caption: welcomeText
        });
      } catch {}
    }
    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
      console.log("❌ Disconnected. Reconnecting:", shouldReconnect);
      if (shouldReconnect) startBot();
    }
  });

  // ✅ Messages
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message) return;
    const jid = msg.key.remoteJid;
    const text =
      msg.message?.conversation || msg.message?.extendedTextMessage?.text || "";

    // 🌟 Auto Reply
    if (/^(hi|hello|salam)$/i.test(text)) {
      await sock.sendMessage(jid, { text: `👋 Hey ${msg.pushName || "User"}, Welcome to ZAMANX BOT ⚡` });
    }

    // 🌟 AI Chat (toggle)
    if (global.aiChat && !msg.key.fromMe && jid !== "status@broadcast") {
      await sock.sendMessage(jid, { text: `🤖 [AI]: ${text} (AI reply yahan ayega)` });
    }

    // ✅ AntiDelete
    if (settings.ANTIDELETE === true) {
      try {
        if (msg.message) storeMessage(msg);
        if (msg.message?.protocolMessage?.type === 0) {
          await handleMessageRevocation(sock, msg);
          return;
        }
      } catch (err) {
        console.error("❌ AntiDelete Error:", err.message);
      }
    }

    // ✅ AutoTyping
    if (global.autotyping && jid !== "status@broadcast") {
      await sock.sendPresenceUpdate("composing", jid);
    }

    // ✅ AutoReact
    if (global.autoreact && jid !== "status@broadcast") {
      const reacts = ["🔥", "⚡", "❤️", "💀", "👑"];
      const random = reacts[Math.floor(Math.random() * reacts.length)];
      await sock.sendMessage(jid, { react: { text: random, key: msg.key } });
    }

    // ✅ Flood Protection (basic)
    if (text.length > 500) {
      await sock.sendMessage(jid, { text: "⚠️ Spam detected. Message removed." });
      return;
    }

    // ✅ Command handler
    try {
      await handleCommand(sock, msg, {});
    } catch (err) {
      console.error("❌ Command error:", err.message);
    }
  });

  // ✅ Group Updates
  sock.ev.on("group-participants.update", async (update) => {
    const { id, participants, action } = update;
    if (!global.autogreet?.[id]) return;
    for (const user of participants) {
      const tag = `@${user.split("@")[0]}`;
      if (action === "add") {
        await sock.sendMessage(id, {
          text: `⚡ Welcome ${tag} to the group!`,
          mentions: [user]
        });
      } else if (action === "remove") {
        await sock.sendMessage(id, {
          text: `👋 Goodbye ${tag}`,
          mentions: [user]
        });
      }
    }
  });

  // ✅ Pairing Code
  if (!state.creds?.registered) {
    if (!global.phoneNumber) {
      global.phoneNumber = await question("📱 Enter your WhatsApp number (with country code): ");
    }
    await sock.requestPairingCode(global.phoneNumber.trim());
    setTimeout(() => {
      const code = sock.authState.creds?.pairingCode;
      if (code) {
        console.log("\n🔗 Pair this device using this code in WhatsApp:\n");
        console.log("   " + code + "\n");
        console.log("Go to WhatsApp → Linked Devices → Link with code.");
      }
    }, 1000);
  }
}

startBot();

// ✅ Error logger
process.on("uncaughtException", (err) => {
  fs.appendFileSync("error.log", `[${new Date().toISOString()}] ${err.stack}\n`);
  console.error("❌ Uncaught Error:", err.message);
});

// ✅ Cleanup
process.on("exit", () => rl.close());
