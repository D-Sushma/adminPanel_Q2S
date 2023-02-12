import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const CompetitionGroup = Loadable(lazy(() => import('./CompetitionGroup')));
const MoreDetailsTable = Loadable(lazy(() => import('./Shared/MoreDetailsTable')));

const CompetitionListRoute = [
  { path: '/competition-group/CompetitionGroup', element: <CompetitionGroup /> },
  { path: '/competition-group/MoreDetailsTable/:cgId', element: <MoreDetailsTable /> },
];

export default CompetitionListRoute;