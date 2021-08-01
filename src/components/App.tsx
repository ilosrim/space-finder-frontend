import React from 'react';
import { User } from '../model/Model';
import { Services } from '../services/Services';
import { Login } from './Login';

interface AppState{
    user: User | undefined
}
export class App extends React.Component<{}, AppState>{

    private Services: Services = new Services();

    render(){
        return(
            <div>App from class component!!!
                <Login Services={this.Services}/>
            </div>
        )
    }
}

export default App;