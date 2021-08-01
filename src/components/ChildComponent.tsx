import React from "react";

interface ChildProps {
    appCouter: number
}

interface ChildState {
    childCouter: number
}

export class ChildComponent extends React.Component<ChildProps, ChildState>{
    state: ChildState ={
        childCouter: 0
    }
    private incrementCounter(){
        this.setState({
            childCouter: this.state.childCouter + 1
        })
        this.props.appCouter = 5; //<-error, read only property
    }

    render(){
        console.log('rendiring');
        
    }
}