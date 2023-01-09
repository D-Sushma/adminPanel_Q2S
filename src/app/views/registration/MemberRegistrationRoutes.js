// import Loadable from 'app/components/Loadable';
// import { lazy } from 'react';


// const MemberRegistration = Loadable(lazy(() => import('./MemberRegistration')));

// =------------- OR--------------------------------

import MemberRegistration from "./MemberRegistration"
const MemberRegistrationRoute = [
  { path: '/registration/MemberRegistration', element: <MemberRegistration /> },
];

export default MemberRegistrationRoute;