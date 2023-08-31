// 할인 인터페이스
interface Discount {
    // 함수만 선언
    getDiscountPrice(price :number):number
}

// 가격을 고정 금액만큼 깎는 할인
class FlatDiscount implements Discount{
    private amount : number
    constructor(amount : number){
       this.amount = amount
    }
    getDiscountPrice(price : number) : number{
        return price - this.amount
    }
}

// 할인 퍼센트로 가격을 조정하는 할인
class PercentDiscount implements Discount{
    private amount : number;
    constructor(amount : number){
        this.amount = amount;
    }
    getDiscountPrice(price : number) : number{
        return price *(1-this.amount/100)
    }
}

// 고정 금액과 할인 퍼센트를 함께 적용하는 할인
class FlatPercentDiscount implements Discount{
    private flatAmount : number;
    private percent : number
    constructor (flatAmount : number, percent : number){
        this.flatAmount=flatAmount
        this.percent = percent
    }
    getDiscountPrice(price : number):number{
        const flatDiscountAmount = price-this.flatAmount
        return flatDiscountAmount*(1-this.percent/100)
    }
}

// 상품 정보를 나타내는 클래스

class Products{
    private name : string
    private price : number
    constructor(name : string, price : number){
        this.name = name
        this.price = price
    }
    getName () : string{
        return this.name
    }
    getPrice () : number{
        return this.price
    }
}

// 상품과 할인 정보를 이용하여 할인 가격을 계산하는 클래스
class ProductDiscount {
    private product : Products
    private discount : Discount
    constructor(product : Products, discount : Discount){
        this.product = product
        this.discount = discount
    }
    getPrice () : void{
        console.log(this.discount.getDiscountPrice(this.product.getPrice()))
    }
}

// 여러 상품과 할인 조합을 이용하여 할인 가격을 계산 및 출력하는 부분
const _product = new Products("mac",100000);
const _product2 = new Products("window", 2000)

const productDiscount = new PercentDiscount(10)
const productDiscount2 = new FlatDiscount(1000)
const productDiscount3 = new FlatPercentDiscount (1000,10)

const productWithDiscount = new ProductDiscount(_product,productDiscount3)
productWithDiscount.getPrice()
const productWithDiscount2 = new ProductDiscount(_product2,productDiscount)
productWithDiscount2.getPrice()