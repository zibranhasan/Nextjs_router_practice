import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const groupLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Sidebar />
        </div>
    );
};

export default groupLayout;