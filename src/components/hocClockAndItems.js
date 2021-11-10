//HOC which return hook
import React, { useEffect, useState } from 'react';

const Clock = hocClockReturnHook(class Clocks extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                    <p>{this.props.ticks}</p>
            </div>
        )
    }
});

const Items = hocClockReturnHook(class Item extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const items=['good', 'exelent','nice']
        return (
            
            <div>
                 <p>{items[this.props.ticks % items.length]}</p>
            </div>
        )
    }
})
export default { Clock, Items };



function hocClockReturnHook(Component) {
    return function HOCclocks() {


        const [ticks, setTicks] = useState(0);

        function tick() {
            setTicks(val => ( val + 1));
        }
    

        useEffect(function () {
            const time = setInterval(tick, 1000);
                    
                return function cancel() {
                    clearInterval(time);
                    }
        }, []);                   

        return (
            <Component ticks={ticks}></Component>
        )
    }
}





