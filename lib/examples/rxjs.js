import {Observable} from 'rxjs/Rx'
import {double} from 'util'

const foo = Observable.create(observer => {
  observer.next(42)
  observer.next(100)
  observer.next(200)
  setTimeout(() => {
    observer.next(300)
  }, 1000)
  observer.next(400)
})

foo.subscribe(console.log)
