// import Loadable from 'app/components/Loadable';
// import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


// const UserTable = Loadable(lazy(() => import('./UserTable')));

// =------------- OR--------------------------------

import UserTable from "./UserTable"

const UserTableRoute = [
  { path: '/user-table/UserTable', element: <UserTable />, auth: authRoles.admin },
];

export default UserTableRoute;