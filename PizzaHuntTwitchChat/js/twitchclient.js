const client = new tmi.Client({
    channels: ['porkiswayne']  //!! CHANGE THIS.
});

const DIRECTION_CMDS = {
    "up": "up",
    "down": "down",
    "left": "left",
    "right": "right"
}

client.connect();
client.on('message', (channel, tags, message, self) => {
    //!! IF YOU WANT A ! COMMAND.
    // if (self || !message.startsWith('!')) return;

    // const args = message.slice(1).split(' ');
    // const command = args.shift().toLowerCase();
    // const direction = args.shift().toLowerCase();

    // if (command === 'mv') {
    //     moveDir(direction);
    // }

    //!! IF YOU DONT WANT A ! COMMAND.
    const args = message.split(' ');
    const direction = args.shift().toLowerCase();
    if (Object.values(DIRECTION_CMDS).includes(direction)) {
        window.userInput = DIRECTION_CMDS[direction]
    }
});

