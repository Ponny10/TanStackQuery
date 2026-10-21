import { Outlet } from 'react-router';
import { NavBar } from '../../shared';

export const StoreLayout = () => {
    return (
        <div className="flex flex-col pb-10">
            <NavBar />

            <div className="flex mt-14 px-10">
                <Outlet />
            </div>
        </div>
    );
};
