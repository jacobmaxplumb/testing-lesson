export interface UserInterface {
    id: number;
    name: string;
}

export class UserClass {
    id: number = 0;
    name: string = '';
    constructor(initialValues?: Partial<UserClass>) {
        if (initialValues) Object.assign(this, initialValues);
    }
}

const user: UserInterface = {
    id: 1,
    name: 'Jacob'
}

const userTwo = new UserClass({id: 5, name: 'James'});