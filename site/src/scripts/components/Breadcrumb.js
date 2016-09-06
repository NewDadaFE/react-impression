import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb } from './impression';

const WrapBreadcrumb = ({ routes }) => {
    routes = routes.slice(1);
    let length = routes.length;

    return (
        <Breadcrumb>
            { routes.map((route, index) => {
                if(index < length - 1) {
                    return (
                        <Link key={route.path} to={`/${route.path}`}>
                            {route.path === 'app' ? 'home' : route.path}
                        </Link>
                    );
                }

                return <span key={route.path}>{route.path}</span>;
            })}
        </Breadcrumb>
    );
};

export default WrapBreadcrumb;
