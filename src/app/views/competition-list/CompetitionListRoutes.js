// import Loadable from 'app/components/Loadable';
// import { lazy } from 'react';


// const CompetitionList = Loadable(lazy(() => import('./CompetitionList')));

// =------------- OR--------------------------------
import CompetitionList from "./CompetitionList";

const CompetitionListRoute = [
  { path: '/competition-list/CompetitionList', element: <CompetitionList /> },
];

export default CompetitionListRoute;