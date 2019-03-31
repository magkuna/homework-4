class ToDo {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
        this.tasks = [{
            isCompleted: false,
        }]
    }
}