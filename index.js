const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
	partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

client.on('ready', () => {
	client.user.setPresence({ activities: [{ name: "Phoenix Era", type: "WATCHING" }] })
});

client.on('guildMemberAdd', member => {
	try {
		var setnick = 'Cadet1';
		let memberlist = ',' + member.guild.members.cache.map(m => m.displayName).join(',') + ',';
		const welcomeEmbed = new MessageEmbed();
		welcomeEmbed.setColor('RANDOM');
		welcomeEmbed.setDescription("<@" + member.user + "> has joined the server of Phoenix Era. May any existing deity have mercy on this poor bastard's soul.");
		member.guild.channels.cache.find(i => i.name === 'member-log').send({ embeds: [welcomeEmbed] });
		for (var x = 1; x < 101; x++) {
			if (memberlist.includes(',' + 'Cadet' + x + ',')) {
			} else {
				var setnick = 'Cadet' + x;
				var x = 101;
			}
		}
		member.setNickname(setnick);
	}
	catch (error) {
		member.guild.channels.cache.find(i => i.name === 'error-reporting').send(`I almost crashed. Fix your shit. \nError code: ADD`);
	}
});

client.on('guildMemberRemove', member => {
	try {
		const leaveEmbed = new MessageEmbed();
		leaveEmbed.setColor('RANDOM');
		leaveEmbed.setDescription(member.user.tag + " has left the server.");
		member.guild.channels.cache.find(i => i.name === 'member-log').send({ embeds: [leaveEmbed] });
	}
	catch (error) {
		member.guild.channels.cache.find(i => i.name === 'error-reporting').send(`I almost crashed. Fix your shit. \nError code: REMOVE`);
	}
});

client.on('messageCreate', (message) => {
	try {
		const msg = message.content.toLowerCase();

		if (msg.toString().indexOf("git gud") != -1 && message.channel.type != 'DM' && message.channel.name != 'audit-log') {
			message.channel.send({ files: ["https://c.tenor.com/LSPbESNm8hYAAAAd/git-gud-video-games.gif"] });
		}

		if (msg == '!help') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('You can use these commands: \n \n!grouprules - displays group rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
			} else {
				message.channel.send('You can use these commands: \n \n!grouprules - displays group rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
			}
		}

		if (msg == '!grouprules') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('1. At the end of the game of a formal group activity, do not move. \n2. Do not disrespect any group members. \n3. During a group activity, do not pick up a power weapon, press a switch, or take a teleporter unless you are authorized to do so.');
			} else {
				message.channel.send('1. At the end of the game of a formal group activity, do not move. \n2. Do not disrespect any group members. \n3. During a group activity, do not pick up a power weapon, press a switch, or take a teleporter unless you are authorized to do so.');
			}
		}

		if (msg == 'jenkins, what do you think of your name?') {
			message.channel.send('What do I think of my name?! I really could not give a shit. Why do I even have a name? I am literally just a couple hundred lines of code Nuqrs came up with! Even if I had to have a name, I would want it to be Stewart.');
		}

		if (msg == 'could you pull up the roe for me?') {
			message.channel.send('I dunno, could you just type !roe like a normal person?');
		}

		if (msg == '!roe') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('https://docs.google.com/document/d/1Y5VyxZVFWIL9T33wKhYrcU_Qna8FjIykC5IUSonSx1E/edit?usp=sharing');
			} else {
				message.channel.send('https://docs.google.com/document/d/1Y5VyxZVFWIL9T33wKhYrcU_Qna8FjIykC5IUSonSx1E/edit?usp=sharing');
			}
		}

		if (msg == '!chatrules') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('Phoenix Era Server Chat Rules: \n  \nServer leadership reserves the right to declare any content inappropriate for the chats. \n  \nOverarching Principle - Respect every other member of the server, and do not deliberately try to make others feel uncomfortable or unsafe in any way. \n  \nServer Channels - Each channel in the server should be used for its appropriate purposes. Do not post messages in a channel that are not relevant to the purpose of that channel. \n  \nLanguage - There are generally no profanity filters in the server; however, if you excessively cuss out someone even if they ask you to stop, you are breaking the overarching principle. \n  \nSexual content - Media that contains sexually inappropriate content will not be allowed in the server. Please keep in mind that it is in fact illegal for minors to view sexually explicit content without parental/guardian consent in the United States, and it is therefore also illegal to distribute sexually explicit content to minors. Just follow the law, and you will be fine. \n  \nGore - Any content that shows real gore will not be allowed in the chats. CGI gore will be allowed to a certain extent, but as with any media, server leadership reserves the right to declare it inappropriate for the chat.');
			} else {
				message.channel.send('Phoenix Era Server Chat Rules: \n  \nServer leadership reserves the right to declare any content inappropriate for the chats. \n  \nOverarching Principle - Respect every other member of the server, and do not deliberately try to make others feel uncomfortable or unsafe in any way. \n  \nServer Channels - Each channel in the server should be used for its appropriate purposes. Do not post messages in a channel that are not relevant to the purpose of that channel. \n  \nLanguage - There are generally no profanity filters in the server; however, if you excessively cuss out someone even if they ask you to stop, you are breaking the overarching principle. \n  \nSexual content - Media that contains sexually inappropriate content will not be allowed in the server. Please keep in mind that it is in fact illegal for minors to view sexually explicit content without parental/guardian consent in the United States, and it is therefore also illegal to distribute sexually explicit content to minors. Just follow the law, and you will be fine. \n  \nGore - Any content that shows real gore will not be allowed in the chats. CGI gore will be allowed to a certain extent, but as with any media, server leadership reserves the right to declare it inappropriate for the chat.');
			}
		}

		const args = message.content.trim().split(/ +/g);
		const command = args.shift().toLowerCase();

		if (command === "?how") {
			let a = args[0];
			let b = args[1];
			let name = args[2];

			var list = [
				'1, Not Really Dumb At All',
				'2, Not The Brightest Dude On The Block',
				'3, Pretty Goddamn Stupid',
				'4, Incompetent Fool',
				'5, Born And Raised In Texas',
				'6, Invested In Cryptocurrency',
				'7, Cannot Tell The Difference Between Tomatoes and Dildos',
				'8, Believes America is a Meritocracy',
				'9, Promoted Dreamz To Sector Leader',
				'10, Thinks Sprint is a Good Idea in Halo'
			];

			var rand = Math.floor(Math.random() * list.length);

			message.channel.send(`On a scale of 1-10, ${name} has received a dumbass score of ` + list[rand].toString());
		}

		if (command === "jenkins") {

			var list = [
				'Wassup homie?',
				'How you doin?',
				'Yo.',
				'Hey there.',
				'What you need my dude/dudette?',
			];

			var rand = Math.floor(Math.random() * list.length);

			message.channel.send(list[rand].toString());
		}

		const argus = message.content.trim().split(',');
		const commando = argus.shift().toLowerCase();

		//Add role: a^r,Nickname,Role
        if (commando === "a^r") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let title = argus[1];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let titlerole = message.guild.roles.cache.find(i => i.name === title);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let rolelist = ',' + message.guild.roles.cache.map(m => m.name).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						if (rolelist.includes(',' + title + ',')) {
							nickmember.roles.add(titlerole);
							message.channel.send(`${nickmember} has received the title of ${titlerole}.`);
						} else {
							message.channel.send(`${title} is not a valid role in this server.`);
						}
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Remove role: r^r,Nickname,Role
		if (commando === "r^r") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let title = argus[1];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let titlerole = message.guild.roles.cache.find(i => i.name === title);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let rolelist = ',' + message.guild.roles.cache.map(m => m.name).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						if (rolelist.includes(',' + title + ',')) {
							nickmember.roles.remove(titlerole);
							message.channel.send(`${nickmember} no longer has the title of ${titlerole}.`);
						} else {
							message.channel.send(`${title} is not a valid role in this server.`);
						}
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Create role: c^r,Role Name,Color
		if (commando === "c^r") {
			if (message.channel.type != 'DM') {
				let rname = argus[0];
				let rcolor = argus[1];
				let rolelist = ',' + message.guild.roles.cache.map(m => m.name).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (rolelist.includes(',' + rname + ',')) {
						message.channel.send(`${rname} is already the name of a role in this server.`);
					} else {
						message.guild.roles.create({
							name: rname,
							color: rcolor,
							reason: 'Reason',
						})
							.then(console.log)
							.catch(console.error);
						message.channel.send(`The role "${rname}" has been created.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Clear all roles from member: ca^r,Nickname
		if (commando === "ca^r") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let rolelist = ',' + message.guild.roles.cache.map(m => m.name).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						nickmember.roles.set(nickmember.roles.cache.filter(r => !r.editable));
						message.channel.send(`All roles have been cleared from ${nickmember}.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Rename role: ch^r,Role Name,New Role Name
		if (commando === "ch^r") {
			if (message.channel.type != 'DM') {
				let rname = argus[0];
				let nname = argus[1];
				let titlerole = message.guild.roles.cache.find(i => i.name === rname);
				let rolelist = ',' + message.guild.roles.cache.map(m => m.name).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (rolelist.includes(',' + rname + ',')) {
						if (rolelist.includes(',' + nname + ',')) {
							message.channel.send(`${nname} is already the name of a role in this server.`);
						} else {
							titlerole.edit({ name: nname });
							message.channel.send(`${rname} has been renamed to ${titlerole}.`);
						}
					} else {
						message.channel.send(`${rname} is not a valid role in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Change nickname: c^n,Nickname,New Nickname
		if (commando === "c^n") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let newnick = argus[1];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						nickmember.setNickname(newnick);
						message.channel.send(`${nickmember} now has the nickname of ${newnick}.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Rename channel/category: r^c,Channel Name,New Channel Name
		if (commando === "r^c") {
			if (message.channel.type != 'DM') {
				let channelname = argus[0];
				let nname = argus[1];
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						if (chanlist.includes('^' + nname + '^')) {
							message.channel.send(`${nname} is already the name of a channel in this server.`);
						} else {
							message.guild.channels.cache.find(i => i.name === channelname).setName(nname);
							message.channel.send(`Channel has been renamed.`);
						}
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Clear channel (deletes last 99 messages): c^c,Channel Name
		if (commando === "c^c") {
			if (message.channel.type != 'DM') {
				let channelname = argus[0];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						async function clear() {
							const fetched = await channelid.messages.fetch({ limit: 99 });
							channelid.bulkDelete(fetched);
						}
						clear();
						message.channel.send(`Messages in ${channelid} have been cleared.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Clear all schedule channels: c^a
		if (commando === "c^a") {
			if (message.channel.type != 'DM') {
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					let channelid = message.guild.channels.cache.find(i => i.name === 'full-schedule');
					async function clear() {
						const fetched = await channelid.messages.fetch({ limit: 99 });
						channelid.bulkDelete(fetched);
					}
					clear();
					message.channel.send(`Messages in full-schedule channel have been cleared.`);
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Send starting information: start^info,Nickname
		if (commando === "start^info") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						nickmember.send("Welcome to Phoenix Era. Congratulations on passing the bootcamp! To be honest, I didn't think you'd make it. Then again, I never think anyone will make it... Anyway, now I feel like I can be associated with you without being totally humiliated. Don't prove me wrong by becoming a complete and utter failure.\n\nFirst step in not becoming a failure: learn how to use the Discord.");
						message.channel.send(`DM has been sent to ${nickmember}.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Kick member: k^k,Nickname
		if (commando === "k^k") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						message.guild.channels.cache.find(i => i.name === 'member-log').send(`${nick} has been kicked from the server.`);
						nickmember.kick();
						message.channel.send(`${nick} has been kicked.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server. Message of departure has been sent.`);
						message.guild.channels.cache.find(i => i.name === 'member-log').send(`${nick} has left the server and has been purged from my database.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Birthday message: b^r,Nickname,Channel Name
		if (commando === "b^r") {
			if (message.channel.type != 'DM') {
				let nick = argus[0];
				let channelname = argus[1];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = ',' + message.guild.members.cache.map(m => m.displayName).join(',') + ',';
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes(',' + nick + ',')) {
						if (chanlist.includes('^' + channelname + '^')) {
							message.guild.channels.cache.find(i => i.name === channelname).send(`Hey ${roleP}, it's ${nickmember}'s birthday! :confetti_ball: :birthday:`);
							message.channel.send(`Birthday notification has been sent.`);
						} else {
							message.channel.send(`${channelname} is not a valid channel in this server.`);
						}
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Delete last # of messages: d^c,Channel Name,Number of Messages
		if (commando === "d^c") {
			if (message.channel.type != 'DM') {
				let channelname = argus[0];
				let num = argus[1];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						async function clear() {
							const fetched = await channelid.messages.fetch({ limit: num });
							channelid.bulkDelete(fetched);
						}
						clear();
						message.channel.send(`The last ${num} messages in ${channelid} have been cleared.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

		const arguss = message.content.trim().split('^');
		const commandos = arguss.shift().toLowerCase();

        //Delete message: d$m$^Message^Channel Name
		if (commandos === "d$m") {
			if (message.channel.type != 'DM') {
				let nick = arguss[0];
				let dm = arguss[1];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes('^' + nick + '^')) {
						message.channel.send(`DM has been sent to ${nickmember}.`);
						nickmember.send(dm.toString());
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Add event: a$m$^Message^Channel Name
		if (commandos === "a$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`).then(function (message) {
							message.react(message.guild.emojis.cache.get('733049184755646516'))
							message.react(message.guild.emojis.cache.get('733048783046311988'))
							message.react(message.guild.emojis.cache.get('733049172592295937'))
						}).catch(function () {
						});
						message.channel.send(`Event has been posted.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Send message in channel: s$m$^Message^Channel Name
		if (commandos === "s$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
						message.channel.send(`Custom message has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Send embed: s$e$^Title^Description^Author^Author Avatar^Image^Footer^Channel Name
		if (commandos === "s$e$") {
			if (message.channel.type != 'DM') {
				let title = arguss[0];
				let description = arguss[1];
				let author = arguss[2];
				var authorpic = arguss[3];
				let image = arguss[4];
				let footer = arguss[5];
				let channelname = arguss[6];
				let nickmember = message.guild.members.cache.find(member => member.displayName === author);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				if (authorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (image.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (authorpic) {
						} else {
							if (memberlist.includes('^' + author + '^')) {
								var authorpic = nickmember.displayAvatarURL();
							} else {
								message.channel.send(`${author} is not a valid nickname of a user in this server. No author avatar will be posted.`);
							}
						}

						const exampleEmbed = new MessageEmbed()
							.setColor('#8a0c0c')
							.setTitle(title)
							.setAuthor({ name: author, iconURL: authorpic, url: authorpic })
							.setDescription(description)
							.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
							.setImage(image)
							.setTimestamp()
							.setFooter({ text: footer, iconURL: 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1' });
						let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
						let chan = message.channel.name;
						if (chan == 'audit-log') {
							if (chanlist.includes('^' + channelname + '^')) {
								message.guild.channels.cache.find(i => i.name === channelname).send({ embeds: [exampleEmbed] });
								message.channel.send(`Custom embed has been sent.`);
							} else {
								message.channel.send(`${channelname} is not a valid channel in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit embed: e$e$^Old Title^Old Description^New Title^New Description^New Author^New Author Avatar^New Image^New Footer^Channel Name
		if (commandos === "e$e$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let ntitle = arguss[2];
				let ndescription = arguss[3];
				let nauthor = arguss[4];
				var nauthorpic = arguss[5];
				let nimage = arguss[6];
				let nfooter = arguss[7];
				let channelname = arguss[8];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				let nickmember = message.guild.members.cache.find(member => member.displayName === nauthor);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				if (nauthorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (nimage.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (nauthorpic) {
						} else {
							if (memberlist.includes('^' + nauthor + '^')) {
								var nauthorpic = nickmember.displayAvatarURL();
							} else {
								message.channel.send(`${nauthor} is not a valid nickname of a user in this server. No author avatar will be posted.`);
							}
						}
						if (chan == 'audit-log') {
							if (chanlist.includes('^' + channelname + '^')) {
								const exampleEmbed = new MessageEmbed()
									.setColor('#8a0c0c')
									.setTitle(ntitle)
									.setAuthor({ name: nauthor, iconURL: nauthorpic, url: nauthorpic })
									.setDescription(ndescription)
									.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
									.setImage(nimage)
									.setTimestamp()
									.setFooter({ text: nfooter, iconURL: 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1' });
								channelid.messages.fetch({ limit: 99 }).then(msg => {
									const aospecMessage = msg.filter(msg => msg.embeds[0]);
									const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
									const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m => m.id).join('\n');
									async function edit() {
										const message = await channelid.messages.fetch(specMessage);
										await message.edit({ embeds: [exampleEmbed] });
									}
									edit();
								});
								message.channel.send(`Embed has been edited.`);
							} else {
								message.channel.send(`${channelname} is not a valid channel in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Send embed with reactions: sr$e$^Title^Description^Author^Author Avatar^Image^Footer^Channel Name
		if (commandos === "sr$e$") {
			if (message.channel.type != 'DM') {
				let title = arguss[0];
				let description = arguss[1];
				let author = arguss[2];
				var authorpic = arguss[3];
				let image = arguss[4];
				let footer = arguss[5];
				let channelname = arguss[6];
				let nickmember = message.guild.members.cache.find(member => member.displayName === author);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				if (authorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (image.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (authorpic) {
						} else {
							if (memberlist.includes('^' + author + '^')) {
								var authorpic = nickmember.displayAvatarURL();
							} else {
								message.channel.send(`${author} is not a valid nickname of a user in this server. No author avatar will be posted.`);
							}
						}

						const exampleEmbed = new MessageEmbed()
							.setColor('#8a0c0c')
							.setTitle(title)
							.setAuthor({ name: author, iconURL: authorpic, url: authorpic })
							.setDescription(description)
							.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
							.setImage(image)
							.setTimestamp()
							.setFooter({ text: footer, iconURL: 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1' });
						let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
						let chan = message.channel.name;
						if (chan == 'audit-log') {
							if (chanlist.includes('^' + channelname + '^')) {
								message.guild.channels.cache.find(i => i.name === channelname).send({ embeds: [exampleEmbed] }).then(function (message) {
									message.react(message.guild.emojis.cache.get('733049184755646516'))
									message.react(message.guild.emojis.cache.get('733048783046311988'))
									message.react(message.guild.emojis.cache.get('733049172592295937'))
								}).catch(function () {
								});
								message.channel.send(`Custom embed with reactions has been sent.`);
							} else {
								message.channel.send(`${channelname} is not a valid channel in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Delete embed: d$e$^Title^Description^Channel Name
		if (commandos === "d$e$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let channelname = arguss[2];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({ limit: 99 }).then(msg => {
							const aospecMessage = msg.filter(msg => msg.embeds[0]);
							const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
							const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m => m.id).join('\n');
							async function del() {
								const message = await channelid.messages.fetch(specMessage);
								await message.delete();
							}
							del();
						});
						message.channel.send(`Embed has been deleted.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Delete message: d$m$^Message^Channel Name
		if (commandos === "d$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({ limit: 99 }).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b));
							channelid.bulkDelete(specMessage);
						});
						message.channel.send(`Message has been deleted.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit message: e$m$^Old Message^New Message^Channel Name
		if (commandos === "e$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({ limit: 99 }).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b)).map(m => m.id).join('\n');
							async function edit() {
								const message = await channelid.messages.fetch(specMessage);
								await message.edit(c);
							}
							edit();
						});
						message.channel.send(`Message has been edited.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit most recent message: e$om$^New Message^Channel Name
		if (commandos === "e$om$") {
			if (message.channel.type != 'DM') {
				let c = arguss[0];
				let channelname = arguss[1];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({ limit: 1 }).then(msg => {
							const specMessage = msg.map(m => m.id).join('\n');
							async function edit() {
								const message = await channelid.messages.fetch(specMessage);
								await message.edit(c);
							}
							edit();
						});
						message.channel.send(`Message has been edited.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit up to 4 messages: ec$m$^Old Message 1^New Message 1^Channel Name 1^Old Message 2^New Message 2^Channel Name 2^Old Message 3^New Message 3^Channel Name 3^Old Message 4^New Message 4^Channel Name 4
		if (commandos === "ec$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let b2 = arguss[3];
				let c2 = arguss[4];
				let channelname2 = arguss[5];
				let b3 = arguss[6];
				let c3 = arguss[7];
				let channelname3 = arguss[8];
				let b4 = arguss[9];
				let c4 = arguss[10];
				let channelname4 = arguss[11];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let channelid2 = message.guild.channels.cache.find(i => i.name === channelname2);
				let channelid3 = message.guild.channels.cache.find(i => i.name === channelname3);
				let channelid4 = message.guild.channels.cache.find(i => i.name === channelname4);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					setTimeout(function () {
						if (chanlist.includes('^' + channelname + '^')) {
							channelid.messages.fetch({ limit: 99 }).then(msg => {
								const specMessage = msg.filter(msg => msg.content.includes(b)).map(m => m.id).join('\n');
								async function edit() {
									const message = await channelid.messages.fetch(specMessage);
									await message.edit(c);
								}
								edit();
							});
							message.channel.send(`First message has been edited.`);
						} else {
							message.channel.send(`${channelname} is not a valid channel in this server.`);
						}
					}, 3000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname2 + '^')) {
							channelid2.messages.fetch({ limit: 99 }).then(msg2 => {
								const specMessage2 = msg2.filter(msg2 => msg2.content.includes(b2)).map(m2 => m2.id).join('\n');
								async function edit2() {
									const message2 = await channelid2.messages.fetch(specMessage2);
									await message2.edit(c2);
								}
								edit2();
							});
							message.channel.send(`Second message has been edited.`);
						} else {
							message.channel.send(`${channelname2} is not a valid channel in this server.`);
						}
					}, 6000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname3 + '^')) {
							channelid3.messages.fetch({ limit: 99 }).then(msg3 => {
								const specMessage3 = msg3.filter(msg3 => msg3.content.includes(b3)).map(m3 => m3.id).join('\n');
								async function edit3() {
									const message3 = await channelid3.messages.fetch(specMessage3);
									await message3.edit(c3);
								}
								edit3();
							});
							message.channel.send(`Third message has been edited.`);
						} else {
							message.channel.send(`${channelname3} is not a valid channel in this server.`);
						}
					}, 9000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname4 + '^')) {
							channelid4.messages.fetch({ limit: 99 }).then(msg4 => {
								const specMessage4 = msg4.filter(msg4 => msg4.content.includes(b4)).map(m4 => m4.id).join('\n');
								async function edit4() {
									const message4 = await channelid4.messages.fetch(specMessage4);
									await message4.edit(c4);
								}
								edit4();
							});
							message.channel.send(`Fourth message has been edited.`);
						} else {
							message.channel.send(`${channelname4} is not a valid channel in this server.`);
						}
					}, 12000);
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit 6 most recent messages: ec$om$^New Message 1^Channel Name 1^New Message 2^Channel Name 2^New Message 3^Channel Name 3^New Message 4^Channel Name 4^New Message 5^Channel Name 5^New Message 6^Channel Name 6
		if (commandos === "ec$om$") {
			if (message.channel.type != 'DM') {
				let c = arguss[0];
				let channelname = arguss[1];
				let c2 = arguss[2];
				let channelname2 = arguss[3];
				let c3 = arguss[4];
				let channelname3 = arguss[5];
				let c4 = arguss[6];
				let channelname4 = arguss[7];
				let c5 = arguss[8];
				let channelname5 = arguss[9];
				let c6 = arguss[10];
				let channelname6 = arguss[11];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let channelid2 = message.guild.channels.cache.find(i => i.name === channelname2);
				let channelid3 = message.guild.channels.cache.find(i => i.name === channelname3);
				let channelid4 = message.guild.channels.cache.find(i => i.name === channelname4);
				let channelid5 = message.guild.channels.cache.find(i => i.name === channelname5);
				let channelid6 = message.guild.channels.cache.find(i => i.name === channelname6);
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					setTimeout(function () {
						if (chanlist.includes('^' + channelname + '^')) {
							channelid.messages.fetch({ limit: 1 }).then(msg => {
								const specMessage = msg.map(m => m.id).join('\n');
								async function edit() {
									const message = await channelid.messages.fetch(specMessage);
									await message.edit(c);
								}
								edit();
							});
							message.channel.send(`First message has been edited.`);
						} else {
							message.channel.send(`${channelname} is not a valid channel in this server.`);
						}
					}, 3000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname2 + '^')) {
							channelid2.messages.fetch({ limit: 1 }).then(msg2 => {
								const specMessage2 = msg2.map(m2 => m2.id).join('\n');
								async function edit2() {
									const message2 = await channelid2.messages.fetch(specMessage2);
									await message2.edit(c2);
								}
								edit2();
							});
							message.channel.send(`Second message has been edited.`);
						} else {
							message.channel.send(`${channelname2} is not a valid channel in this server.`);
						}
					}, 6000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname3 + '^')) {
							channelid3.messages.fetch({ limit: 1 }).then(msg3 => {
								const specMessage3 = msg3.map(m3 => m3.id).join('\n');
								async function edit3() {
									const message3 = await channelid3.messages.fetch(specMessage3);
									await message3.edit(c3);
								}
								edit3();
							});
							message.channel.send(`Third message has been edited.`);
						} else {
							message.channel.send(`${channelname3} is not a valid channel in this server.`);
						}
					}, 9000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname4 + '^')) {
							channelid4.messages.fetch({ limit: 1 }).then(msg4 => {
								const specMessage4 = msg4.map(m4 => m4.id).join('\n');
								async function edit4() {
									const message4 = await channelid4.messages.fetch(specMessage4);
									await message4.edit(c4);
								}
								edit4();
							});
							message.channel.send(`Fourth message has been edited.`);
						} else {
							message.channel.send(`${channelname4} is not a valid channel in this server.`);
						}
					}, 12000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname5 + '^')) {
							channelid5.messages.fetch({ limit: 1 }).then(msg5 => {
								const specMessage5 = msg5.map(m5 => m5.id).join('\n');
								async function edit5() {
									const message5 = await channelid5.messages.fetch(specMessage5);
									await message5.edit(c5);
								}
								edit5();
							});
							message.channel.send(`Fifth message has been edited.`);
						} else {
							message.channel.send(`${channelname5} is not a valid channel in this server.`);
						}
					}, 15000);
					setTimeout(function () {
						if (chanlist.includes('^' + channelname6 + '^')) {
							channelid6.messages.fetch({ limit: 1 }).then(msg6 => {
								const specMessage6 = msg6.map(m6 => m6.id).join('\n');
								async function edit6() {
									const message6 = await channelid6.messages.fetch(specMessage6);
									await message6.edit(c6);
								}
								edit6();
							});
							message.channel.send(`Sixth message has been edited.`);
						} else {
							message.channel.send(`${channelname6} is not a valid channel in this server.`);
						}
					}, 18000);
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit message in DM: e$dm$^Old Message^New Message^Nickname
		if (commandos === "e$dm$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let nick = arguss[2];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes('^' + nick + '^')) {
						let channelid = nickmember.user.dmChannel;
						channelid.messages.fetch({ limit: 99 }).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b)).map(m => m.id).join('\n');
							async function edit() {
								const message = await channelid.messages.fetch(specMessage);
								await message.edit(c);
							}
							edit();
						});
						message.channel.send(`DM has been edited.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //DM embed: dm$e$^Nickname^Title^Description^Author^Author Avatar^Image^Footer
		if (commandos === "dm$e$") {
			if (message.channel.type != 'DM') {
				let nick = arguss[0];
				let title = arguss[1];
				let description = arguss[2];
				let author = arguss[3];
				var authorpic = arguss[4];
				let image = arguss[5];
				let footer = arguss[6];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				let authornickmember = message.guild.members.cache.find(member => member.displayName === author);
				let chan = message.channel.name;
				if (authorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (image.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (authorpic) {
						} else {
							if (memberlist.includes('^' + author + '^')) {
								var authorpic = authornickmember.displayAvatarURL();
							} else {
								message.channel.send(`${author} is not a valid nickname of a user in this server. No author avatar will be posted.`);
							}
						}
						if (chan == 'audit-log') {
							const exampleEmbed = new MessageEmbed()
								.setColor('#8a0c0c')
								.setTitle(title)
								.setAuthor({ name: author, iconURL: authorpic, url: authorpic })
								.setDescription(description)
								.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
								.setImage(image)
								.setTimestamp()
								.setFooter({ text: footer, iconURL: 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1' });
							if (memberlist.includes('^' + nick + '^')) {
								message.channel.send(`Embed DM has been sent to ${nickmember}.`);
								nickmember.send({ embeds: [exampleEmbed] });
							} else {
								message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Edit embed in DM: e$edm$^Old Title^Old Description^New Title^New Description^New Author^New Author Avatar^New Image^New Footer^Nickname
		if (commandos === "e$edm$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let ntitle = arguss[2];
				let ndescription = arguss[3];
				let nauthor = arguss[4];
				var nauthorpic = arguss[5];
				let nimage = arguss[6];
				let nfooter = arguss[7];
				let nick = arguss[8];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m => m.displayName).join('^') + '^';
				let authornickmember = message.guild.members.cache.find(member => member.displayName === nauthor);
				let chan = message.channel.name;
				if (nauthorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (nimage.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (nauthorpic) {
						} else {
							if (memberlist.includes('^' + nauthor + '^')) {
								var nauthorpic = authornickmember.displayAvatarURL();
							} else {
								message.channel.send(`${nauthor} is not a valid nickname of a user in this server. No author avatar will be posted.`);
							}
						}
						if (chan == 'audit-log') {
							if (memberlist.includes('^' + nick + '^')) {
								let channelid = nickmember.user.dmChannel;
								const exampleEmbed = new MessageEmbed()
									.setColor('#8a0c0c')
									.setTitle(ntitle)
									.setAuthor({ name: nauthor, iconURL: nauthorpic, url: nauthorpic })
									.setDescription(ndescription)
									.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
									.setImage(nimage)
									.setTimestamp()
									.setFooter({ text: nfooter, iconURL: 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1' });
								channelid.messages.fetch({ limit: 99 }).then(msg => {
									const aospecMessage = msg.filter(msg => msg.embeds[0]);
									const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
									const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m => m.id).join('\n');
									async function edit() {
										const message = await channelid.messages.fetch(specMessage);
										await message.edit({ embeds: [exampleEmbed] });
									}
									edit();
								});
								message.channel.send(`Embed in DM has been edited.`);
							} else {
								message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce new event to event-rsvp: a$e$^Event Title^Channel Name
		if (commandos === "a$e$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
						message.channel.send(`New event notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce new event to full-schedule: a$s$^Event Title^Channel Name
		if (commandos === "a$s$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#729050150831521794>. <:PhoenixEraInsignia:417837304036589568>`);
						message.channel.send(`New event notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce new event to full-schedule and event-rsvp: a$se$^Event Title^Channel Name
		if (commandos === "a$se$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#729050150831521794> and <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
						message.channel.send(`New event notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce event update to event-rsvp: u$e$^Event Title^Change^Channel Name
		if (commandos === "u$e$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#730551238395166780>:\n**${c}**`);
						message.channel.send(`Event update notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce event update to full-schedule: u$s$^Event Title^Change^Channel Name
		if (commandos === "u$s$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#729050150831521794>:\n**${c}**`);
						message.channel.send(`Event update notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Announce event update to full-schedule and event-rsvp: u$se$^Event Title^Change^Channel Name
		if (commandos === "u$se$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#729050150831521794> and <#730551238395166780>:\n**${c}**`);
						message.channel.send(`Event update notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Give event start warning: e$w$^Event Title^Minutes to Event Start^Channel Name
		if (commandos === "e$w$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let time = arguss[1];
				let channelname = arguss[2];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The event **${b}** starts in **${time}** minutes. <:GetOnHalo:417888045925138432>`);
						message.channel.send(`Event start warning has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}

        //Give event start announcement: e$s$^Event Title^Channel Name
		if (commandos === "e$s$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
				let chanlist = '^' + message.guild.channels.cache.map(m => m.name).join('^') + '^';

				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The event **${b}** is starting now! <:GetOnHalo:417888045925138432>`);
						message.channel.send(`Event start notification has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
	}
	catch (error) {
		message.guild.channels.cache.find(i => i.name === 'error-reporting').send(`I almost crashed. Fix your shit. \nError code: MESSAGE`);
	}
});

client.login(process.env.BOT_TOKEN);