class ToDo {
    constructor(selector) {
        this.container = document.querySelector(selector) || document.body
       
        this.tasks = [{
            text: "Lista zadań do zrobienia",
            isCompleted: false,
        }]

        this.render()
    }
    
    addTask(newTaskText){
        const newTask = {

            text:newTaskText,
            isCompleted:false,
        }

        this.tasks = this.tasks.concat(newTask)

        this.render()
    }
    render() {
        this.container.innerHTML = ''

        this.renderForm()

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

    renderForm(){
        const div = document.createElement('div')
        const input = document.createElement('input')
        const button = document.createElement ('button')

        input.setAttribute('placeholder', 'Nowe zadanie')
        button.innerText = 'Dodaj!'

        const clickHandler = () => this.addTask (input.value)

        button.addEventListener(
            'click',
            clickHandler
        )
        console.dir(clickHandler)

        div.appendChild(input)
        div.appendChild(button)
        this.container.appendChild(div)

    }
}