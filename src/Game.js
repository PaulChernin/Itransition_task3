import { Hasher } from "./Hasher.js"
import { Judge } from "./Judge.js"
import _ from 'lodash'
import { TipGenerator } from "./TipGenerator.js"
import { Menu } from "./Menu.js"

export class Game {
    constructor(moveNames) {
        this.moveNames = moveNames
        this.hasher = new Hasher()
        this.judge = new Judge(this.moveNames)
        this.tipGenerator = new TipGenerator(this.judge)
        this.menu = new Menu(this.moveNames)
    }

    getRandomMove() {
        return _.random(0, this.moveNames.length - 1)
    }

    makeComputerMove() {
        this.computerMove = this.getRandomMove()
        const hmac = this.hasher.getHmac(this.moveNames[this.computerMove])
        console.log('HMAC: ' + hmac)
    }

    getPlayerMove() {
        let action = this.menu.getAction()
        while (action === '?' || action === '0') {
            if (action === '0') {
                process.exit(0)
            }
            this.tipGenerator.showMoveTable()
            action = this.menu.getAction()
        }
        this.playerMove = parseInt(action) - 1
        console.log('Your move: ' + this.moveNames[this.playerMove])
    }

    showWinner() {
        console.log('Computer\'s move: ' + this.moveNames[this.computerMove])
        const winner = this.judge.getWinner(this.computerMove, this.playerMove)
        const message = (winner === 'Draw') ? 'Draw' : (winner + ' wins!')
        console.log(message)
        console.log('HMAC key: ' + this.hasher.getKey())
    }
    
    run() {
        this.makeComputerMove()
        this.getPlayerMove()
        this.showWinner()
    }
}