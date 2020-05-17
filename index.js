const tmi = require('tmi.js')

const currentChannel = 'Leffen'

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'SDMecha',
        password: 'oauth:uirr1kw6yx8xdpj6fotgudkb5cf568',
    },
    channels: [currentChannel],

};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(currentChannel, 'SDMecha is alive.')
});

client.on('chat', (channel, user, message, self) => {
    if(message === '!help') {
        client.say(currentChannel, 'SDMG is my creator, message him for info/troubleshooting at https://twitter.com/_SDMG_')
    }

    if(message === '!greet') {
        client.say(currentChannel, `Hello ${user['display-name']}!`);
    }

    if(message === '!psychopass') {

        y = Math.floor((Math.random() * 10) + 1);

        if(y <= 5){
    
            x = Math.floor((Math.random() * 100) + 1);
            coefficient = `${user['display-name']}'s crime coefficient is ` + x + `%. Suspect is not a target for enforcement action. The trigger of Dominator will be locked.`
        }
        else if(y > 5 && y <= 9){
    
            x = Math.floor((Math.random() * 200) + 1);
            coefficient = `${user['display-name']}'s crime coefficient is ` + (x + 100) + `%. Suspect is classified as a latent criminal and is a target for enforcement action. Dominator is set to Non-Lethal Paralyzer mode.`
        }
        else{
    
            x = Math.floor((Math.random() * 700) + 1);
            coefficient = `${user['display-name']}'s crime coefficient is ` + (x + 300) + `%. Suspect poses a serious threat to the society. Lethal force is authorized. Dominator will automatically switch to Lethal Eliminator.`
        }
        
        client.say(currentChannel, coefficient)
    }

    if(message === '!gilgamesh') {

        client.action(currentChannel, `ZASSHU!`);
    }

    if(message === '!roulette') {

        y = Math.floor((Math.random() * 6) + 1);
        console.log(y)

        if(y <= 4){
    
            client.say(currentChannel, `${user['display-name']} survived the roulette.`)

        }
        else if(y == 5){
    
            client.say(currentChannel, `${user['display-name']} got shot!`)
            client.timeout(currentChannel, `${user['display-name']}`, 180, "Roulette shot");

        }
        else{

            client.action(currentChannel, `${user['display-name']} got sniped, ouch!`)
            client.timeout(currentChannel, `${user['display-name']}`, 300, "Roulette shot");

        }

    }

    if(message === '!nocam') {

        client.say(currentChannel, `Leffen is using a webcam cus he bought the wrong cable.`);
        
    }

    if(message === '!test') {

        client.say(currentChannel, `Change`);
        
    }

});