import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import PieControls from './PieControls'
import { ResponsivePie } from 'nivo'
import generateCode from '../../../generateChartCode'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'

export default class Pie extends Component {
    state = {
        settings: {
            margin: {
                top: 80,
                right: 80,
                bottom: 30,
                left: 80,
            },
            innerRadius: 0.5,
            colors: 'nivo',
            colorBy: 'id',
            padAngle: 1,
            cornerRadius: 3,

            // border
            borderWidth: 0,
            borderColor: 'inherit:darker(0.6)',

            // radial labels
            enableRadialLabels: true,
            radialLabel: 'id',
            radialLabelsSkipAngle: 0,
            radialLabelsTextXOffset: 6,
            radialLabelsTextColor: 'inherit:darker(1)',
            radialLabelsLinkOffset: 0,
            radialLabelsLinkDiagonalLength: 16,
            radialLabelsLinkHorizontalLength: 24,
            radialLabelsLinkStrokeWidth: 2,
            radialLabelsLinkColor: 'inherit',

            enableSlicesLabels: true,
            sliceLabel: 'value',
            slicesLabelsSkipAngle: 0,
            slicesLabelsTextColor: 'inherit:darker(1)',

            animate: true,
            motionStiffness: 90,
            motionDamping: 15,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data, diceRoll } = this.props
        const { settings } = this.state

        const colorBy = settings.colorBy === 'd => d.color' ? d => d.color : settings.colorBy
        const radialLabel =
            settings.radialLabel === 'd => `${d.id} (${d.value})`'
                ? d => `${d.id} (${d.value})`
                : settings.radialLabel
        const sliceLabel =
            settings.sliceLabel === 'd => `${d.id} (${d.value})`'
                ? d => `${d.id} (${d.value})`
                : settings.sliceLabel

        const code = generateCode('Pie', {
            ...settings,
            colorBy,
            radialLabel,
            sliceLabel,
        })

        const header = (
            <ChartHeader
                chartClass="Pie"
                tags={['pie', 'basics', 'radial', 'circle']}
                diceRoll={diceRoll}
            />
        )

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="pie" code={code} data={data}>
                            <ResponsivePie
                                data={data}
                                {...settings}
                                colorBy={colorBy}
                                radialLabel={radialLabel}
                                sliceLabel={sliceLabel}
                            />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p>
                        Generates a pie chart from an array of data, each datum must have an id and
                        a value property.<br />
                        Note that margin object does not take radial labels into account,&nbsp; so
                        you should adjust it to leave enough room for it.
                    </p>
                    <p className="description">
                        The responsive alternative of this component is&nbsp;
                        <code>&lt;ResponsivePie /&gt;</code>.
                    </p>
                    <PieControls
                        scope="Pie"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Pie" properties={properties} />
                </div>
            </div>
        )
    }
}
