import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2024, 2, 6);
  const expenseTitle = "Car Insurance";
  const expenseTitle1 = "Food";
  const expenseAmount = 200;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
        <h2>{expenseTitle1}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
        <h2>Movies</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
