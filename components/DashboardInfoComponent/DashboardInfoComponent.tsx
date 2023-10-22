import React from 'react';

const DashboardInfoComponent = (props: {
    title: string
}) => {
    return (
        <div className='DashboardInfoComponent'>
            <h2> {props.title} </h2>
        </div>
    );
};

export default DashboardInfoComponent;