// function ordered() {
//     return true;
//     // return false;
// }

// let order_promise = new Promise(function(resolve, reject){
//     let pick = ordered();

//     setTimeout(function(){
//         if (pick) {
//             resolve("Ordered Successfully.");
//         } else {
//             reject("Order Failed");
//         }
//     },1000);
// });

// // console.log(order_promise);


// async function ordered() {
//     try {
//         let res = await order_promise;
//         console.log(res);
//     }catch(err) {
//         console.log(err);
//     }
// }
// ordered();

let selectedFood = document.querySelectorAll("input[type=checkbox]");
// console.log(selectedFood);

let imgArr = ["https://th.bing.com/th/id/OIP.jC4diahHss-fq64RHs6SQgHaLG?w=168&h=252&c=7& r=0&o=5&pid=1.7",
"https://mcdindia.com/wp-content/uploads/2020/02/2.10-maharaja-mac-veg.png",
"https://th.bing.com/th/id/OIP.K6I9Yq1bzSCXACD9NL6ZawHaJN?w=134&h=180&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.YGtVcRf8Kwl_J52EQGRTSAHaE8?w=263&h=180&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.jG65znoXAuwFAxd6H98HYgHaE8?w=220&h=180&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.NvPQ5s5e_n547EPGay2GkAHaIH?w=198&h=194&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.tig9dIrv2XRH0NDt4g5WswHaJ4?w=122&h=180&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.-rOwFIuES7YSZLYxoOm7xgHaLH?w=168&h=252&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.3VGkDOVDritpKDxEcq0WHwHaLH?w=168&h=252&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.FFUP6ItHT28I8Mk44WHO5AHaMs?w=168&h=289&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.DZ8h0kB6yluMVr4fOhoBawHaEK?w=312&h=180&c=7& r=0&o=5&pid=1.7",
"https://th.bing.com/th/id/OIP.4rNvLXzESffBx4Os0Eh5tAHaE8?w=186&h=124&c=7&r=0&o=5&pid=1.7"];

let menu = [];
for (let i=0;i<selectedFood.length;i++){
    let item = {
        name:selectedFood[i].value,
        img:imgArr[i]
    }
    menu.push(item);
}
// console.log(menu);
localStorage.setItem("menuList", JSON.stringify(menu));

let orderBtn = document.querySelector("button");
orderBtn.addEventListener("click",function(event){
    event.preventDefault();
    let orderedFood = document.querySelectorAll("input[type=checkbox]:checked");
    let menu = JSON.parse(localStorage.getItem("menuList"));

    var food = [];
    let count = 5;

    let promiseHere = new Promise(function(resolve, reject){
        let id = setInterval(function(){
            count--;
            let p = document.getElementById("para");
            p.innerText = null;
            p.innerText = `Preparing Your Order. Please Wait.`;
            if (count == 0) {
                clearInterval(id);
                p.innerText = null;
                p.innerText = "Hurray!  Your Order is ready. Enjoy your Food.";
            }
        },5000);
        
        setTimeout(function(){
            menu.map(function(el){
                for (let i=0;i<orderedFood.length;i++) {
                    if (el.name === orderedFood[i].value){
                        food.push(el);
                    }
                }
            })
            if (food.length === 0) {
                reject("Please Order Some Food First");
            } else {
                resolve();
            }
            console.log(food);
        },5000)
    });
});

// promiseHere.then(function(res){
//     food.forEach(function(el,i){
//         let display = document.createElement("div");
//         let foodname = document.createElement("h3");
//         foodname.innerText = el.name;
        
//         display.append(foodname)
//     })
// })