
    class ToDo {
        constructor(selector) {
            this.container = document.querySelector(selector) || document.body

            this.tasks = JSON.parse(localStorage.getItem('to-do-list')) || []


            this.render()
        }

        toggleTask(taskIndex) {
            this.tasks = this.tasks.map(
                (task, index) => (
                    index === taskIndex ?
                        {
                            text: task.text,
                            isCompleted: !task.isCompleted,
                        }
                        :
                        task
                )
            )

            this.render()
        }

        addTask(newTaskText) {
            const newTask = {
                text: newTaskText,
                isCompleted: false,
            }

            this.tasks = this.tasks.concat(newTask)

            this.render()
        }

        render() {
            this.container.innerHTML = ''

            this.renderForm()

            this.tasks.forEach(
                (task, index) => this.renderTask(task, index)
            )
        }

        renderTask(task, index) {
            const div = document.createElement('div')

            div.innerText = task.text

            if (task.isCompleted) div.style.textDecoration = 'line-through'

            div.addEventListener(
                'click',
                () => this.toggleTask(index)
            )

            this.container.appendChild(div)
        }

        renderForm() {
            const div = document.createElement('div')
            const input = document.createElement('input')
            const button = document.createElement('button')

            input.setAttribute('placeholder', 'Wprowadź nowe zadanie')
            button.innerText = 'Dodaj!'

            const clickHandler = () => this.addTask(input.value)

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