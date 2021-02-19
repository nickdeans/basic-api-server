'use strict';

class Sports {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    read(id) {
        if(id) {
            return this.db.find(sports => sports.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        let newSports = {
            id: this.id += 1,
            data: obj,
        }
        this.db.push(newSports);
        return newSports;
    }

    update(id, obj) {
        for(let i=0; i<this.db.length; i++){
            if(this.db[i].id === id){
                this.db[i].data = obj;
                return this.db[i];
            }
        }
    }
    destroy(id){
        delete this.db[id];
        return this.db[id];
    }
}

module.exports = Sports;