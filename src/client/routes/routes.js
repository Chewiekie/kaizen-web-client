import CreateUser from '../components/pages/CreateUser/CreateUser';
import NotFound from '../components/pages/NotFound';
import Login from '../components/pages/Login/Login';
import TemplatesManagement from '../components/pages/TemplatesManagement/TemplatesManagement';
import TemplateEditor from '../components/pages/TemplateEditor/TemplateEditor';
import UsersManagement from '../components/pages/UsersManagement/UsersManagement';
import PatientsManagement from '../components/pages/PatientsManagement/PatientsManagement';
import PatientTests from '../components/pages/PatientTests/PatientTests';
import UserProfile from '../components/pages/UserProfile/UserProfile';
import TestsHistory from '../components/pages/TestsHistory/TestsHistory';
import Settings from '../components/pages/Settings/Settings';
import Main from '../components/pages/Main/Main';

import {
  login,
  templatesManagement,
  templateEditor,
  usersManagement,
  patientsManagement,
  patientTests,
  testsHistory,
  userProfile,
  settings,
  createUser,
  main,
} from './paths';

export default [
  {
    path: login(),
    component: Login,
    exact: true,
  },
  {
    path: templatesManagement(),
    component: TemplatesManagement,
    exact: true,
  },
  {
    path: templateEditor(),
    component: TemplateEditor,
    exact: true,
  },
  {
    path: usersManagement(),
    component: UsersManagement,
    exact: true,
  },
  {
    path: patientsManagement(),
    component: PatientsManagement,
    exact: true,
  },
  {
    path: patientTests(),
    component: PatientTests,
    exact: true,
  },
  {
    path: testsHistory(),
    component: TestsHistory,
    exact: true,
  },
  {
    path: settings(),
    component: Settings,
    exact: true,
  },
  {
    path: userProfile(),
    component: UserProfile,
    exact: true,
  },
  {
    path: createUser(),
    component: CreateUser,
    exact: true,
  },
  {
    path: main(),
    component: Main,
    exact: true,
  },
  {
    path: null,
    component: NotFound,
    exact: false,
  },
];
