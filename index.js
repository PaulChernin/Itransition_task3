import { Game } from './src/game.js'
import { MovesValidator } from './src/MovesValidator.js'

const moves = process.argv.slice(2)

const validator = new MovesValidator()
const error = validator.validate(moves)

if (error) {
    console.log(error)
    process.exit(1)
}

const game = new Game(moves)
game.run()
