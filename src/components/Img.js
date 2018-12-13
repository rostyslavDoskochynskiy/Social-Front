import React from 'react';

const style = {
    width: 'inherit',
    height: 'inherit',
    borderRadius: '100px'
};

export default ({src, className, alt}) => {
    return <div className={className}><img style={style} src={src} alt={alt}/></div>
}

