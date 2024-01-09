function parseInput(dir) {
    switch (dir) {
        case DIRECTION_CMDS["left"]:
            player.x -= PLAYERSPEED;
            break;
        case DIRECTION_CMDS["down"]:
            player.y += PLAYERSPEED;
            break;
        case DIRECTION_CMDS["right"]:
            player.x += PLAYERSPEED;
            break;
        case DIRECTION_CMDS["up"]:
            player.y -= PLAYERSPEED;
            break;
        default:
            break;
    }
}