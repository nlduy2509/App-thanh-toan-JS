const items = [
    {
        name : "Hotdog",
        price : 5.9,
        quantity : 1
    },
    {
        name : "Coca",
        price : 2.9,
        quantity : 1
    },
    {
        name : "Gà KFC cay",
        price : 10.9,
        quantity : 1
    },
    {
        name : "Gà KFC",
        price : 9.9,
        quantity : 1
    },
    {
        name : "Gà quay",
        price : 20.9,
        quantity : 1
    },
    {
        name : "Pepsi",
        price : 3.9,
        quantity : 1
    },
    {
        name : "Khoai tây chiên",
        price : 2.9,
        quantity : 1
    },
    {
        name : "Hamburger",
        price : 12.9,
        quantity : 1
    }
]

let items_result = [];
let menu = ["Hotdog","Hamburger","Khoai tây chiên","Pepsi","Gà quay","Gà KFC","Gà KFC cay","Coca"];
const shipping = 2;
let flag = true;

function render(){   
    let subtotal = 0;
    items_result.forEach(x=>{
        subtotal += x.quantity * x.price;
    })   
    const total = subtotal + shipping;
    const html = items_result.map(x => '<li class="items">\
    <span class="name">'+x.name+'</span> \
    <span class="quantity"> \
    <button class="dec">-</button> \
    <input type="number" value="'+x.quantity+'"> \
    <button class="inc">+</button> \
    </span> \
    <span class="price"> \
    <span>\$'+(x.price*x.quantity).toFixed(1)+'</span> \
    <button class="delete">x</button> \
    </span> \
    </li>').join('')
    document.getElementById('order-items').innerHTML = html;

    const button_del = [...document.querySelectorAll(".delete")]
    const button_inc = [...document.querySelectorAll(".inc")]
    const button_dec = [...document.querySelectorAll(".dec")]
    for(let i = 0; i < button_del.length; i++){
        button_del[i].addEventListener("click",function(){
            for (let index = 0; index < menu.length; index++) {
                if(items_result[i].name == menu[index]){
                    if(index==0){
                        document.getElementById('hotdog').checked = false                      
                    }
                    if(index==1){
                        document.getElementById('hamburger').checked = false                      
                    }
                    if(index==2){
                        document.getElementById('khoai').checked = false                      
                    }
                    if(index==3){
                        document.getElementById('pepsi').checked = false                      
                    }
                    if(index==4){
                        document.getElementById('gaquay').checked = false                      
                    }
                    if(index==5){
                        document.getElementById('kfc').checked = false                      
                    }
                    if(index==6){
                        document.getElementById('kfccay').checked = false                      
                    }
                    if(index==7){
                        document.getElementById('coca').checked = false                      
                    }
                }              
            }
            remove(i)
        })
    }
    for(let i = 0; i < button_inc.length; i++){
        button_inc[i].addEventListener("click",function(){
            increase(i)
        })
    }
    for(let i = 0; i < button_dec.length; i++){
        button_dec[i].addEventListener("click",function(){
            decrease(i)
        })
    }

    document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(1);
    document.getElementById('shipping').innerText = '$' + shipping;
    document.getElementById('total').innerText = '$' + total.toFixed(1);
}

document.getElementById('btn-add').addEventListener("click",function(){
    if(flag){
        document.getElementById('menukfc').style.display = 'block';
        flag = false
    }else{
        document.getElementById('menukfc').style.display = 'none';
        flag = true
    }
})

function decrease(index){
    if(items_result[index].quantity == 1){
        return
    }
    items_result[index].quantity -=1
    render()
    
}

function increase(index){
    items_result[index].quantity += 1
    render()
}

function remove(index){
    items_result.splice(index,1);
    render();
}

function add_food(index){
    let item = items[index];
    items_result.push(item);
    render();
}

document.getElementById('kfc').onclick = function(e){
    if (this.checked){
        add_food(3)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Gà KFC") remove(index)        
        }
    }
}

document.getElementById('hotdog').onclick = function(e){
    if (this.checked){
        add_food(0)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Hotdog") remove(index)        
        }
    }
}

document.getElementById('coca').onclick = function(e){
    if (this.checked){
        add_food(1)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Coca") remove(index)        
        }
    }
}

document.getElementById('kfccay').onclick = function(e){
    if (this.checked){
        add_food(2)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Gà KFC cay") remove(index)        
        }
    }
}

document.getElementById('gaquay').onclick = function(e){
    if (this.checked){
        add_food(4)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Gà quay") remove(index)        
        }
    }
}

document.getElementById('pepsi').onclick = function(e){
    if (this.checked){
        add_food(5)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Pepsi") remove(index)        
        }
    }
}

document.getElementById('khoai').onclick = function(e){
    if (this.checked){
        add_food(6)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Khoai tây chiên") remove(index)        
        }
    }
}

document.getElementById('hamburger').onclick = function(e){
    if (this.checked){
        add_food(7)
    }
    else{
        for (let index = 0; index < items_result.length; index++) {
            if(items_result[index].name == "Hamburger") remove(index)        
        }
    }
}




