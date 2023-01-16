import Loadable from 'app/components/Loadable';
import { lazy } from 'react';


const CompetitionGroup = Loadable(lazy(() => import('./CompetitionGroup')));

const CompetitionListRoute = [
  { path: '/competition-group/CompetitionGroup', element: <CompetitionGroup /> },
];

export default CompetitionListRoute;