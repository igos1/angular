import { Cours } from "../../../entitys/cours.model";

export class TrainingCours implements Cours {
    public id: number;
    public title: string;
    public creationDate: Date;
    public duration: number;
    public description: string;
    public topRated: boolean;
    constructor(id: number, title: string, creationDate: Date, duration: number, description: string, topRated: boolean) {
        this.id = id;
         this.title = title;
         this.creationDate = creationDate
         this.duration = duration;
         this.description = description;
         this.topRated = topRated;
    }
}