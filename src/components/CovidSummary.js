import React from 'react'
import Card from './Card'

export default function CovidSummary(props) {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props

    return (
        <div>
            <div>
                <div>
                    <h1>{country === '' ? 'World-wide Coronavirus Report': country}</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Card>
                            <span>Total Confirmed Cases</span>
                            <span>{totalConfirmed}</span>
                        </Card>
                        <Card>
                            <span>Total Recovered Cases</span>
                            <span>{totalRecovered}</span>
                        </Card>
                        <Card>
                            <span>Total Deaths Cases</span>
                            <span>{totalDeaths}</span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
