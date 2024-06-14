import { Context } from 'telegraf'

export interface SessionData {
    address: string
    privateKey: string
    userId: number
    userName: string  
}

export interface AppContext extends Context {
    session: SessionData
}