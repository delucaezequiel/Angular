export class CounterService {
    constructor() {
        this.active = 0;
        this.inactive = 0;
    }
    increaseActive() {
        this.active++;
        console.log("Active:", this.active);
    }
    increaseInactive() {
        this.inactive++;
        console.log("Inactive:", this.inactive);
    }
}
//# sourceMappingURL=counter.service.js.map