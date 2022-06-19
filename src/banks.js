const banks = {
    Nigeria: ['Access Bank Plc', 'Citibank Nigeria Limited', 'Ecobank Nigeria Plc', 'Enterprise Bank', 'Fidelity Bank Plc', 'First Bank Nigeria Limited',
        'First City Monument Bank Plc', 'Guaranty Trust Bank Plc', 'Heritage Banking Company Ltd', 'Key Stone Bank', 'MainStreet Bank', 'Skye Bank Plc', 'Stanbic IBTC Bank Ltd',
        'Standard Chartered Bank Nigeria', 'Sterling Bank Plc', 'SunTrust Bank Nigeria Limited', 'Union Bank of Nigeria Plc', 'United Bank of Nigeria Plc',
        'Unity Bank Plc', 'Wema Bank Plc', 'Zenith Bank Plc',
    ],
};

export default {
    banks: Object.keys(banks),
    getBanks(country) {
        if (!country) {
            return [];
        }
        return banks[country] || [];
    },
};