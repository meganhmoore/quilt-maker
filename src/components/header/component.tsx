import Link from 'next/link';
import React from 'react';
import Dropdown from 'components/dropdown';

export const BaseHeader: React.FC = ({children}) => (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
        <div className="flex items-center justify-between h-20 max-w-4xl px-4 mx-auto">{children}</div>
    </header>
);

const Header: React.FC = () => {
    // TODO: make an SVG icon
    return (
        <BaseHeader>
            <Link href="/">
                <a>QuiltMaker</a>
            </Link>
            <Dropdown />
        </BaseHeader>
        
    );
}

export default Header;