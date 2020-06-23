import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';


function Home() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

            <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>INCOME <br /> Rs.{getIncome()}</h3>
                <h3>EXPENSE <br /> Rs.{getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="trnsaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>Rs.{transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    <h3>Enter Description</h3>
                    <h5>(Please Write Your Transaction Details)</h5>
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    <h3>Enter Amount</h3>
                    <h5>Conditions (negative is expense, positive is income)</h5>
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input className="button" type="submit" value="<Press> 'ADD TRANSACTION' <Press>" />
            </form>
        </div>
    );
}

export default Home;
