import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½π° π²π°π½π²πΈπΎπ½ π° π±πππ²π°π*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists, preview_url } = json2.result
let spotifyi = `βββββββ¬ πππππππ β­ββββββΎβ\nβ¬\nββ£β¨ *ππΈπππ»πΎ:* ${title}\nβ΄\nβ¬\nββ£π£οΈ *π°πππΈπππ°:* ${artists}\nβ΄\nβ¬\nββ£π *πππ»*: ${link}\nβ΄\nβ¬\nββ£π *πππ» π³π΄ π³π΄ππ²π°ππΆπ°:* ${preview_url}\nβ΄`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
await conn.sendFile(m.chat, preview_url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
throw '*[βππππβ] π΄πππΎπ, π½πΎ ππ΄ π»πΎπΆππΎ π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ πΎ π»π° πΏπ°πΆπΈπ½π° π³π΄ π°πππ³π° πΏπ°ππ° π±πππ²π°π π»π° π²π°π½π²πΈπΎπ½ π΄πππ° π²π°πΈπ³π°, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ πΌπ°π ππ°ππ³π΄*'
}}
handler.command = /^(spotify|music)$/i
export default handler
