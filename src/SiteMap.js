/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React from 'react'
import _ from 'lodash'
import { Route } from 'react-router-dom'

import BarPage from './components/charts/bar/BarPage'
import Bar from './components/charts/bar/Bar'
import BarAPI from './components/charts/bar/BarAPI'
import LinePage from './components/charts/line/LinePage'
import Line from './components/charts/line/Line'
import LineAPI from './components/charts/line/LineAPI'
import PiePage from './components/charts/pie/PiePage'
import Pie from './components/charts/pie/Pie'
import RadarPage from './components/charts/radar/RadarPage'
import Radar from './components/charts/radar/Radar'
import BubblePage from './components/charts/bubble/BubblePage'
import BubbleReact from './components/charts/bubble/BubbleReact'
import BubbleAPI from './components/charts/bubble/BubbleAPI'
import BubblePlaceholders from './components/charts/bubble/BubblePlaceholders'
import TreeMapPage from './components/charts/treemap/TreeMapPage'
import TreeMapReact from './components/charts/treemap/TreeMapReact'
import TreeMapHTML from './components/charts/treemap/TreeMapHTML'
import TreeMapPlaceholders from './components/charts/treemap/TreeMapPlaceholders'
import TreeMapAPI from './components/charts/treemap/TreeMapAPI'
import CalendarPage from './components/charts/calendar/CalendarPage'
import Calendar from './components/charts/calendar/Calendar'
import CalendarAPI from './components/charts/calendar/CalendarAPI'
import ChordPage from './components/charts/chord/ChordPage'
import Chord from './components/charts/chord/Chord'
import ChordAPI from './components/charts/chord/ChordAPI'
import VoronoiPage from './components/charts/voronoi/VoronoiPage'
import Voronoi from './components/charts/voronoi/Voronoi'
import Colors from './components/pages/Colors'
import About from './components/pages/About'
import Components from './components/Components'
import API from './components/API'

const SITEMAP = [
    {
        label: 'Charts',
        children: [
            {
                className: 'bar',
                path: '/bar',
                label: 'Bar',
                component: BarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Bar />',
                        component: Bar,
                        exact: true,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<Bar /> HTTP API',
                        component: BarAPI,
                    },
                ],
            },
            {
                className: 'line',
                path: '/line',
                label: 'Line',
                component: LinePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Line />',
                        component: Line,
                        exact: true,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<Line /> HTTP API',
                        component: LineAPI,
                    },
                ],
            },
            {
                className: 'pie',
                path: '/pie',
                label: 'Pie',
                component: PiePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Pie />',
                        component: Pie,
                        exact: true,
                    },
                    //{
                    //    className: 'api',
                    //    path:      'api',
                    //    label:     '<Pie /> HTTP API',
                    //    component: PiePage,
                    //},
                ],
            },
            {
                className: 'radar',
                path: '/radar',
                label: 'Radar',
                component: RadarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Radar />',
                        component: Radar,
                        exact: true,
                    },
                ],
            },
            {
                className: 'bubble',
                path: '/bubble',
                label: 'Bubble',
                component: BubblePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Bubble />',
                        component: BubbleReact,
                        exact: true,
                    },
                    {
                        className: 'placeholders',
                        path: '/placeholders',
                        label: '<BubblePlaceholders />',
                        component: BubblePlaceholders,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<Bubble /> HTTP API',
                        component: BubbleAPI,
                    },
                ],
            },
            {
                className: 'treemap',
                path: '/treemap',
                label: 'TreeMap',
                component: TreeMapPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<TreeMap />',
                        component: TreeMapReact,
                        exact: true,
                    },
                    {
                        className: 'html',
                        path: '/html',
                        label: '<TreeMapHTML />',
                        component: TreeMapHTML,
                    },
                    {
                        className: 'placeholders',
                        path: '/placeholders',
                        label: '<TreeMapPlaceholders />',
                        component: TreeMapPlaceholders,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<TreeMap /> HTTP API',
                        component: TreeMapAPI,
                    },
                ],
            },
            {
                className: 'calendar',
                path: '/calendar',
                label: 'Calendar',
                component: CalendarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Calendar />',
                        component: Calendar,
                        exact: true,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<Calendar /> HTTP API',
                        component: CalendarAPI,
                    },
                ],
            },
            {
                className: 'chord',
                path: '/chord',
                label: 'Chord',
                component: ChordPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Chord />',
                        component: Chord,
                        exact: true,
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: '<Chord /> HTTP API',
                        component: ChordAPI,
                    },
                ],
            },
            {
                className: 'voronoi',
                path: '/voronoi',
                label: 'Voronoi',
                component: VoronoiPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: '<Voronoi />',
                        component: Voronoi,
                        isIndex: true,
                    },
                ],
            },
        ],
    },
    {
        label: 'Guides',
        children: [
            {
                className: 'colors',
                path: '/guides/colors',
                label: 'Colors',
                component: Colors,
            },
        ],
    },
    {
        label: 'misc',
        children: [
            {
                className: 'about',
                path: '/about',
                label: 'About',
                component: About,
            },
            {
                className: 'components',
                path: '/components',
                label: 'Components',
                component: Components,
            },
            {
                className: 'api-client',
                path: '/api',
                label: 'API',
                component: API,
            },
        ],
    },
]

export const getSectionItems = sectionLabel => {
    const section = _.find(SITEMAP, { label: sectionLabel })

    return section.children
}

export const getRoutes = () => {
    const routes = []

    SITEMAP.forEach(item => {
        if (item.children && item.children.length > 0) {
            item.children.forEach(sectionItem => {
                const routeChildren = []

                if (sectionItem.children) {
                    sectionItem.children.forEach(childItem => {
                        routeChildren.push(
                            <Route
                                key={`${sectionItem.path}${childItem.path}`}
                                path={`${sectionItem.path}${childItem.path}`}
                                component={childItem.component}
                                exact={!!childItem.exact}
                            />
                        )
                    })
                }

                routes.push(
                    <Route
                        key={sectionItem.path}
                        path={sectionItem.path}
                        render={() => <sectionItem.component childRoutes={routeChildren} />}
                    />
                )
            })
        }
    })

    return routes
}
