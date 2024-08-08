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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_28_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDk3LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1LFxuICAgICAgICA0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2L0lMRVNZQ1dwREJMUm45L2tBVjlxWHh0bEo4MEcwVGpxQTY4NWwzbUVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk0MDYxMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwOUJGODczNjhFMzcxNDdFNjE4NDEwQTAyRkUyM0NGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzE0NTI4NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMQXA2QkpEc1MxZXM0NDVtN2NpVXl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmODRlNjYxLWFkZGQtNGJjMy04YzhmLThkOTI3ZmMyNDI0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDU5LFxuICAgICAgMTMyLFxuICAgICAgMjQ3LFxuICAgICAgODEsXG4gICAgICAxMzUsXG4gICAgICAzMCxcbiAgICAgIDUzLFxuICAgICAgMzUsXG4gICAgICA3NixcbiAgICAgIDUxLFxuICAgICAgMjA3LFxuICAgICAgMjI3LFxuICAgICAgMTMwLFxuICAgICAgMjA1LFxuICAgICAgNzgsXG4gICAgICAxODIsXG4gICAgICAyNDgsXG4gICAgICAyMDcsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAxNzgsXG4gICAgICA1OCxcbiAgICAgIDE4MSxcbiAgICAgIDUyLFxuICAgICAgODUsXG4gICAgICA0OSxcbiAgICAgIDU1LFxuICAgICAgMzksXG4gICAgICAxNzIsXG4gICAgICAxOSxcbiAgICAgIDQ5LFxuICAgICAgMjUsXG4gICAgICA2MyxcbiAgICAgIDE2NyxcbiAgICAgIDIwNixcbiAgICAgIDQyLFxuICAgICAgOTMsXG4gICAgICAyMTksXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0NGQ1A1NU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMTk0MDYxMDI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzY4NTg0ODc2NDU1OToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ25pUVlRdkxqVXRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjAxaUZoY1hGcHgraW91ZVRKdUU4clBpVnltVFF5YVZyK0pzdnQwVGtSZ289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid04weDVWMVVTZ2Qrdmp1b1oyUk9nWVJkeGNPSyswMS9Tb3JZMUNxNVBhNFVSeGppYnlycllRQjdKeHZ2aXpPOXFaT0RHZ1N0clgzQlJZVVk2bDFxREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidjY0VnE3Y2tKYzczNkZsQmFqYTlmYnFud3hNK1p3dk1vWDQwTVZhNmF3R1U5dE9sa3BvYjdGTU4wYVJYamdOWHoxTDhxc0tidTU4bG83RVYvOXhjQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxOTQwNjEwMjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNDUyNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDRmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNGaS5qc29uIjogIntcImtleURhdGFcIjpcIkUwblorNTVZYllDNVRwelRVSWt0L1piTDYvY05xWEhybTlwQ2dqWHFob0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3MzUzNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMzE0NTI4NDY4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
