/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChartControls from '../../controls/ChartControls'
import { getPropertiesGroupsControls } from '../../componentProperties'
import properties from './properties'

export default class BubbleControls extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        settings: PropTypes.object.isRequired,
        scope: PropTypes.oneOf(['Bubble', 'BubblePlaceholders', 'api']).isRequired,
    }

    render() {
        const { settings, scope, onChange } = this.props

        const groups = getPropertiesGroupsControls(properties, scope)

        return (
            <ChartControls
                ns="bubble"
                scope={scope}
                settings={settings}
                onChange={onChange}
                groups={groups}
            />
        )
    }
}
