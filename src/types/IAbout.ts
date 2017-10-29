import { ILink } from './ILink';

export interface IAbout {
    name: string;
    job: string;
    email: string;
    phoneNumber?: string;
    location: string;
    linkedIn?: string;
    gitHub?: string;
    summary?: string;
}
