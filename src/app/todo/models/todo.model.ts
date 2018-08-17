export class TODO {
    id: number;
    description: string;
    priority: number;
    status: Status;
}

export abstract class Status {
    static readonly TODO = 'TODO';
    static readonly WORKING = 'WORKING';
    static readonly DONE = 'DONE';
}