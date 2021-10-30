import React from 'react';
import GameTable from '../GameTable';

const tableData = [
  {
    title: 'Major Rewards',
    color: 'success',
    items: [
      'Give a minor punishment to someone',
      'Earn 2 points',
      'Add back any articles of clothing you\'re missing',
    ],
  },
  {
    title: 'Minor Rewards',
    color: 'info',
    items: [
      'If you are "out", come back "in"',
      'Earn 1 point',
      'Add back an article of clothing',
    ],
  },
  {
    title: 'Minor Punishments',
    color: 'warning',
    items: [
      'Drink',
      'Sauce up',
      'Remove an article of clothing',
      'Do 10 pushups, squats, or situps',
    ],
  },
  {
    title: 'Major Punishments',
    color: 'danger',
    items: [
      'Take a shot',
      'Remove an article of clothing (not shoes, socks, or accessories)',
      'Draw a curse card',
      'Do 30 pushups, squats, or situps',
    ],
  },
];

const tables = tableData.map(table => {
  return <GameTable table={table} key={table.title} />;
});

const TableList = () => {
  return (
    <div className='row'>
      { tables }
    </div>
  );
}

export default TableList;
