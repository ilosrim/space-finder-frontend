import { User } from '../model/Model';

export class Services {
    public async login(userName: string, password: string):Promise<User | undefined>{
        if (userName === 'user' && password === '1234') {
            return{
                userName: userName,
                email: 'some@gmail.com'
            }
        } else {
            return undefined
        }
    }
}