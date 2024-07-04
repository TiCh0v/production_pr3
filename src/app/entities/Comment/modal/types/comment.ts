import { User } from "app/entities/User";


export interface Comment {
    id: string;
    text: string;
    user: User;
}