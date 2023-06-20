import * as React from 'react';
import Link from 'next/link';

export type IHeaderProps = {
    title: string;
};

const Header: React.FC<IHeaderProps> = ({ title }) => {
    return (
        <div className="p-4 px-8 text-3xl text-white bg-gray-700">
            <Link href="/">{title}</Link>
        </div>
    );
};

export default Header;
