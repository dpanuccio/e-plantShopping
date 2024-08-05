// Import configureStore from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the reducer from CartSlice
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Define the slice of state and the associated reducer
    cart: cartReducer, // 'cart' is the slice of state, and cartReducer is the reducer managing it
  },
});

// Export the configured store as default
export default store;