
#! Just the fun exercies to draw a heart shape and animate the text on the screen using turtle graphics.
# The heart shape is drawn using the parametric equations of the heart shape.
# The text is animated using the turtle.write() method and the time.sleep() function.

import math
import turtle
import time

# Set up the screen
window = turtle.Screen()
window.bgcolor("white")

# Set up the turtle
pen = turtle.Turtle()
pen.speed(0)  # Fastest available speed (0)
pen.color("red")
pen.fillcolor("orange")

# Function to define the heart shape
def heart(t):
    x = 16 * math.sin(t) ** 3
    y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t)
    return (x, y)

# Draw the heart pattern
pen.penup()
for i in range(10):
    pen.goto(0, 0)
    pen.pendown()
    for t in range(0, 100, 2):
        x, y = heart(t / 10)
        pen.goto(x * i, y * i)
    pen.penup()

# Function to animate the text
def animate_text():
    colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    for i in range(10):
        pen.goto(0, -50)  # Adjust the position as needed
        pen.color(colors[i % len(colors)])
        pen.write("Maha, I love you very much", align="center", font=("Arial", 20 + i, "bold"))
        time.sleep(0.5)
        pen.undo()

# Hide the turtle and keep the window open
pen.hideturtle()
animate_text()
turtle.done()