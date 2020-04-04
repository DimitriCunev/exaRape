'use strict';
const memoryjs = require('memoryjs');
const memory = require('./memory');
const actions = require('./actions');
const rp = require('request-promise');


class Player{
    constructor(){
        this.health = 1000
        this.mana = 1000
        this.mhealth = 1000
        this.hPercentage
        this.hPercentageLimit = undefined
        this.offSets = undefined
    }

    updateHealth(){
        let res
        this.offsets.health.forEach((e,i)=>{
            if (i===0){
                res =  memoryjs.readMemory(memory.process.handle, memory.module.modBaseAddr+e.addr, e.type)
            } else {
                res = memoryjs.readMemory(memory.process.handle, res + e.addr , e.type)
            }
        })
        this.health = res;
    }
    updateMHealth(){
        let res
        this.offsets.mhealth.forEach((e,i)=>{
            if (i===0){
                res =  memoryjs.readMemory(memory.process.handle, memory.module.modBaseAddr+e.addr, e.type)
            } else {
                res = memoryjs.readMemory(memory.process.handle, res + e.addr , e.type)
            }
        })
        this.mhealth = res;
    }

    updateGeneral(){
        this.hPercentage = this.health/this.mhealth

        if(this.hPercentage<this.hPercentageLimit){actions.gotoNexus()}
    }
}



module.exports = Player