import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from "./components/Budget";


import { AppProvider } from "./context/AppContext";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal"
const App = () => {
  return (
    <AppProvider>
      <div className="container">
          <h1 className='mt-3'>Company's Budget Allocation</h1>
            <div className="row mt-3">
              {
                <div className="col-sm">
                  <Budget />
                </div>
              }
              {
                <div className='col-sm'>
                  <Remaining />
                </div>
              }
              {
                <div className='col-sm'>
                  <ExpenseTotal />
                </div>
              }
            </div>
      </div>
    </AppProvider>
  );
};
export default App;