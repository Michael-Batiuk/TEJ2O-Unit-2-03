/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk 
 * Created on: Sep 2025
 * This program does basic math.
*/

basic.clearScreen()
basic.pause(1000)

basic.showString('A rectangle has dimensions 5 cm & 3 cm')
basic.pause(100)
basic.clearScreen()

// Perimerter
basic.showString('The perimeter would be:' + (5 + 5 + 3 + 3).toString() + 'cm')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()

// Area
basic.showString('The area would be:' + (5 * 3).toString() + 'cm^2')
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()