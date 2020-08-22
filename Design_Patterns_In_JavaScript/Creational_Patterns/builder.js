// Problem statement #

// The task here is to implement the builder pattern to create an assignment. Each assignment is of a subject: it has a level, which means it is either easy, medium, or hard. It also has a due date. The announcement function given to you displays all this information. You have to figure out where to put this function’s definition and how to build the assignment step-by-step.

// Input #
// The provided partial code

// Output #
// Complete implementation of the code and the result after calling the announcement method

// Sample input #
// mathAssignment.announcement(); 
// Sample output #
// "Your Math assignment is: Hard. It is due on 12th June, 2020."

class Assignment {
    constructor() {
        this.make = (builder) => {
            builder.step1();
            builder.step2();
            builder.step3();
            builder.step4();
            return builder.get();
        }
    }
}

class AssignmentBuilder {
    constructor(subject, level, dueDate) {
        this.assignment = null;
        this.step1 = () => this.assignment = new Task();
        this.step2 = () => this.assignment.addSubject(subject);
        this.step3 = () => this.assignment.level(level);
        this.step4 = () => this.assignment.addDueDate(dueDate);
        this.get = () => this.assignment;
    } 
}

class Task {
    constructor() {
        this.subject = null;
        this.level = null;
        this.dueDate = null;

        this.addSubject = (subject) => this.subject = subject;
        this.level = (level) => this.level = level;
        this.addDueDate = (dueDate) => this.dueDate = dueDate;

        this.announcement = () => {
            console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
        } 
    }
}

try {
    var assignment = new Assignment();
    var assignmentBuilder = new AssignmentBuilder("Math","Hard","12th June, 2020");
    var mathAssignment = assignment.make(assignmentBuilder);
    mathAssignment.announcement(); 
} catch(e) {
  console.log(e);
}