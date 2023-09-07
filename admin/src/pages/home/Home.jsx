import React from 'react'
import Card from '../../components/card/CardComponent'
import './home.css'
import Chart from '../../components/chart/Chart'
import UserWidget from '../../components/userWidget/UserWidget'
import TransactionWidget from '../../components/transactionWidget/TransactionWidget'

function Home() {
    return (
        <div style={{ marginLeft: '210px ' }}>
            <div className="cards">
                <Card title={'Revenue'} Number={500} percent={-1.4} />
                <Card title={'Sales'} Number={500} percent={-1.4} />
                <Card title={'Costs'} Number={500} percent={-1.4} />
            </div>
            <div className="lineChart">
                <h7>Number of Users per month</h7>
                <Chart xaxis={[1, 2, 3, 4, 5, 6, 7, 8]} yaxis={[2, 5, 2, 8, 1, 5, 6, 7]} />
            </div>
            <div className="widgets">
                <div className="userAnalytics">
                    <UserWidget />
                </div>
                <div className="transWidget">
                    <TransactionWidget />
                </div>
            </div>

        </div>
    )
}

export default Home
