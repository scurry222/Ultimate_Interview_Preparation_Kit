# Problem statement #


In this challenge, you need to use the MVVM pattern to change the color of the “color” you write in the input field.

In the Model, you need to define the following functions:

- subscribe: Registers an observer

- notifyObservers: Notifies the observer of a change

- getCurrentColor: Returns the current color

- setColor: Sets a new color


In the ViewModel, you need to define the bind function, which reflects changes made in the view on the model and vice versa. It should do the following as well:

- If you write green in the input, the color of the text green should change to red

- If you write red in the input, the color of the text red should change to blue

- If you write blue in the input, the color of the text blue should change to green



Input #
The name of the color


Output #
The color of the text changes to green, red, or blue according to the rules given


Sample input #
green
red
blue 


Sample output #


green

red

blue
