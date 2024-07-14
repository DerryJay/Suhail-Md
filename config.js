const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349019406102" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019406102";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_11_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRjK3lSblQwb0hMcnhQUGtJYkR1MnJmZ1NUTlcwUlp4Z244b0hMRWI3WWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNNSUZZdnZKVFdTZk1CREJBRExiRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTc3Nzk3Y2MtNDEzOS00ZDFjLTg3NzMtOTg4Y2QwOGQzM2Q1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDk5LFxuICAgICAgMzEsXG4gICAgICAxMDgsXG4gICAgICAyMDEsXG4gICAgICAxOTIsXG4gICAgICAzLFxuICAgICAgMTQxLFxuICAgICAgMTgyLFxuICAgICAgMjUsXG4gICAgICAxNixcbiAgICAgIDE5MSxcbiAgICAgIDE1NyxcbiAgICAgIDE1NyxcbiAgICAgIDg1LFxuICAgICAgMTU0LFxuICAgICAgMTYxLFxuICAgICAgNDYsXG4gICAgICAyMzEsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjE0LFxuICAgICAgMTgwLFxuICAgICAgMzAsXG4gICAgICAyNDAsXG4gICAgICA4MyxcbiAgICAgIDQ4LFxuICAgICAgNjQsXG4gICAgICAyMzgsXG4gICAgICAxMDgsXG4gICAgICAxNTYsXG4gICAgICAxNDUsXG4gICAgICAxMTQsXG4gICAgICAyNSxcbiAgICAgIDE0NixcbiAgICAgIDY3LFxuICAgICAgMTcyLFxuICAgICAgMjE5LFxuICAgICAgMTU2LFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDNaTkZWM0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk0MDYxMDI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3Njg1ODQ4NzY0NTU5OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtGbmY4QkVKVHh6N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4TGNhWnFiTTlLbUR3QUlUSUdlN3RndnIxZ1Mzbzh3V3MrSGRkeHhIYm5rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkF2MTN1czhuK1IzZFl4SjA3cm8xeURUVGE4WnRpRi9CUlhGb0gvL0dZSjZnMDJIRWFLWjlDS0JncU5PdXlMcUo1R0paSDRnRjJURnVGOE8wWnNlckJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZXRTNaWGZqMUpnK2luV2pJODJMaC9NdE5yWk96TWlyMEN3MzFvSU9hOGZmSmU5aUErcGRhVWdOVzQzcElvUDJXUjRjelpRdURjWUNrc2hCajUvNWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTk0MDYxMDI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5NzM0NjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCd2dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJ3Zy5qc29uIjogIntcImtleURhdGFcIjpcIk5sMnF2QmdCRWF3RmZzeGxuS1pmaXZJekZCdlp4eVltOTlBOXkvQ2ZwUUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM1MjQ5NTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NzM0NzA1MzJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
