let client1 = {
    name: {
        first_name: "Amir Hossein",
        last_name: "Kakavand" 
    },

    address: {
        country: "Iran",
        state: "Lorestan",
        city: "Khorram Abad",
        detailed_address: {
            street: "Grove St!",
            alley: "Shahid GorgAli Beiranvand",
            residence: "38"
        }
    },

    phone_number: "09127577575",
    age: 21,
    isFreakinHandsome: true
}

let client2 = {}
// --------------------------------------------------------------------------

function deepCopy(obj2, obj1){   // we want to copy the obj1 into obj2
    for (let key in obj1){
        if((typeof obj1[key]) == "object"){
            deepCopy(obj2, obj1[key])
        }
        else{
            obj2[key] = obj1[key]
        }
    }
}


deepCopy(client2, client1)
client1.age = 54
console.log(client2)

