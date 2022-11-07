import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
let info = await fetch('https://raw.githubusercontent.com/CyborgC4t/varios-archivos/main/trabas/traba10.txt').then(v => v.text());
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🤖 by CyborgC4t 🐈', 'status@broadcast')}
handler.command = ['virus10', 'c10', 'binario10', 'traba10', 'crash10'] 
handler.rowner = true
handler.fail = null
export default handler 
