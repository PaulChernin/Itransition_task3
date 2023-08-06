import { Table, printTable } from "console-table-printer"

export class TipGenerator {
    constructor(judge) {
        this.judge = judge
    }

    getCellText(winner) {
        const texts = {
            Draw: 'Draw',
            Player: 'Win',
            Computer: 'Lose'
        }
        return texts[winner]
    }

    generateCell(computerMove, playerMove) {
        const winner = this.judge.getWinner(computerMove, playerMove)
        return this.getCellText(winner)
    }

    generateRow(computerMove) {
        const row = {}
        const firstColumnHeader = 'Computer\\Player'
        row[firstColumnHeader] = this.judge.moveNames[computerMove]
        this.judge.moveNames.forEach((_, playerMove) => {
            const playerMoveName = this.judge.moveNames[playerMove]
            row[playerMoveName] = this.generateCell(computerMove, playerMove)
        })
        return row
    }

    generateRows() {
        return this.judge.moveNames.map((_, move) => this.generateRow(move))
    }
    
    showMoveTable() {
        const table = new Table()
        table.addColumns(['Computer\\Player', ...this.judge.moveNames])
        table.addRows(this.generateRows())
        table.printTable()
    }
}