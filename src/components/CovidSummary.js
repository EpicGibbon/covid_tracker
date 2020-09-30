import React from 'react';
import Card from './Card';
import NumberFormat from 'react-number-format';

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
                    <h1 style={{ textTransform: 'capitalize' }}>{country === '' ? 'World-wide Coronavirus Report' : country}</h1>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Card>
                            <span>Total Confirmed Cases</span>
                            <span>
                                {
                                    <NumberFormat
                                        value={totalConfirmed}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                }
                            </span>
                        </Card>
                        <Card>
                            <span>Total Recovered Cases</span>
                            <span>
                                {
                                    <NumberFormat
                                        value={totalRecovered}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                }
                            </span>
                        </Card>
                        <Card>
                            <span>Total Deaths Cases</span>
                            <span>
                                {
                                    <NumberFormat
                                        value={totalDeaths}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                }
                            </span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
