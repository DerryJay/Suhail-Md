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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_59_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICAwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICA2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxVSsvLzVlcGMyZzVEQkZ1V0k2eWJHWHpoQ3prb1dENUt5UWdBQzZnZ09vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk0MDYxMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkREQTBDMjc5MDVDQ0IzMTFDREU5NzFBRkM2N0JEQUM2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEwOTUzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4TU5SMElwOVNncU51c1dwZHpDaFNRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiMjAxZTUwLTUyZGQtNDRmMi1hMWMzLWQ5ZWY0NGZkZjQ0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDIwNyxcbiAgICAgIDE1MixcbiAgICAgIDM5LFxuICAgICAgMjQ0LFxuICAgICAgMTg0LFxuICAgICAgMTY1LFxuICAgICAgOSxcbiAgICAgIDc1LFxuICAgICAgMTMyLFxuICAgICAgMzYsXG4gICAgICA4MCxcbiAgICAgIDY1LFxuICAgICAgMTgwLFxuICAgICAgMTI0LFxuICAgICAgMTQ1LFxuICAgICAgMTIwLFxuICAgICAgMTgsXG4gICAgICAxMzQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODMsXG4gICAgICAxMTEsXG4gICAgICA4NCxcbiAgICAgIDE3OCxcbiAgICAgIDk2LFxuICAgICAgMTM3LFxuICAgICAgMjE5LFxuICAgICAgMTg5LFxuICAgICAgMTgsXG4gICAgICAyNDUsXG4gICAgICAxNDQsXG4gICAgICAxNDEsXG4gICAgICAxNixcbiAgICAgIDIyLFxuICAgICAgMzQsXG4gICAgICAwLFxuICAgICAgMjA1LFxuICAgICAgMTU3LFxuICAgICAgMjMxLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpXM0Q1UDlEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE5NDA2MTAyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc2NDU1OTo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIitKQVkg8J+knVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LRm5mOEJFSnFZMkxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieExjYVpxYk05S21Ed0FJVElHZTd0Z3ZyMWdTM284d1dzK0hkZHh4SGJuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKQmpvdWlHTkJESVZ2RVh3UWdtTTY5ejREcE1ab2xzYWNiTGVPZTJkbzQyajZKaW00aTNlNklrZ2lnYTJpUU9JcVRaWTNQbkRUSTNUd3BhUWNTNThEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrOW1BUWRiblp3OHd0Ym54cWNkWkYwSWpBR0ZJVGVHeXN1b1I1eSthUG1jNFVubm1OS1ZLSkRZQjJYa0U5M1UwQ3BzbEREYU9aNGhPendwNStscllndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5NDA2MTAyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTA5NTM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUE1FXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQd1NuTXFTUkkxUWNYaEYwN3o1ZXZQQXgwM1dqaTZsWjJ4aE56VGs3RW5JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUzNTI0OTYwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTEwOTQ2NDExM1wifSIKfQ=="  // PUT your SESSION_ID 


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
