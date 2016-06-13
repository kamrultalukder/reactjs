import React from 'react';

var SetIntervalMixin = {
    getElaspedTime: function() {
        setInterval.apply(null, arguments);
    }
};

export default SetIntervalMixin;