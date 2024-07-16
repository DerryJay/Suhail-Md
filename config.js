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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_30_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcHdiN20wQUZBTTF2VXhoR3ZaUXo5MEs1a3hwSkQvbWFFVnlrckltNmJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVVS04U2hSb1FNaXd0Mmw2LTFTRGd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI5ZDRiNDhjLTA5MDgtNGYxNS05N2E3LTgzNTg4NGFiZWQ3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAyMyxcbiAgICAgIDI3LFxuICAgICAgMjI3LFxuICAgICAgMTUyLFxuICAgICAgMjU0LFxuICAgICAgMjQzLFxuICAgICAgMzcsXG4gICAgICAxNzQsXG4gICAgICAxODgsXG4gICAgICAyNDEsXG4gICAgICA0NixcbiAgICAgIDU3LFxuICAgICAgMTY2LFxuICAgICAgNzcsXG4gICAgICAxMDMsXG4gICAgICAxMDUsXG4gICAgICAxNzEsXG4gICAgICAxNjIsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMjMsXG4gICAgICAxODYsXG4gICAgICAxMTcsXG4gICAgICAyMDQsXG4gICAgICAxNixcbiAgICAgIDE4MSxcbiAgICAgIDEwMyxcbiAgICAgIDIwOCxcbiAgICAgIDgyLFxuICAgICAgODAsXG4gICAgICAxMTEsXG4gICAgICA0MixcbiAgICAgIDEwOCxcbiAgICAgIDE3NSxcbiAgICAgIDE1MyxcbiAgICAgIDIwOCxcbiAgICAgIDIwMCxcbiAgICAgIDE4MixcbiAgICAgIDg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxZRFRBWEdNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE5NDA2MTAyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc2NDU1OTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TRm5mOEJFTHo0MnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieExjYVpxYk05S21Ed0FJVElHZTd0Z3ZyMWdTM284d1dzK0hkZHh4SGJuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4Z2pGS3dsaHgvVzRwTyttVUUzTEFPVXlGZVlSQWw3a3RaZ00vT1FXcFdmdGhLU3lDOG1KM0h1bWp4SXZUTUwzbGtxSUZTaVVvOWpmQnNPWWp2Y3hBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOamZqR25QenFqd1hScDlLVDhvYlp4ZHYvR01LRlpncS9XTkJpb0NUbnpmYmd2SjczWjB2YVNTMnlQWFQ0dFpFcHJYSlJ2cTArOGdhcGVIRmxiWmdnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5NDA2MTAyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTU0NjI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUE1GXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJacWgwT0lyOWU2ck9mSlZiVWg0bHlmaDJML0pGKzJzZm8vaFl4WUdGWkU0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzNTI0OTYwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "JAY",


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
