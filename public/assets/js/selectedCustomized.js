// window.$('#selectBuyCoin').ddslick(
//     {
//         width: 300,
//         background: "white",
//         imagePosition: "left",
//         selectText: "Select Coin",
//         onSelected: function (data) {
//             console.log('ddslick ',data);
//         }
//     }
// );
window.$("#selectBuyCoin").ddslick({
    defaultSelectedIndex: 0,
    // onSelected: function (data) {
    //     console.log('ddslick ',data);
    // }
});

window.$("#selectSellCoin").ddslick();

// window.$("#selectSellCoin").ddslick({
//     width: 300,
//     background: "white",
//     imagePosition: "left",
//     selectText: "Select Coin",
//     onSelected: function (data) {
//         console.log(data);
//     }
// });