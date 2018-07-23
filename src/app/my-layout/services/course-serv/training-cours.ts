import { Cours } from "../../../entitys/cours.model";

export class TrainingCours implements Cours {
    public id: number;
    public title: string;
    public CreationDate: Date;
    public Duration: number;
    public Description: string;
    public topRated: boolean;
    constructor(id: number, title: string, CreationDate: Date, Duration: number, Description: string, topRated: boolean) {
        this.id = id;
         this.title = title;
         this.CreationDate = CreationDate
         this.Duration = Duration;
         this.Description = Description;
         this.topRated = topRated;
    }
}