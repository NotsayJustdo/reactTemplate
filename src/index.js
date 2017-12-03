import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '@/redux/store/index.jsx';
// ui组件
import 'antd/dist/antd.css';

// import LayoutIndex from '@/views/layout/index.jsx';
// import WrappedNormalLoginForm from '@/views/login/index.jsx';

import RouterConfig from '@/router/index.jsx';

// console.log(RouterConfig());
ReactDOM.render(
    <Provider store={ store }>
        <RouterConfig></RouterConfig>
    </Provider>,
    document.getElementById('root')
)