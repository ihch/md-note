import React from 'react';

export type IH1Props = {};

export const H1: React.FC<IH1Props> = (props) => {
  return <h1 className="py-2 text-4xl font-semibold text-gray-800 border-b-2 border-gray-300" {...props} />;
};

export type IH2Props = {};

export const H2: React.FC<IH2Props> = (props) => {
  return <h1 className="py-2 text-3xl font-semibold text-gray-800" {...props} />;
};

export type IH3Props = {};

export const H3: React.FC<IH3Props> = (props) => {
  return <h1 className="py-2 text-2xl font-semibold text-gray-800" {...props} />;
};
