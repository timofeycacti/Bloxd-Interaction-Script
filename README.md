# Bloxd-Interaction-Script
A script that lets you create advanced macros inside of bloxd.
## Version 1.0
## How to use?
* Insert the code you want to execute into "CactiCode" function. You can execute it by pressing the L button. Before execution make sure to press "_" in game, so the game elements will be initialized.
## Methods
#### all custom commands are stored in window.interaction class and are global, so you can use them from console. All JS methods are included.
* Click(?btn) - Clicks LMB. Btn is a variable, responsible for the pressed button. 0 = LMB, 1 = Wheel Click, 2 = RMB
* bloxdCanvas - Returns current game canvas, that will be clicked.
* pressKeyForTime(key,timeMs) - Presses the key selected key (key) for the selected time in milliseconds (timeMs). Remember, that the keys != the buttons. E.g. 'G' button is 'KeyG', 'L' is 'KeyL', ' ' is 'Space'
* CactiCode - A function containing your code.

## Help
### Discord: timofeycacti
### Discord server: [Bloxd Unlimited](https://discord.gg/x74tzmAdpA)
