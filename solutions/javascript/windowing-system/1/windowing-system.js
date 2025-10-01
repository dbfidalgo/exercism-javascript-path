// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 *
 * To practice your wide range of JavaScript skills, try to solve tasks 1 and 2 with prototype syntax and the remaining tasks with class syntax.
 */

/**
 * Task 1
 * Define Size for storing the dimensions of the window
 * 
 * 1. Define a class (constructor function) named Size
 * 2. The constructor should take two parameters: width and height
 * 3. It should accept initial values for these fields. The width is the first parameter, the height is the second parameter. 
 * 4. The default width and height should be 80 and 60, respectively.
 * 5. Additionally define a method named 'resize' that takes two parameters: newWidth and newHeight and updates the width and height of the Size instance.
 * 
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
};

/** 
 * Task 2
 * Define Position to store a window position
 * 
 * 1. Define a class named 'Position' with two fields, x and y
 * 2. Default values for x and y should be 0
 * NOTE: The position (0, 0) is the upper left corner of the screen with x values getting larger as you move right and y values getting larger as you move down.
 * 3. Additionally define a method named 'move' that takes a new x and y position and updates the Position instance.
 */

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}

/**
 * Task 3
 * Define a ProgramWindow class
 * 
 * 1. Define a class named ProgramWindow with the following fields:
 *  - screenSize: holds a fixed value of type Size with width 800 and height 600
 *  - size: holds a value of type Size, the initial value is the default value of Size instance
 *  - position: holds a value of type Position, the initial value is the default value of Position instance
 * 
 * NOTE:
 * - when the window is opened (created), it always has the default size and position in the beginning
 * - use Class syntax
 */


/**
 * Task 4
 * Add a method to resize the window
 * 
 * The ProgramWindow class should include a method to resize. It should accept a parameter of type Size
 * The new size cannot exceed certain bounds:
 * - The minimum allowed width or height is 1. Requested sizes below this should be adjusted to 1.
 * - The maximum height and width depend on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. 
 * E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested, then the window would be resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the request.
 */

/**
 * Task 5
 * Add a method to move the window
 * 
 * The ProgramWindow class should include a method to move the window. 
 * It should accept a parameter of type Position.
 * The new position cannot exceed certain bounds:
 * - The smallest position is 0 for both x and y
 * - The maximum position in either direction depends on the current size of the window. The edges cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take.
 * E.g. if the window's size is at x = 250, y = 100 and a move to x = 600, y = 200 is requested, then the window would be moved to x = 550, y = 200 as the screen is not large enough in the x direction to fully accommodate the request.
 * 
 */

/**
 * Task 6
 * Change a program window
 * 
 * Implement a changeWindow function that accepts a ProgramWindow instance as input and changes the window to the specified size and position.
 * The function should return the ProgramWindow instance that was passed in after the changes were applied.
 * 
 * The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.
 */

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800,600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        this.size.width = Math.min(Math.max(newSize.width, 1), maxWidth);
        this.size.height = Math.min(Math.max(newSize.height, 1), maxHeight);
    }

    move(newPosition) {
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        this.position.x = Math.min(Math.max(newPosition.x, 0), maxX);
        this.position.y = Math.min(Math.max(newPosition.y, 0), maxY);
    }
};


export function changeWindow(programWindow) {
    // Move to top left corner
    programWindow.move(new Position(0, 0));

    // Resize then reposition
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}