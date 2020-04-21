import * as React from "react";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import RouteComponent from './Routing/RouteComponent';
const store = configureStore({});
class MainApp extends React.Component<{}, any> {
    public render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <RouteComponent />
                </BrowserRouter>
            </Provider>
        );
    }
}
export default MainApp;


