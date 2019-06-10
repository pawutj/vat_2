import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'blank_page',
    component: asyncComponent(() => import('./containers/blankPage'))
  },
  {
    path: 'setting',
    component: asyncComponent(() => import('./containers/Setting'))
  },
  {
    path: 'pp10',
    component: asyncComponent(() => import('./containers/PP10'))
  }
  ,
  {
    path: 'main',
    component: asyncComponent(() => import('./containers/Main'))
  }

  ,{
    path: 'report',
    component: asyncComponent(() => import('./containers/Report'))
  }

];
export default routes;
