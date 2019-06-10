import React from 'react';

const withConditionalRender = FirstComp => SecondComp => 
    class extends React.Component {
        render() {
            if(localStorage.getItem("loggedIn")) {
                console.log("logged in")
                return <FirstComp {...this.props}/>;
            } else {
                console.log("logged out")
                return <SecondComp {...this.props}/>;
            }
        }
    };

    export default withConditionalRender;
