import { AllOrderScreen, Cart, ElectronicScreeen, Home, Search, UserLogin, UserSignUp } from "../screens";
import ProductDetail from "../screens/detail";
import OrderScreen from "../screens/orderScreen";

const AppRoutes = [
  { path: "/", comp: <Home /> },
  { path: "/login", comp: <UserLogin /> },
  { path: "/signup", comp: <UserSignUp /> },
  { path: "/search", comp: <Search /> },
  { path: "/cart", comp: <Cart /> },
  { path: "/detail", comp: <ProductDetail /> },
  { path: "/placeorder", comp: <OrderScreen /> },
  { path: "/allorders", comp: <AllOrderScreen /> },
  { path: "/electronics", comp: <ElectronicScreeen /> },
];

export default AppRoutes;