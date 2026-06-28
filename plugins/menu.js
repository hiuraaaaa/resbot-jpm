async function menu(sock, sender, message) {
  const templates = `
ㅤ  ㅤ       *(ㅤ  ㅤ  ${global.botName} ㅤ  ㅤ )* 
ㅤ  𝗌𝗍𝖺𝗍𝗎𝗌  𝖺𝖼𝗍𝗂𝗏𝖾  •  𝗎𝗌𝖾𝗋  ${sender.split('@')[0]}
ㅤ  𝟢𝟢  .. 🎱  *𝖿𝗈𝗋𝗆𝖺𝗍  " \`𝗮𝗹𝗹 𝗶𝗻 𝗼𝗻𝗲\`  " /*  ¿?  /

ㅤ   🕸   •   🕷─── *𝖺  𝗆𝗈𝗈𝗇𝗅𝗂𝗀𝗁𝗍  ╮*  
ㅤ  *𝗆𝖾𝗇𝗎   𝗅𝗂𝗌𝗍   𝖺𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾   𝗇𝗈𝗐 - !* 
ㅤ  │┊  ☍ .  𝗅𝗂𝗌𝗍𝗀𝖼
ㅤ  │┊  ☍ .  𝖺𝗎𝗍𝗈𝗃𝗉𝗆
ㅤ  │┊  ☍ .  𝖺𝗎𝗍𝗈𝗋𝖾𝗉𝗅𝗒
ㅤ  │┊  ☍ .  𝗃𝗉𝗆
ㅤ  │┊  ☍ .  𝗃𝗉𝗆𝗍𝖺𝗀
ㅤ  │┊  ☍ .  𝗉𝗎𝗌𝗁𝗄𝗈𝗇𝗍𝖺𝗄
ㅤ  ╰─────────────────────
ㅤ  
ㅤ 🐾  ╮ \`𝗉𝗈𝗐𝖾𝗋𝖾𝖽  𝖻𝗒\`   :   ${global.botName}  .  📓
ㅤ  ╰✪ ${global.botWeb}  ¡!  ${global.botOwner}`;

  await sock.sendMessage(sender, {
    image: { url: global.banner },
    caption: templates,
  });
}

export default menu;
