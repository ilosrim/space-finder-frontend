import React from "react";
import { ChildComponent } from './ChildComponent';

interface AppState {
    appCouter: number
}

export class AppState extends React.Component<{}, AppState>{
    state: AppState ={
        appCouter: 0
    }
    private incrementCounter(){
        this.setState({
            appCouter: this.state.appCouter + 1
        })
    }

    render(){
        console.log('rendiring child component!');
        return(
            <div className="ParentComponent">
                This is the Parent Component! <br/>
                <button onClick={() => this.incrementCounter()}>Increment parent counter</button>
                <ChildComponent />
            </div>
        )
    }
}