import { StatusBar } from 'react-native';

import { Shopping } from './src/screens/Shopping';
import { ProductContextProvider } from './src/contexts/ProductContext';

export default function App() {
  return (
    <ProductContextProvider>
      <Shopping/>
    </ProductContextProvider>
    
  );
}


