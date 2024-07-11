import { Context, Scenes } from 'telegraf'

// export interface SessionData {
//     address: string
//     privateKey: string
//     userId: number
//     userName: string  
// }

export interface SessionData extends Scenes.SceneSession {
    address: string
    privateKey: string
    userId: number
    userName: string
    testValue: string
}

export interface AppContext extends Context {
    session: SessionData
    scene: Scenes.SceneContextScene<AppContext>
}