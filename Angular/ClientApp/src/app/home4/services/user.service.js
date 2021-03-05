export class UserService {
    constructor() {
        this.active = ['Juan', 'Cacho'];
        this.inactive = ['Pepe', 'Lucas'];
    }
    activate(index) {
        console.log(this.inactive[index]);
        this.active.push(this.inactive[index]);
        this.inactive.splice(index, 1);
    }
    deactivate(index) {
        console.log(this.active[index]);
        this.inactive.push(this.active[index]);
        this.active.splice(index, 1);
    }
}
//# sourceMappingURL=user.service.js.map