import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { generateDrinkStats } from 'nivo-generators'
import _ from 'lodash'

const generateData = () => generateDrinkStats(_.random(8, 16))

export default class BarsPage extends Component {
    state = {
        data: generateData(),
    }

    diceRoll = () => {
        this.setState({ data: generateData() })
    }

    handleDataUpdate = data => {
        this.setState({ data })
    }

    render() {
        const { childRoutes } = this.props
        const { data } = this.state

        return (
            <div className="inner-content bars_page">
                <Helmet title="Bar components" />
                {childRoutes.map(childRoute => {
                    return React.cloneElement(childRoute, {
                        component: null,
                        render: () =>
                            <childRoute.props.component
                                data={data}
                                diceRoll={this.diceRoll}
                                onDataUpdate={this.handleDataUpdate}
                            />,
                    })
                })}
            </div>
        )
    }
}