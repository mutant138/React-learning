import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>2500</div>
        <h2>Food</h2>
        <div className='expense-item__price'>250</div>
        <h2>Movies</h2>
        <div className='expense-item__price'>500</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
