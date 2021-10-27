import { createRouter, createWebHashHistory } from "vue-router";

import PageNotFound from '../components/PageNotFound'
import SectionIntroduction from '../components/SectionIntroduction'
import SectionRouterLink from '../components/SectionRouterLink'
import SectionRouterLinkCssActiveClass from '../components/SectionRouterLinkCssActiveClass'
import SectionNavigationThroughMethods from '../components/SectionNavigationThroughMethods'
import SectionRouteParameters from '../components/SectionRouteParameters'
import SectionRouteParametersSample from '../components/SectionRouteParametersSample'
import SectionChildRoutes from '../components/SectionChildRoutes'
import SectionRouteNames from '../components/SectionRouteNames'
import SectionViewNames from '../components/SectionViewNames'
import SectionRoutesOrder from '../components/SectionRoutesOrder'
import SectionRouteRedirect from '../components/SectionRouteRedirect'
import SectionRouteAlias from '../components/SectionRouteAlias'
import SectionRouteNotFound from '../components/SectionRouteNotFound'
import SectionNavigationGuards from '../components/SectionNavigationGuards'
import SectionRoutesTransition from '../components/SectionRoutesTransition'

export default new createRouter({
    // This CSS class will be applied on active links
    linkExactActiveClass: 'link-active',

    history: createWebHashHistory(),

    routes: [
        {
            path: '/router-view',
            alias: '/',
            component: SectionIntroduction
        },
        {
            path: '/router-link',
            component: SectionRouterLink
        },
        {
            path: '/link-exact-active-class',
            component: SectionRouterLinkCssActiveClass
        },
        {
            path: '/navigation-methods',
            component: SectionNavigationThroughMethods
        },
        {
            path: '/parameters',
            component: SectionRouteParameters
        },
        {
            path: '/parameters/sample/:myCustomParameter?',
            component: SectionRouteParametersSample
        },
        {
            path: '/child-routes',
            component: SectionChildRoutes
        },
        {
            path: '/route-names',
            component: SectionRouteNames
        },
        {
            path: '/view-names',
            component: SectionViewNames
        },
        {
            path: '/route-orders',
            component: SectionRoutesOrder
        },
        {
            path: '/redirect',
            component: SectionRouteRedirect
        },
        {
            path: '/redirect-sample',
            redirect: '/'
        },
        {
            path: '/alias',
            alias: '/alias-sample',
            component: SectionRouteAlias
        },
        {
            path: '/not-found-page',
            component: SectionRouteNotFound
        },
        {
            path: '/navigation-guards',
            component: SectionNavigationGuards
        },
        {
            path: '/transitions',
            component: SectionRoutesTransition
        },
        {
            path: "/:catchAll(.*)",
            component: PageNotFound
        }
    ]
})