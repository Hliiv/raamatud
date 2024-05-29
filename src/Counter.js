

import { useState } from "react"

function Counter() {
    let [amount, setAmount] = useState(0)

    const clickResponseIncrease = () => {

        setAmount(amount + 1)
    }

    const clickResponseDecrease = () => {
        setAmount(amount - 1)

    }
    return (
        <>
            <button onClick={clickResponseDecrease}>Decrease</button>
            {amount}
            <button onClick={clickResponseIncrease}>Increase</button>
        </>)
}
export default Counter 