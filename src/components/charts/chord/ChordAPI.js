/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import APIClient from '../../api-client/APIClient'
import ChordControls from './ChordControls'

const matrix = [
    [11975, 5871, 8916, 2868, 1967],
    [1951, 10048, 2060, 6171, 1967],
    [8010, 16145, 8090, 8045, 1967],
    [1013, 990, 940, 6907, 2306],
    [1013, 990, 940, 6907, 800],
]

class ChordAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Chord"
                apiPath="/charts/chord"
                dataProperty="data"
                controls={ChordControls}
                defaultProps={{
                    width: 300,
                    height: 300,
                    data: JSON.stringify(matrix, null, '  '),
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                    padAngle: 0.02,
                    innerRadiusRatio: 0.96,
                    innerRadiusOffset: 0.01,
                    ribbonOpacity: 0.5,
                    ribbonBorderWidth: 1,
                    arcOpacity: 1,
                    arcBorderWidth: 1,
                    colors: 'nivo',
                    colorBy: 'depth',
                }}
            />
        )
    }
}

export default ChordAPI