
export class GameBallReceived{
    balls!: Array<GameDataReceived>
}

export class GameDataReceived{
    number: number = 0
    color!: string
    disabled!: boolean
}