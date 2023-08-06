import crypto from 'crypto' 

export class Hasher {
    constructor() {
        this.key = crypto.randomBytes(32)
    }

    getHmac(str) {
        return crypto.createHmac('sha3-256', this.key)
            .update(str)
            .digest('hex')
    }

    getKey() {
        return this.key.toString('hex')
    }
}