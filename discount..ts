interface Installment{
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

function totalPrice ({ price, discount, isInstallment, months }: Installment): number{
    const discountPrice = price-price*discount/100
    let monthlyPayment: number = discountPrice
    if(isInstallment){
        monthlyPayment=discountPrice/months
    }
    return monthlyPayment
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))