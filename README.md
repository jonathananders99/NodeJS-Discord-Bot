### Program Name: **_Discord Bot_ Using NodeJS**

### Description: 
This bot was built with a friend to allow for parts of the database built with GAS to be represented in discord. It serves as automation between the database and discord for things like member management: including roles, nicknames, embedded messages and more. The database sends a message through a webhook to a specific channel and the bot reads all messages and if its in the correct chat it will allow for commands. The different commands are listed at the end of the README.

### How to run the project:
You host it and give permissions to the bot in discord (don't try and run this project it is just for viewing).

### Below are all the available commands used by GAS:
```
Add role: a^r,Nickname,Role
Remove role: r^r,Nickname,Role
Change nickname: c^n,Nickname,New Nickname
DM: d$m^Nickname^Message
Clear channel (deletes last 99 messages): c^c,Channel Name
Add event: a$m$^Message^Channel Name
Edit message: e$m$^Old Message^New Message^Channel Name
Delete message: d$m$^Message^Channel Name
Announce new event to event-rsvp: a$e$^Event Title^Channel Name
Announce new event to full-schedule: a$s$^Event Title^Channel Name
Announce new event to full-schedule and event-rsvp: a$se$^Event Title^Channel Name
Announce event update to event-rsvp: u$e$^Event Title^Change^Channel Name
Announce event update to full-schedule: u$s$^Event Title^Change^Channel Name
Announce event update to full-schedule and event-rsvp: u$se$^Event Title^Change^Channel Name
Give event start warning: e$w$^Event Title^Minutes to Event Start^Channel Name
Give event start announcement: e$s$^Event Title^Channel Name
Send starting information: start^info,Nickname
Kick person: k^k,Nickname
Send message in channel: s$m$^Message^Channel Name
Birthday message: b^r,Nickname,Channel Name
Delete last # of messages: d^c,Channel Name,Number of Messages
Clear all schedule channels: c^a
Send embed: s$e$^Title^Description^Author^Author Avatar^Image^Footer^Channel Name
Edit embed: e$e$^Old Title^Old Description^New Title^New Description^New Author^New Author Avatar^New Image^New Footer^Channel Name
Delete embed: d$e$^Title^Description^Channel Name
Send embed with reactions: sr$e$^Title^Description^Author^Author Avatar^Image^Footer^Channel Name
DM embed: dm$e$^Nickname^Title^Description^Author^Author Avatar^Image^Footer
Create role: c^r,Role Name,Color
Rename role: ch^r,Role Name,New Role Name
Rename channel/category: r^c,Channel Name,New Channel Name
Edit message in DM: e$dm$^Old Message^New Message^Nickname
Edit embed in DM: e$edm$^Old Title^Old Description^New Title^New Description^New Author^New Author Avatar^New Image^New Footer^Nickname
Edit up to 4 messages: ec$m$^Old Message 1^New Message 1^Channel Name 1^Old Message 2^New Message 2^Channel Name 2^Old Message 3^New Message 3^Channel Name 3^Old Message 4^New Message 4^Channel Name 4
Edit 6 most recent messages: ec$om$^New Message 1^Channel Name 1^New Message 2^Channel Name 2^New Message 3^Channel Name 3^New Message 4^Channel Name 4^New Message 5^Channel Name 5^New Message 6^Channel Name 6
Edit most recent message: e$om$^New Message^Channel Name
Clear all roles: ca^r,Nickname
```