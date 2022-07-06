import React, { useState } from 'react';
import s from './Expenses.module.scss';
import firstProfile from './../../assets/photos/Group 3.png';
import secondProfile from './../../assets/photos/Group 3 Copy 2.png';
import thirdProfile from './../../assets/photos/Group 3 Copy 6.png';
import add from './../../assets/photos/Group 15.png';
import dots from './../../assets/photos/dots.png';
import backet from './../../assets/photos/Shape (1).png';
import train from './../../assets/photos/Shape (2).png';
import house from './../../assets/photos/Shape (3).png';
import packet from './../../assets/photos/Shape (4).png';
import play from './../../assets/photos/Shape (5).png';
import boxes from './../../assets/photos/Illustration.png';
import flower from './../../assets/photos/Illustration (1).png';

import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';
import ExpenseItem from '../../components/ExpenseItem/ExpenseItem';
import SpendMoneyItem from '../../components/SpendMoneyItem/SpendMoneyItem';

function Expenses() {
  const [activeChartIndex, setActiveChartIndex] = useState(0);

  const chartData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const todayExpenses = [
    {
      id: 1,
      iconColor: '#32A7E2',
      image: backet,
      title: 'Grocery',
      time: '5:12 pm',
      location: 'Belanja di pasar',
      amount: 326.8,
    },
    {
      id: 2,
      iconColor: '#B548C6',
      image: train,
      title: 'Transportation',
      time: '5:12 pm',
      location: 'Naik bus umum',
      amount: 15,
    },
    {
      id: 3,
      iconColor: '#FF8700',
      image: house,
      title: 'Housing',
      time: '5:12 pm',
      location: 'Bayar Listrik',
      amount: 185.75,
    },
  ];

  const mondayExpenses = [
    {
      id: 1,
      iconColor: '#DC3434',
      image: packet,
      title: 'Food and Drink',
      time: '5:12 pm',
      location: 'Makan Steak',
      amount: 156,
    },
    {
      id: 2,
      iconColor: '#4BA83D',
      image: play,
      title: 'Entertainment',
      time: '5:12 pm',
      location: 'Nonton Bioskop',
      amount: 35.2,
    },
  ];

  const spendMoney = [
    {
      id: 1,
      name: 'Food and Drinks',
      amount: 872.4,
    },
    {
      id: 2,
      name: 'Shopping',
      amount: 1378.2,
    },
    {
      id: 3,
      name: 'Housing',
      amount: 928.5,
    },
    {
      id: 4,
      name: 'Transportation',
      amount: 420.7,
    },
    {
      id: 5,
      name: 'Vehicle',
      amount: 520,
    },
  ];

  return (
    <div className={s.page}>
      <div className={s.expensesPage}>
        <section className={s.expensesOverview}>
          <div className={s.commonInfo}>
            <div className={s.commonInfoHeader}>
              <p className={s.expensesTitle}>Expenses</p>
              <div className={s.expensesActions}>
                <div className={s.expensesProfiles}>
                  <img className={s.firstProfile} src={firstProfile} alt="first" />
                  <img className={s.secondProfile} src={secondProfile} alt="second" />
                  <img className={s.thirdProfile} src={thirdProfile} alt="third" />
                </div>
                <button className={s.addProfileButton}>
                  <img src={add} alt="add" />
                </button>
              </div>
            </div>
            <div className={s.expensesDate}>01 - 25 March, 2020</div>
            <ResponsiveContainer width="100%" minHeight="9vh">
              <BarChart width={150} height={40} data={chartData}>
                <Bar onMouseOver={(_, i) => setActiveChartIndex(i)} dataKey="uv">
                  {chartData.map((e, i) => (
                    <Cell
                      key={e}
                      cursor={'pointer'}
                      fill={`${i === activeChartIndex ? 'rgb(21, 122, 255)' : 'rgba(21, 122, 255, .2)'}`}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className={s.dayExpenses}>
            <div className={s.dayExpensesHeader}>
              <p className={s.dayExpensesHeaderTitle}>Today</p>
              <button>
                <img src={dots} alt="options" />
              </button>
            </div>
            <ul className={s.dayExpensesItems}>
              {todayExpenses.map((e) => (
                <ExpenseItem key={e.index} {...e} />
              ))}
            </ul>
          </div>
          <div className={s.dayExpenses}>
            <div className={s.dayExpensesHeader}>
              <p className={s.dayExpensesHeaderTitle}>Monday, 23 March 2020</p>
              <button>
                <img src={dots} alt="options" />
              </button>
            </div>
            <ul className={s.dayExpensesItems}>
              {mondayExpenses.map((e) => (
                <ExpenseItem key={e.index} {...e} />
              ))}
            </ul>
          </div>
        </section>
        <section className={s.spendMoney}>
          <div className={s.spendMoneyTop}>
            <p className={s.spendMoneyTitle}>Where your money go?</p>
            <ul className={s.spendMoneyList}>
              {spendMoney.map((m) => (
                <SpendMoneyItem key={m} {...m} />
              ))}
            </ul>
            <div className={s.spendMoneyBottom}>
              <div className={s.spendMoneyBottomImages}>
                <img className={s.icon1} src={boxes} alt="img" />
                <img className={s.icon2} src={flower} alt="img" />
              </div>
              <div className={s.spendMoneyBottomTitle}>Save more money</div>
              <div className={s.spendMoneyBottomDescription}>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </div>
              <button className={s.spendMoneyBottomButton}>VIEW TIPS</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Expenses;
