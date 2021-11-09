
export class GameBallReceived{
    balls!: Array<GameDataReceived>
    resultado!: number
}

export class GameDataReceived{
    number: number = 0
    color: string = ''
    disabled!: boolean
}