import React from 'react';
import s from './ExpenseItem.module.scss';

function ExpenseItem(props) {
  return (
    <li className={s.dayExpensesItem}>
      <div className={s.dayExpensesItemPhoto} style={{backgroundColor: props.iconColor}}>
        <img src={props.image} alt="backet" />
      </div>
      <div className={s.dayExpensesItemInfo}>
        <div className={s.dayExpensesItemInfoDetails}>
          <p className={s.dayExpensesItemName}>{props.title}</p>
          <div className={s.dayExpensesItemDetailInfo}>{props.time + " · " + props.location}</div>
        </div>
        <div className={s.dayExpensesItemAmount}>- {props.amount}</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
