import { NavLink } from 'react-router';

import { AcmeLogo } from './AcmeLogo';

const routes = [
    { to: '/', text: 'Todo' },
    { to: '/men', text: 'Hombres' },
    { to: '/women', text: 'Mujeres' },
];

export const NavBar = () => {
    return (
        <div className="flex flex-row bg-amber-300 fixed z-1 w-full px-10 py-2">
            <div>
                <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p>
            </div>

            <div className="flex flex-1 justify-center items-center gap-2">
                {routes.map(({ to, text }) => (
                    <div className="w-20 items-center justify-center" key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                isActive ? 'bg-white p-2 rounded-md w-20' : ' w-20 bg-transparent'
                            }>
                            {text}
                        </NavLink>
                    </div>
                ))}
            </div>

            <div>
                <div>
                    <NavLink color="primary" to="/new">
                        Nuevo producto
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
