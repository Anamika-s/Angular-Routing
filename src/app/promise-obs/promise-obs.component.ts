import { Component, OnInit } from '@angular/core';
import { observable, Observable, subscribeOn, Subscription } from 'rxjs';
import { filter } from 'rxjs';

@Component({
  selector: 'app-promise-obs',
  templateUrl: './promise-obs.component.html',
  styleUrls: ['./promise-obs.component.css']
})
export class PromiseObsComponent implements OnInit {

  constructor() { }
  mySubscription: Subscription;
  
  ngOnInit(): void {
    // PRODUCING CODE 
    const promise = new Promise(resolve=>
      {
        // console.log("Pronise has been called")
         setTimeout(()=>
         {
            resolve('Promise1 has been resolved');
            resolve('Promise2 has been resolved');
            resolve('Promise3 has been resolved');
            resolve('Promise4 has been resolved');
            resolve('Promise5 has been resolved');
         },1000);
      })
    

      // CONSUMUING CODE

    promise.then(res=> console.log(res));
  }
    // Observable
     // PRODUCING CODE FOR Observable
//     const observable = new Observable(sub=>
//       {
//         console.log("Observable has been called")
        
//       setTimeout(()=>
//       {
//       sub.next("Observable1 is called")
//       sub.next("Observable2 is called")
//       sub.next("Observable3 is called")
//       sub.next("Observable4 is called")
//       },1000)
//     })
//           // Consuming Code  
    
//     observable.pipe(
//       filter(d=>d==="Observable2 is called"),
//     ).subscribe(res=> console.log(res));     
//   }
// }

Subscribe()
  {
  const observable = new Observable(sub=>
  {
    let x= 0;
    setInterval(()=>
    {  x=x+1;
       sub.next(x)  
    },100);
  })
  
  this.mySubscription = observable.subscribe(res => console.log(res))
  }

UnSubscribe()
{
 this.mySubscription.unsubscribe();
}
}


