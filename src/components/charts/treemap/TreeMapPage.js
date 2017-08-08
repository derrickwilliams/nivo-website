import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router-dom'
import { generateLibTree } from 'nivo-generators'

export default class TreeMapPage extends Component {
    state = { root: generateLibTree() }

    diceRoll = () => {
        this.setState({ root: generateLibTree() })
    }

    render() {
        const { childRoutes } = this.props
        const { root } = this.state

        return (
            <div className="inner-content treemap_page">
                <Helmet title="TreeMap component" />
                <Switch>
                    {childRoutes.map(childRoute => {
                        return React.cloneElement(childRoute, {
                            component: null,
                            render: () =>
                                <childRoute.props.component
                                    root={root}
                                    diceRoll={this.diceRoll}
                                />,
                        })
                    })}
                </Switch>
            </div>
        )
    }
}
