import {createStackNavigator} from 'react-navigation';

import Home from './Home.js';
import NewsDetail from './NewsDetail.js';

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
    },
    {
        initialRouteName:"Home"
    }
);