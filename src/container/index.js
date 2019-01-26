import {createStackNavigator} from 'react-navigation';

import Home from './Home.js';
import NewsDetail from './NewsDetail.js';
import Search from './Search.js';

export default AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
                header: null
            }
        },
        NewsDetail: {
            screen: NewsDetail
        },
        Search: {
            screen: Search,
            //navigationOptions:{
            //    header: null
            //}
        }

    },
    {
        initialRouteName:"Home"
    }
);