import { computed, observe } from 'mobx'
import { observer } from 'mobx-react-lite';
import { observable } from 'mobx'
import { makeObservable } from 'mobx'
import { action } from 'mobx'
import { decorate } from 'mobx'
function count(prop){
    prop.seconds++
    if (prop.seconds >= 10) {
        prop.tenSec++
        prop.seconds = 0;
    }
    if (prop.tenSec >= 6) {
        prop.minutes++
        prop.tenSec = 0
    }
    if (prop.minutes >= 10) {
        prop.tenMin++
        prop.minutes = 0
    }
    if (prop.tenMin >= 6) {
        prop.hours++
        prop.tenMin = 0
    }
    if (prop.hours >= 10) {
        prop.tenHours++
        prop.hours = 0
    }

}

let interval;
class StopWatch {
    tenHours = 0;
    hours = 0;
    tenMin = 0;
    minutes = 0;
    tenSec = 0;
    seconds = 0;
    isStarted = false;

    constructor(count) {
        makeObservable(this, {
            tenHours: observable,
            hours: observable,
            tenMin: observable,
            minutes: observable,
            tenSec: observable,
            seconds: observable,
            activeTask: computed,
            stopCount: computed
        })
    }
    get activeTask() {
        this.isStarted = true;
        interval = setInterval(()=> count(this), 1000)
        return interval;
    }
    get stopCount() {
        clearInterval(interval);
        this.isStarted = false;
        this.hours = 0
        this.tenMin = 0
        this.minutes = 0
        this.tenSec = 0
        this.seconds = 0;

    }
    get resetWatch() {
        this.isStarted = true;
        clearInterval(interval);
        this.hours = 0
        this.tenMin = 0
        this.minutes = 0
        this.tenSec = 0
        this.seconds = 0;
        interval = setInterval(() =>{ count(this) }, 1000)
    }
    get wait() {
        clearInterval(interval);
    }
    
}



export default new StopWatch();