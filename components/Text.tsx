import React from 'react';

export type IPProps = {};

export const P: React.FC<IPProps> = (props) => {
    return <p className="text-gray-900 text-l" {...props} />;
};

export type IAProps = {};

export const A: React.FC<IAProps> = (props) => {
    return <a className="leading-none text-blue-500 underline text-l" {...props} />;
};
