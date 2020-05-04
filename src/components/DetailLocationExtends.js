import React, { Component } from 'react';
import PropTypes from 'prop-types';
class DetailLocationExtends extends Component{

    
    render() {
        const { city } = this.props;
            return(
                <div>
                    Componente extendido. { city }
                </div>
            );
    }
}

DetailLocationExtends.propTypes = {
    city: PropTypes.string.isRequired,
}

export default DetailLocationExtends;