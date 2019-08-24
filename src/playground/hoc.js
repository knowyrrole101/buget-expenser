// Higher Order Component (HOC) - Component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>asdasd
            <p>Big Time Info: {props.info}</p>
        </div>
    )
};
// Higher Order Component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share:</p>  }
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? 
                (<WrappedComponent {...props} />) : (<p>Not Logged in!</p>)  
            }  
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthUser = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Here are the dynamic details'/>, document.getElementById('app'));
ReactDOM.render(<AuthUser isAuth={true} info='Here are the dynamic details'/>, document.getElementById('app'));