import React from 'react';
import s from './SpendMoneyItem.module.scss';

function SpendMoneyItem(props) {
  return (
    <li className={s.spendMoneyListItem}>
      <div className={s.spendMoneyListItemTop}>
        <p className={s.spendMoneyListItemName}>{props.name}</p>
        <p className={s.spendMoneyListItemAmount}>{props.amount}</p>
      </div>
      <div className={s.spendMoneyListItemDegreeBox}>
        <div className={s.spendMoneyListItemDegree} style={{ width: `${(props.amount * 100) / 2500}%` }}></div>
      </div>
    </li>
  );
}

export default SpendMoneyItem;
