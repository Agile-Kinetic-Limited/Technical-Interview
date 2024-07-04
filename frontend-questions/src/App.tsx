import { useEffect, useState } from 'react'
import { generateInitialCoffees, updateOrders } from './generateCoffees'
import Order from './Order'

const App = () => {
    const [coffeeOrders, setCoffeeOrders] = useState(generateInitialCoffees())

    const onCompleteOrder = (countryOfOrigin: string) => {
        // TODO: Update backend service
    
        // Update UI
        setCoffeeOrders(coffeeOrders.map(order => countryOfOrigin === order.countryOfOrigin ? {...order, orderCount: Math.max(order.orderCount - 1, 0)} : order))
    }

    useEffect(() => {
        // Set up the interval to run every second
        const intervalId = setInterval(() => {
            setCoffeeOrders(prevOrders => updateOrders(prevOrders));
        }, 2000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return (
        <div>
            {coffeeOrders.map(order => <Order key={order.countryOfOrigin} coffeeName={order.coffeeName} countryOfOrigin={order.countryOfOrigin} count={order.orderCount} onCompleteOrder={() => onCompleteOrder(order.countryOfOrigin)}/>)}
        </div>
    )
}

export default App