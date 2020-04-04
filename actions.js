'use strict';
const robot = require('robotjs')
let actions = {}


actions.gotoNexus = ()=>{
    robot.keyTap('r')
}

module.exports = actions