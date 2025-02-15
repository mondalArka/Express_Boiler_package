import { EventEmitter } from "events"

class Events extends EventEmitter {
    constructor() {
        super()
    }
    EmitMessage(event: string, payload: unknown) {
        this.emit(event, payload);
    }
}

export default new Events();