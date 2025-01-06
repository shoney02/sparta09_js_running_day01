// 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.

// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

// javascript
// function applyCoupon(cart, coupon) {
//     cart.items.forEach((item) => {
//         item.price -= coupon.discount;
//     });
// }

// const userACart = {
//     items: [
//         { name: "키보드", price: 30000 },
//         { name: "마우스", price: 20000 },
//     ],
// };

// const userBCart = userACart;
// const coupon = { discount: 5000 };

// applyCoupon(userBCart, coupon);



// 1. 실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// userBCart.items 내 마우스 price 값이 15000이 되고 해당 객체와 동일하게 userACart.items도 출력된다.
// userACart -> items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 }
// userBCart -> items: [ { name: '키보드', price: 25000 }, { name: '마우스', price: 15000 }

// 2. 1번의 결과에 대한 이유를 설명해보세요.
// userBCart가 그대로 userACart를 할당하여 userACart객체와 동일한 주소를 가리키기 때문에 userACart의 값도 같이 바뀌었다.

// 3. 원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?

function applyCoupon(cart, coupon) {
    cart.items.forEach((item) => {
        item.price -= coupon.discount;
    });
}

const userACart = {
    items: [
        { name: "키보드", price: 30000 },
        { name: "마우스", price: 20000 },
    ],
};

// const userBCart = userACart;
function copyObj(obj) {
    const result = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = copyObj(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

const userBCart = copyObj(userACart);
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart);
console.log(userBCart);