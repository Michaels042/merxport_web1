import Vue from 'vue';
import moment from 'moment';
import truncate from 'lodash.truncate';

Vue.filter('countFormat', (num) => {
    if (num === 0) {
        return 0;
    }
    if (!num) return '***';
    const units = [{
        value: 1,
        symbol: '',
    },
    {
        value: 1E3,
        symbol: 'k',
    },
    {
        value: 1E6,
        symbol: 'M',
    },
    {
        value: 1E9,
        symbol: 'B',
    },
    {
        value: 1E12,
        symbol: 'T',
    },
    {
        value: 1E15,
        symbol: 'Q',
    },
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = units.length - 1; i > 0; i--) {
        if (num >= units[i].value) {
            break;
        }
    }
    return (num / units[i].value).toFixed(3).replace(regex, '$1') + units[i].symbol;
});

Vue.filter('formatDate', (date, format) => {
    if (date) {
        return moment(date).format(format || 'lll');
    }
    return '';
});

Vue.filter('humanizeDate', (date) => {
    if (date) {
        return moment(date).fromNow();
    }
    return '***';
});

Vue.filter('formatCrypto', (amount) => {
    if (amount === 0 || amount) {
        return Number(amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 6,
        });
    }
    return '***';
});

Vue.filter('formatAmount', (amount) => {
    if (Number(amount) === 0 || amount) {
        return Number(amount).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }
    return '***';
});

Vue.filter('capitalize', (value) => {
    if (!value) return '';
    return value.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
});

Vue.filter('truncate', (value, length = 10) => {
    if (!value) return '';
    return truncate(value, {
        length,
    });
});

Vue.filter('uppercase', (value) => {
    if (!value) return '';
    return value.toUpperCase();
});