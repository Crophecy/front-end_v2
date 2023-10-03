
import { Component } from 'react';
class C3 extends Component
{
    componentWillUnmount()
    {
        console.log("I am component Will Unmount method");

    }
    render()
    {
        return(
            <div>
                <h1>This component will be removed ..</h1>
            </div>
        )
    }
}

export default C3;