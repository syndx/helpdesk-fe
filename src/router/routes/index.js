// ** Routes Imports
import DashboardRoutes from './Dashboards'
import TicketRoutes from './Ticket'
import PagesRoutes from './Pages'
import UsersRoutes from './Users'

// ** Document title
const TemplateTitle = '%s - Sample Dashboard'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...TicketRoutes,
  ...UsersRoutes,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
