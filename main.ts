let ir_waarde = 0
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 12)
})
