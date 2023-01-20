// import Loadable from 'app/components/Loadable';
// import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


// const MemberRegistration = Loadable(lazy(() => import('./MemberRegistration')));

// =------------- OR--------------------------------

import MemberRegistration from "./MemberRegistration"

const MemberRegistrationRoute = [
  { path: '/registration/MemberRegistration', element: <MemberRegistration />, auth: authRoles.admin },
];

export default MemberRegistrationRoute;