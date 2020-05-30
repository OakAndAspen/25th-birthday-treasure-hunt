import React from 'react';

class NotFound extends React.Component {

    render() {
        return <div className="text-center p-4 my-4">
            <h1>Cette page n'existe pas!</h1>
            <i className="text-muted">C'est peut-être une conspiration...</i>
        </div>;
    }
}

export default NotFound;
