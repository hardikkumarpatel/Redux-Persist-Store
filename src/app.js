import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ children }) {
  const content = useRoutes(routes);

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
              {children}
        </PersistGate>
      </Provider>
  );
}
