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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_31_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFBiN1I5SHZkZkFBczVBYjFCUkpwN2pVcmtBaDViQkl5RmN6WmNUeVRKYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemRkQkdkdXVUNzJ6ODJmdjRCSlRtUVwiLFxuICBcInBob25lSWRcIjogXCI1ZTQ4Y2JjZC05MDhhLTQyYjQtODEzMy1kZDQ3NzBlNjczMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMjQ1LFxuICAgICAgNTIsXG4gICAgICAyMzQsXG4gICAgICAxNjMsXG4gICAgICA1MSxcbiAgICAgIDEyMixcbiAgICAgIDIxOCxcbiAgICAgIDIyNCxcbiAgICAgIDEyMixcbiAgICAgIDE4LFxuICAgICAgMTk1LFxuICAgICAgMjUxLFxuICAgICAgMjQsXG4gICAgICAxMTIsXG4gICAgICAyNDUsXG4gICAgICA2MCxcbiAgICAgIDg4LFxuICAgICAgMjI5LFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjAsXG4gICAgICAxMjUsXG4gICAgICA3OSxcbiAgICAgIDk1LFxuICAgICAgNzcsXG4gICAgICAxNyxcbiAgICAgIDg4LFxuICAgICAgNjgsXG4gICAgICAxNDUsXG4gICAgICAxMjcsXG4gICAgICAxNjcsXG4gICAgICA3OSxcbiAgICAgIDUwLFxuICAgICAgMTA0LFxuICAgICAgMTc3LFxuICAgICAgMTQ2LFxuICAgICAgMTMxLFxuICAgICAgMTIxLFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RTFCUVo0MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxOTQwNjEwMjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3Njg1ODQ4NzY0NTU5OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TRm5mOEJFTW5Nb0xVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieExjYVpxYk05S21Ed0FJVElHZTd0Z3ZyMWdTM284d1dzK0hkZHh4SGJuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhelJhWmZCRVZoUlhNMGZvbEZYMGF2TnVPWEljc0NrOXhCaGVnaWE1QVRTaW1Pc2lBU2dLck1sTDA0OWRjR1NpamJxZlVxQkMrMVFENkhZdHk2RUdCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnN1llemI1UTNJOXgrZXBBQTh4elZpVVZyZXcrbFgxUEZNWjRWeHRYOTJSL3pnY0VXclFudFBmcTI0bTJ1NklqQnZhTzh5S053UVN0d2pYdFUycXBCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5NDA2MTAyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI5NTg4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBNRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUE1GLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
