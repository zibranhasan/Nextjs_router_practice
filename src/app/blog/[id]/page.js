import React from 'react';

const dynamicpage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>dynamic route{params.id}</h1>
        </div>
    );
};

export default dynamicpage;