import { createRouter, createWebHashHistory } from "vue-router";

import PageNotFound from '../components/PageNotFound'
import SectionIntroduction from '../components/SectionIntroduction'
import SectionRouterLink from '../components/SectionRouterLink'
import SectionRouterLinkCssActiveClass from '../components/SectionRouterLinkCssActiveClass'
import SectionNavigationThroughMethods from '../components/SectionNavigationThroughMethods'

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
            path: "/:catchAll(.*)",
            component: PageNotFound
        }
    ]
})