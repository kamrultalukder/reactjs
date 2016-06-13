import React from 'react';
import ReactDOM from 'react-dom';
import Company from './components/Company';

ReactDOM.render(
    <Company url={'http://localhost/react-component/data.php'} name={'Field Nation'}/>,
    document.querySelector('.root')
);