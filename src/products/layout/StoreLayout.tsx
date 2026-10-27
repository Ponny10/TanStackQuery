import { Outlet } from 'react-router';

import { NavBar } from '../../shared';

export const StoreLayout = () => {
    return (
        <div className="flex flex-col pb-12">
            <NavBar />
            <div className="flex mt-24 px-18">
                <Outlet />
            </div>
        </div>
    );
};
