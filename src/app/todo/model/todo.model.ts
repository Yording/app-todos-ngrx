import { guid, capitalize } from '../../configurations/functions';
export class Todo {

    public id: string
    public text: string
    public completed: boolean = false

    constructor(
        text: string
    ){
        this.id = guid()
        this.text = capitalize(text)
    }
}
