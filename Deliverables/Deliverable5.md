# Deliverable 5 - Design

*Group 5 - “CS Play”*   
*Date:* 7 November, 2021    
*Group members: Aidan Sullivan, Emma Carlsson, Johnathan Ray, Vincent Machado, Jiasheng Yang, Pengfei Liu*    

## 1. Description
For beginner and non-programmers who are interested in learning programming, CS-Play is an interactive platform that teaches programming with puzzles and games. Unlike traditional teaching methods in class and video tutorials, which have little to interactivity. Our product allows users to “write code” immediately by playing games that are more like adventures with guidance and direct results (grades and feedback). The user can share their work in our community so that they could learn from each other, which is a win for everyone.
We want our users to be able to create their own account, play levels created by other users, show and tell a user about the varying topics we want to teach them, provide some measure of success to the user, provide assistance to those who struggle with certain topics, provide visual feedback for how well someone is doing, allow users t ocreate their own levels, and show a "leaderboard" that indicates a user's degree of success compared to others.

## 2. Architecture
![Package Diagram](deliverable_images/CSPlay_PackageDiagram.drawio.png)   
The website consists of a front-end to handle most of the visible parts, a back-end to handle client-server interaction and the code for the levels/games. The front-end can be divided into categories like startpage, login and account. We designed it like this so that each part would be clearly defined and separated from the rest. This way the developers can focus on one part at a time. 

## 3. Class diagram
![Class Diagram of our system](deliverable_images/CompleteClassDiagram.png)

## 4. Sequence diagram
![Image of sequence diagram](deliverable_images/D5_Sequence_Diagram.png)   
**Use case**: As a player, I want to be able to see the results so that I can know whether I made progress or not.

## 5. Design Patterns
Design Pattern 1:(Behavior) Strategy -update X position and Y position from the parent class Position
![Figure 5.1 -UML diagram of implementation of Strategy method](https://github.com/jdr479/CS-Play/blob/main/Deliverables/deliverable_images/class-diagram.png)    

Here is the link for all classes for Design Pattern 1     
[click here](https://github.com/jdr479/CS-Play/blob/main/website/interactive-webpage/Interactivity.js)


Design Pattern 2:(Structural) Flyweight -method to make the background color of the area    

![Figure 5.2 -UML diagram of implementaion of Flyweight method](https://github.com/jdr479/CS-Play/blob/main/Deliverables/deliverable_images/class-diagram2.png)   

Here is the link for the classes for Design Pattern 2   
[click here](https://github.com/jdr479/CS-Play/blob/main/website/interactive-webpage/stylesheet.css)





## 6. Design Principles
A class that has the single responsibility is the Assets class. It's job is to store different information about an asset like position and sprite.

Open/Close principle is followed by the User class. It is open for extension but not modification by the login class.

Additionally, the Liskov Substitution Principle is satisfied in the way the classes that relate to the User class follow a hierarchy that does not allow for a violation in class operations. For instance, if one wanted to update the user's score, they could do that in the User class, and vice versa.

The Interface Segregation Principle is followed thanks to the fact that certain users, such as the player, are unable to interact with interfaces that are irrelevant to them, such as the Game State. However, other users, such as the level creator, are able to interact with such interfaces.

Finally, the website design satisfies the Dependency Inversion Principle whenever the user is using the Executer; instead of the Executer depending solely on the Interpreter class, it depends on both the Interpreter class and the interface it is connected to.

