import { View, Text } from 'react-native';

const CoinCard = (props) => {
  return (
    <View>
        <View className="coin-card">
          <Text>{props.name}</Text>
          <Text>Symbol: {props.symbol}</Text>
          <Text>Price: ${props.price}</Text>
          <Text>Market Cap: ${props.marketCap}</Text>
          <Text>24h Change: {props.change24h}%</Text>
        </View>

        <View>
            
        </View>
    </View>

   
  );
}
export default CoinCard;