import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import CompetitionListRoutes from './views/competition-list/CompetitionListRoutes';
// import Home from './views/dashboard/Home';
import MemberRegistrationRoutes from './views/registration/MemberRegistrationRoutes';



const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />

        {/* <Registration /> */}
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes],
    // children: [...Home, ...chartsRoute, ...materialRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },
  
  // MEMBER REGISTRATION  or COMPETITION-LIST------------------------------------------
  ...MemberRegistrationRoutes,
  ...CompetitionListRoutes,
];

export default routes;
