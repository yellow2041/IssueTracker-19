import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  NotFound,
  Issue,
  IssueNew,
  Login,
  SignUp,
  Label,
  Milestone,
  MilestoneNew,
  MilestoneEdit,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Issue} />
        <Route path="/issues/new" exact component={IssueNew} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/labels" component={Label} />
        <Route path="/milestones" exact component={Milestone} />
        <Route path="/milestones/new" component={MilestoneNew} />
        <Route path="/milestones/:no" component={MilestoneEdit} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
