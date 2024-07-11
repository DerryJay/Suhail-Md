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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_11_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDY0LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6SmNUUFltdmZWMm44T0R3RUJkdkpORTBxdVJRSVdUTjA3eGloVkIvMm80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvcUs1Y2tsU1I4ZXNvUGZlYkgwb0RBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhZDRlNzFlLTIwZTAtNGNhNy1iNjM3LTljNTAxNzhjNGU0MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxMCxcbiAgICAgIDEzMCxcbiAgICAgIDE4MSxcbiAgICAgIDIxMCxcbiAgICAgIDEwOCxcbiAgICAgIDE0NSxcbiAgICAgIDE4MyxcbiAgICAgIDEyNCxcbiAgICAgIDg0LFxuICAgICAgMjQ5LFxuICAgICAgMTk4LFxuICAgICAgMTksXG4gICAgICAxNzgsXG4gICAgICA2NSxcbiAgICAgIDQ5LFxuICAgICAgMjQsXG4gICAgICAxNSxcbiAgICAgIDEyMCxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAyMTUsXG4gICAgICAxMjYsXG4gICAgICAxNjksXG4gICAgICAxMTIsXG4gICAgICAxMjUsXG4gICAgICAyNDMsXG4gICAgICAxNSxcbiAgICAgIDcwLFxuICAgICAgMjAwLFxuICAgICAgMTA2LFxuICAgICAgODMsXG4gICAgICAxNjAsXG4gICAgICA3NCxcbiAgICAgIDY2LFxuICAgICAgMjUxLFxuICAgICAgMjIxLFxuICAgICAgMTUzLFxuICAgICAgMTM1LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhSRko5MkZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDcwMjM5MDA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2ODM0MTQ1MzMwNzkxMzozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJlY2t5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGp4Ly9BQ0VKaUl3TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOZ0laNGxiWUVDbW15YmJsdlUybDY4ZUFzMFR4WWFSeFJiYkJuVG5mRVV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInUvWnlaTzBWSy84U3ZoUGZIWEcvQUdzaWtYSE44M0l5N1Bzak8zak1QZ3hkZENxWS9rWVZDUnYyNmhERVV5NDF1RW40VlB1cHoraHRDMnROVlZTZENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZRbUJGc3VVU0dTeDh3WWhZZUt3YlBpVnNUeEk4ZjVsdTRvSUNKU3JYbktISC9YeTFkaVRNUkxkcnFxZEdnSEFrb1krZkpiMkE2TTVUZ1ViUWlFTERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzAyMzkwMDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MTQyNjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9Gdi5qc29uIjogIntcImtleURhdGFcIjpcIk1xcmZPZ3NCOE5yakJxMlVOb3NvZ3NEV3JjeWRVQVlNTFJPeWFpVTRwZUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzczODQ3Mjg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MDU4NzI4ODBcIn0iCn0="  // PUT your SESSION_ID 


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
