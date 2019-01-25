import {createStackNavigator} from 'react-navigation';

import Home from '../container/Home.js';
import NewsDetail from '../container/NewsDetail.js';

export const AppNavigator = createStackNavigator(
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