import { Observable, filter, map, reduce } from 'rxjs';

// const promise = new Promise((resolve, reject) => {
//      resolve(7);
//      resolve(8);
//      resolve(9);
//     reject(0);
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((reason) => {
//         console.log(reason);
//     });

// const observable = new Observable((observer) => {
//     observer.next(1);
//     // undefined.toString()
//     // observer.error("xato")
//     observer.next(2);
//     // observer.complete()
//     observer.next(3);
//     setTimeout(() => { observer.next(4) }, 2000)
//     setTimeout(() => { observer.next(5) }, 4000)
//     setTimeout(() => { observer.next(6) }, 6000)
// });

// const subscription = observable.subscribe({
//     next: (value) => {
//         console.log(value);
//     },
//     error: (reason) => {
//         console.log(reason);
//     },
//     complete: () => {
//         console.log('tugadi');
//     },
// });

// // subscription.unsubscribe()
// // subscription.remove()

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);

const observable1 = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
});

observable1
    .pipe(
        filter((value) => value % 2 == 0),
        map((value) => value * 3),
    )
    .subscribe({
        next: (value) => {
            console.log('observer2:', value);
        },
    });
    //Observable - bu promiseni kengaytirilgan versiyasi, imkoniyatlari ko'proq, unda next , error,va complete metodlari bor.