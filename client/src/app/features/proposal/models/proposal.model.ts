export class Proposal {
    public message: string
    public email: string
    public userId: string | null

    constructor(message: string, email: string, userId: string | null) {
        this.message = message;
        this.email = email;
        this.userId = userId
    }

}