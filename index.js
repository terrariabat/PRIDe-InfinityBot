// Written by Terrariabat/Evan F \\

const ROBLOX = require('roblox-js');
const DISCORD= require('discord.js');
const DISCORD_KEY= 'NTEwOTQ2MTU5NTc4MzE2ODAy.Dsjwuw.DErxEnNEJILnAv--GmDUgCcXoaQ';

const HOOK_TOKEN= 'DJKHIDO76FBJNDHFI7f88f87a__nfdknsjani8979879↨8574612845♣♦8Ç2♠☺36☺♦45♠ü○☺';

const rblx= ROBLOX.login("PRIDe_bot","SocialJustice123");

const XYLEM=1179443;
const PB=159511;
const PIA=670202;
const PBA=926624;
const MM=1062766;
const PBMRC=2722566;
const PET=2593707;
const PBV=240214;
const LAUNDROMAT=2538154;
const PBST=645836;
const TCORP=3957087;

function roleUser(group,rank,user){
    ROBLOX.setRank(group,user,rank);
    //'RANK CHANGED INFO : '+toString(group+rank+user)
    logActivity('COMMAND : ROLE_USER : '+group+' '+rank+' '+user)
};

function print(msg){
    console.log(msg);
};

function toNumber(str){
    parseInt(str);
};

print('Initiating Startup');

const PRIDE_BOT= new DISCORD.Client();

PRIDE_BOT.login(DISCORD_KEY);

PRIDE_BOT.on('ready',function(){
PRIDE_BOT.user.setActivity('Crying Exploiters',{type: "LISTENING"});
PRIDE_BOT.user.setStatus('Idle');
{print('Startup Finished')}});

function logActivity(txt){
    PRIDE_BOT.channels.get('512026117448794112').send({embed: {
          title: "PRIDe System Log",
          color: 297,
          footer: {
            icon_url: "https://t6.rbxcdn.com/956acc6bf87ce8fc87246106cbeb182a",
            text: "Made by Diamond04_04 and Terrariabat"
          },
          thumbnail: {
            url: "https://i.imgur.com/sB1AcVp.png"
          },
          fields: [
            {
              name: "```LOG REPORT```",
              value: txt
            }
          ]
        }
      });
};

                    //Main Code\\

PRIDE_BOT.on('message',function(message){
    if(message.guild.id==505164343017472000){
    if(message.content.startsWith('$PRIDE')){
        let fullCommand = message.content.substr(1);
        let splitCommand = fullCommand.split(' ');
        let primaryCommand = splitCommand[0];
        let arguments = splitCommand.slice(1);
        
        console.log("Command received: " + arguments[0]);
        console.log("Arguments: " + arguments);

        if(arguments[0]=='ROLE_USER'){
            roleUser(parseInt(arguments[1]), parseInt(arguments[2]), parseInt(arguments[3]));
        } else if(arguments[0]=='HELP') {
            message.channel.send('```lua\n\n        --PRIDe Bot Help--\n       --Prefix is $PRIDE-- \n --HELP - Brings up this menu\n --ROLE_USER <GroupID> <RankNumber> <UserID> - Ranks a user```');
        };
    };
}});


PRIDE_BOT.on('guildMemberAdd',function(member){
member.user.createDM('Welcome to Pinewood Builders!');

});