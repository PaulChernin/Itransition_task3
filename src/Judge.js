export class Judge {
    constructor(moveNames) {
        this.moveNames = moveNames
    }

    modularSubtract(a, b, module) {
        if (a < b) {
            a += module
        }
        return a - b
    }

    getWinner(computerMove, playerMove) {
        if (computerMove === playerMove) {
            return 'Draw'
        }
        const d = (this.moveNames.length - 1) / 2
        const playerWin = this.modularSubtract(playerMove, computerMove, this.moveNames.length) <= d
        return playerWin ? 'Player' : 'Computer'
    }
}