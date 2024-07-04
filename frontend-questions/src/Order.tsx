type Props = {
    coffeeName:string,
    countryOfOrigin: string;
    count: number;
    onCompleteOrder: () => void;
}

const Order = ({coffeeName, countryOfOrigin, count, onCompleteOrder}: Props) => {
  return (
    <div>
      Name: {coffeeName}<br/>
      Country of origin: {countryOfOrigin}<br/>
      To be fulfilled: {count}<br/>
      <button onClick={()=>onCompleteOrder()}>Complete order</button>
      <br/>
      <br/>
    </div>
  )
}

export default Order