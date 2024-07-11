import { Wallet } from 'ethers'
import crypto from 'crypto'

export const createWallet = async (secretKey: string) => {
    const wallet = Wallet.createRandom()

    const privateKey = wallet.privateKey
    const address = wallet.address

    return JSON.stringify({
        address,
        privateKey
    })
}