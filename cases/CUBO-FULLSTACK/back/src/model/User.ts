export default class User {
    constructor(
        private id: string,
        private first_name: string,
        private second_name: string,
        private participation: number,
    ) { }

    public getId() {
        return this.id
    }
    public getFirst_name() {
        return this.first_name
    }
    public getSecond_name() {
        return this.second_name
    }
    public getParticipation() {
        return this.participation
    }
} 