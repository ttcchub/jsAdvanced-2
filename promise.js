// PROMISES

console.log ('Request data...')

// =============================// 

//callbacks downbelow >> ( we'r not using)

// setTimeout (() => {
//     console.log ('Preparing data...')

//     const backendData = {
//         sever: 'aws',
//         port: 2000,
//         status: 'active'
//     }

//     setTimeout(() =>{
//         backendData.modified = true
//         console.log ('Data received', backendData)
//     }, 2000)
// }, 2000)

// =============================// 1st (only positive option 

//   const p = new Promise (function (resolve, reject) {
//       setTimeout(() => {
//           console.log ('Preparing data...')    
//           const backendData = {
//                sever: 'aws',
//                port: 2000,
//                status: 'active'
//            }
//            resolve()
//       }, 2000)
//   })
//   
//   p.then(()=> {
//       console.log ('Promise resolved')
//   })  
// Output: 
// Request data...
// Promise {<pending>}
// VM501:8 Preparing data...
// VM501:19 Promise resolved


// =============================// 2nd

// const p = new Promise (function (resolve, reject) {
//     setTimeout(() => {
//         console.log ('Preparing data...')    
//         const backendData = {
//              sever: 'aws',
//              port: 2000,
//              status: 'active'
//          }
//          resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             reject(data)
//              //console.log ("Data recived", backendData)
//         },2000)
//     })  
// })

// .then(clientData => {
//     // console.log ("Data recived", clientData)
//         clientData.fromPromise = true
//         return clientData
//     })
//     .then (data => {
//     console.log('Modified', data)
// })
// .catch(err => console.error('Error: ', err))
// .finally (() => console.log('finally'))

// =============================//

const sleep = ms => { 
    return new Promise (resolve => {
    setTimeout(()=>resolve(),ms)
    })
}

sleep(2000).them(() => console.log(After 2 sec'after 2 sec'))
a
