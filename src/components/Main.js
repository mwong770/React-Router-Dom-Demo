import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import DesignPlan from './pages/DesignPlan.js';
import NewProjectForm from './pages/NewProjectForm.js';
import ProjectEditForm from './pages/ProjectEditForm.js';
import NewUserProfileForm from './pages/NewUserProfileForm';
import UserProfileEditForm from './pages/UserProfileEditForm';
import ProjectList from './pages/ProjectList';
import ReportsList from './pages/ReportsList';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/design" component={DesignPlan} />
    <Route exact path="/new_project" component={NewProjectForm} />
    <Route exact path="/project_edit" component={ProjectEditForm} />
    <Route exact path="/new_profile" component={NewUserProfileForm} />
    <Route exact path="/profile_edit" component={UserProfileEditForm} />
    <Route exact path="/project_list" component={ProjectList} />
    <Route exact path="/reports_list" component={ReportsList} />
  </Switch>
);

export default Main;

