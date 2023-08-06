export class MovesValidator {
    validate(moves) {
        if (moves.length === 0) {
            return 'Please provide moves set. For example: rock paper scissors'
        }
        
        if (moves.length === 1) {
            return 'The length of moves set shoud be more than 1. For example: rock paper scissors'
        }
        
        if (moves.length % 2 === 0) {
            return 'The length of moves set should be odd. For example: rock paper scissors'
        }

        if (new Set(moves).size < moves.length) {
            return 'All moves should be different. For example: rock paper scissors'
        }

        return null
    }
}