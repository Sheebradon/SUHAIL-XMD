const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || " SUHAIL_14_30_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZNQ3FWSHNQa2ZYZ0RWODJOTDZvdmxsanpPaEEyNDExbEdkempvL3JKYnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlXelJtNWNfUWdPMmJRZnk4SmpwR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQ1ZjYzYjgtNTNlNy00YWQyLWE3NTktOWViMzJmNjNmOWVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDIyMSxcbiAgICAgIDE4OCxcbiAgICAgIDIyMCxcbiAgICAgIDE3OSxcbiAgICAgIDE1MCxcbiAgICAgIDEyNixcbiAgICAgIDIzMyxcbiAgICAgIDE0OSxcbiAgICAgIDg2LFxuICAgICAgNixcbiAgICAgIDc5LFxuICAgICAgMjEsXG4gICAgICA5NSxcbiAgICAgIDk0LFxuICAgICAgMjQ2LFxuICAgICAgOTUsXG4gICAgICAyNDYsXG4gICAgICA0MyxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNCxcbiAgICAgIDk5LFxuICAgICAgMTM2LFxuICAgICAgMTc2LFxuICAgICAgMTA4LFxuICAgICAgMTcsXG4gICAgICAzMCxcbiAgICAgIDg1LFxuICAgICAgMTE0LFxuICAgICAgNzAsXG4gICAgICAyMzcsXG4gICAgICAxNjAsXG4gICAgICAxNzksXG4gICAgICA2NyxcbiAgICAgIDIyOCxcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDdORUhNWTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMjE0ODk0Mjo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY4MzY2ODg3NTY3NDU0Ojc2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TVThZb0NFSTNMMmJnR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2RTaVpwVHRWNzc0WTIrellFZXBWSjdWRlJyMTJtOU5qa1RtTVdTcVdSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZRU5aVUx0dHprOTJndm1MN3NzdEpQYWppUmFOc2MxSWFXNGNmUHlOMEs3SFhDcmlwVGRFVUs4MW1YYm80Zmt5SjBrczdzK3VTelRGWTU1bkYzVGtCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRQXBXRVNHVVpJUUxoMzdGWlRxaHErd1FCRC8zOHVzK3B4MVlmOEQ4Z2R3WUl5SGlrUTB4K0JibHZXSW56ekN3anVXZUZYUFpWM1FnaGVHSFhaZEFDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDIxNDg5NDI6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTIxMDQxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
