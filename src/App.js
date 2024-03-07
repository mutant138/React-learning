import Expenses from "./components/Expenses"


function App() {
  const expenses = [
    {
      id: 1,
      title:'Car Insurance',
      amount: 250,
      date: new Date(2023,2,15),
      location: 'Hometown'
    },
    {
      id: 2,
      title:'Car',
      amount: 2500,
      date: new Date(2023,3,15),
      location: 'Hometown'
    },
    {
      id: 3,
      title:'Grocery',
      amount: 2500,
      date: new Date(2023,5,15),
      location: 'Bangalore'
    },
    {
      id: 4,
      title:'Bills',
      amount: 5000,
      date: new Date(2023,2,18),
      location: 'Bangalore'
    },
    {
      id: 5,
      title: 'Vacation',
      amount: 3000,
      date: new Date(2023, 7, 10),
      location: 'Beach Resort',
    },
    {
      id: 6,
      title: 'Electronics',
      amount: 1500,
      date: new Date(2023, 8, 22),
      location: 'Online Store',
    },
    {
      id: 7,
      title: 'Dinner Out',
      amount: 100,
      date: new Date(2023, 9, 5),
      location: 'City Restaurant',
    },
    {
      id: 8,
      title: 'Home Decor',
      amount: 800,
      date: new Date(2023, 10, 15),
      location: 'Local Store',
    },
    {
      id: 9,
      title: 'Fitness Membership',
      amount: 200,
      date: new Date(2023, 11, 2),
      location: 'Gym',
    },
    {
      id: 10,
      title: 'Books',
      amount: 50,
      date: new Date(2024, 1, 8),
      location: 'Bookstore',
    },
    {
      id: 11,
      title: 'Medical Checkup',
      amount: 120,
      date: new Date(2024, 2, 12),
      location: 'Health Center',
    },
    {
      id: 12,
      title: 'Tech Gadgets',
      amount: 500,
      date: new Date(2024, 4, 20),
      location: 'Electronics Store',
    },
    {
      id: 13,
      title: 'Online Courses',
      amount: 300,
      date: new Date(2024, 6, 7),
      location: 'E-learning Platform',
    },
  ]
  return (
    <div>
      <h2>Learning React from Open source..!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
