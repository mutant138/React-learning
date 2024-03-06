import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
    {
      id: 1,
      title:'Car Insurance',
      amount: 250,
      date: new Date(2023,2,15)
    },
    {
      id: 2,
      title:'Car',
      amount: 2500,
      date: new Date(2023,3,15)
    },
    {
      id: 3,
      title:'Grocery',
      amount: 2500,
      date: new Date(2023,5,15)
    },
    {
      id: 4,
      title:'Bills',
      amount: 5000,
      date: new Date(2023,2,18)
    },
    {
      id: 5,
      title:'Car Insurance',
      amount: 250,
      date: new Date(2023,2,15)
    },
    {
      id: 6,
      title:'Car Insurance',
      amount: 250,
      date: new Date(2023,2,15)
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
