class ProjectInput {
    templateElement: HTMLTemplateElement;
    parentElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.parentElement = document.getElementById('app')! as HTMLDivElement;
        
        const importNode = document.importNode(this.templateElement.content,true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.parentElement.insertAdjacentElement('afterbegin',this.element);
    }
}

const projectInput = new ProjectInput();