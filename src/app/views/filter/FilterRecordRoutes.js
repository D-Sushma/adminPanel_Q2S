// import Loadable from 'app/components/Loadable';
// import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


// const FilterRecord = Loadable(lazy(() => import('./FilterRecord')));

// =------------- OR--------------------------------

import FilterRecord from "./FilterRecord"

const FilterRecordRoute = [
  { path: '/filter/FilterRecord', element: <FilterRecord />, auth: authRoles.admin },
];

export default FilterRecordRoute;