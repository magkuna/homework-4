class ToDo {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
       
        this.tasks = [{
            text: "Lista zadań do zrobienia",
            isCompleted: false,
        }]

        this.render()
    }

    render() {
        this.container.innerHTML = ''

       

        this.tasks.forEach(
            task =>this.renderTask(task)
        )

    }
    renderTask(task){
        const div = document.createElement ('div')

        div.innerText = task.text

        if (task.isCompleted) div.style.textDecoration = 'line-through'

        this.container.appendChild(div)
    
    }
}