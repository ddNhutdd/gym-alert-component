import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    const { text } = props;
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    )
}

Alert.propTypes = {
    text: PropTypes.string
}

export default Alert