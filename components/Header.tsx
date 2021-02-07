import * as React from 'react';

export type IHeaderProps = {
  title: string;
};

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return <div className="p-4 px-8 text-3xl text-white bg-gray-700">{title}</div>;
};

export default Header;
