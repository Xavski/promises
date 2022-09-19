//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

const emailRef = document.querySelector(".email"); //selects class email to input data
const videoRef = document.querySelector('.video')

// 1. Then

//*Messy*//
// fetch("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
//     //allows response in backend to be shown in frontend (.then()) converts promise to usable data
//     response.json().then((data)=>{
//         emailRef.innerHTML = data.email // prints email 
//     })
// })

// Better way // 

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response)=>{
//     return response.json()  
// }).then(data => {
//     emailRef.innerHTML = data.email
// })


//2. Aysnc/Await

// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()

//     emailRef.innerHTML = data.email
//     console.log(data)

// }

// main()

// CREATING A PROMISE

function getSubscriptionStatus(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Fds')

        },2000)
    })
}

// async function main(){
//     const value = await getSubscriptionStatus()
//     emailRef.innerHTML = value
// }

// main()


//Practise

function getVideo(subscriptionStatus){
    return new Promise((resolve,reject) =>{
        if (subscriptionStatus === 'VIP'){
            resolve('Show Video')
        }
        else  if (subscriptionStatus === 'FREE'){
            resolve('Show Trailer')
        }
        else{
            reject('No Video')
        }
    })
}

async function main(){
    const status = await getSubscriptionStatus();
    emailRef.innerHTML = status 
    try{
        console.log(await getVideo(status))
    }
    catch(e){ //used for rejected (error (e))
        console.log(e)
        videoRef.innerHTML = e;
    }
}

main()