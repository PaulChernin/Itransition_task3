import PromptSync from 'prompt-sync'

export class Menu {
    constructor(moves) {
        this.moves = moves
        this.prompt = PromptSync()
    }

    writeAvailableActions() {
        console.log('Available moves:')
        for (const i in this.moves) {
            console.log(`${parseInt(i) + 1} - ${this.moves[i]}`)
        }
        console.log('0 - exit')
        console.log('? - help')
    }

    isValid(action) {
        if (action === '?') {
            return true
        }
        const number = parseInt(action)
        return !isNaN(number) && number >= 0 && number <= this.moves.length
    }

    getAction() {
        this.writeAvailableActions()
        let action
        do {
            action = this.prompt('Enter your move: ')
        } while (!this.isValid(action))
        return action
    }
}