export const generateInitialCoffees = () => {
    return [
        {
            coffeeName:'Americano',
            countryOfOrigin: 'Brazil',
            orderCount: 0,
        },
        {
            coffeeName:'Expresso',
            countryOfOrigin: 'Colombia',
            orderCount: 0,
        },
        {
            coffeeName:'Cafe au lait',
            countryOfOrigin: 'Ethiopia',
            orderCount: 0,
        }
    ]
}

/**
 * Function to mock fetching orders a backend service
 * @param coffeeOrders 
 * @returns 
 */
export const updateOrders = (coffeeOrders: {
    coffeeName:string;
    countryOfOrigin:string;
    orderCount:number
}[]) => {
    const orders = coffeeOrders.map(order =>( {...order, orderCount: order.orderCount + ( Math.random() > 0.6 && order.orderCount < 30 ? 1 : 0) }))
    return orders;
}