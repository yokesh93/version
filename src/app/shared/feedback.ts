export class FeedBack {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType: string[] = [ 'None', 'Tel', 'Email' ];
