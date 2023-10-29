"use client"
import { useState } from 'react'
import Card from '../card/Card'
import './stats.scss'
import Image from 'next/image'
import ArrowDown from '../../../public/assets/ArrowDown.svg'
import ArrowUp from '../../../public/assets/ArrowUp.svg'
import Toggle from '../../../public/assets/Chevron.svg'
import StatisticsCard from '../statisticsCard/StatisticsCard'

const Stats = () => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  const toggleStats = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  return (
    <div className={`stats ${isStatsOpen ? 'open' : ''}`}>
      <Image src={Toggle} className={`stats-toggle ${isStatsOpen ? 'rotate' : ''}`} alt='Toggle' onClick={toggleStats} />
      <div className="heading">
        <h2>Todays Statistics</h2>
        <h5>Tue, 14 Nov, 2022, 11.30 AM </h5>
      </div>
      <Card 
        title="Income"
        price={9460.00}
        trend={1.5}
        icon={ArrowDown}
        yesterdayPrice={9940}
        expenses={25658.00}
      />
      <Card 
        title="Expenses"
        price={5660.00}
        trend={2.5}
        icon={ArrowUp}
        yesterdayPrice={5240}
        expenses={22658.00}
      />
      <StatisticsCard
        title="Hire vs Cancel"
        hiredPercentage={54}
        hiredPercentageIcon={ArrowUp}
        canceledPercentage={20}
        canceledPercentageIcon={ArrowUp}
        pendingPercentage={26}
        pendingPercentageIcon={ArrowDown}
      />
      
    </div>
  )
}

export default Stats