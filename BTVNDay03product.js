function Product(product_name, product_price, product_brand, product_count) {
    this.name = product_name
    this.price = product_price
    this.brand = product_brand
    this.count = product_count
}

const product1 = new Product("Iphone 13 Pro Max", 3000000, "Apple", 2)
const product2 = new Product("Samsung Galaxy Z Fold3", 41000000, "Samsung", 1)
const product3 = new Product("IPhone 11", 15500000, "Apple", 1)
const product4 = new Product("OPPO Find X3 Pro", 19500000, "OPPO", 3)
let products = [product1, product2, product3, product4]

function print_product_list(product_arr) {
    for (product of product_arr)
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`)
}

function total_price(product_list) {
    return product_list.reduce((total, element) => total + element.price * element.count, 0)
}

function filter_by_brand(product_list, brand) {
    return product_list.filter(element => element.brand === "Apple")
}

function filter_by_price(product_list, price) {
    return product_list.filter(element => element.price > 20000000)
}

function filter_by_name(product_list, sub_str) {
    return product_list.filter(element => element.name.toLowerCase().includes(sub_str.toLowerCase()))
}

function add_element(product_list, product_item) {
    product_list.push(product_item)
    return product_list
}

function remove_by_brand(products_list, brand) {
    return products_list.filter(element => element.brand !== "Samsung")
}

function get_random_product(product_list, num) {
    const shuffled = [...product_list].sort(() => 0.5 - Math.random())
    return shuffled.slice(0,num)
}
// 1. In ra thông tin các sản phẩm
console.log("1. List products: ")
print_product_list(products)
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
console.log(`2. Total price: ${total_price(products)}`)
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log("3. List product of Apple: ")
print_product_list(filter_by_brand(products, "Apple"))
// 4. Tìm các sản phẩm có giá > 20000000
console.log("4. List product have price is bigger than 20000000")
print_product_list(filter_by_price(products, 20000000))
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
console.log("5. List product have name contain 'pro'")
print_product_list(filter_by_name(products, "pro"))
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const product5 = new Product("Samsung S22 ultra", 3200000, "Samsung", 5)
products = add_element(products, product5)
console.log("6.List products after adding product 5")
print_product_list(products)
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log("7. List products that brand not samsung")
print_product_list(remove_by_brand(products, "Samsung"))
// 8. Sắp xếp giỏ hàng theo price tăng dần
console.log("8. List products order by price ASC")
products.sort((a, b) => a.price - b.price)
print_product_list(products)
// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log("9. List products order by count DESC")
products.sort((a, b) => b.count - a.count)
print_product_list(products)
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
console.log("10. get random 2 product in product list")
print_product_list(get_random_product(products,2))
