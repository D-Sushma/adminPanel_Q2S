import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';


// const FilterRecord = Loadable(lazy(() => import('./FilterRecord')));

// =------------- OR--------------------------------

import FilterRecord from "./FilterRecord"
const TotalRecordDetails = Loadable(lazy(() => import('./Shared/TotalRecordDetails')));

const FilterRecordRoute = [
  { path: '/filter/FilterRecord', element: <FilterRecord />, auth: authRoles.admin },
  { path: '/filter/TotalRecordDetails', element: <TotalRecordDetails /> },
  // { path: '/filter/TotalRecordDetails/:trId', element: <TotalRecordDetails /> },
];

export default FilterRecordRoute;