// 創建命名空間以避免污染全局作用域
var KtipModule = KtipModule || {};

KtipModule.Xp = '';
KtipModule.PI = 3.14159;

KtipModule.GetBalance = function(Address) {
    /*console.log('KtipModule.GetBalance', Address);
    let gurl = 'https://kaswasm.dopay.biz/kasapi10/getkas?pr=GetBalance&TRADDRESS='+Address;
    fetch(gurl)
    .then((response) => response.text())
    .then((body) => {
        var ttres = JSON.parse(body)
        //console.log('ttres', ttres);
        if (ttres.success) {
            return ttres.amount;
        } else {
            return 0;
        }
    }) // */
    
    
    return Address;
};

KtipModule.add = function(a, b) {
    return a + b;
};

KtipModule.greet = function(name) {
    return `Hello, ${name}!`;
};
