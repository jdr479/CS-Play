# Deliverable 7 - Verification & Validation

*Group 5 - “CS Play”*   
*Date:* 1 December, 2021

*Group members: Aidan Sullivan, Emma Carlsson, Johnathan Ray, Vincent Machado, Jiasheng Yang, Pengfei Liu*  

## 1. Description
For beginners who are interested in learning programming, CS-Play is an interactive platform that teaches programming with puzzles and games. Unlike traditional teaching methods in class and video tutorials, which have little to no interactivity, our product allows users to “write code” immediately by playing games that are more like adventures. We want our users to be able to create their own account and in the future to even play levels created by other users. 

## 2. Verification (tests)


### 2.1. Unit test
For our testing, we decided to use Mocha for any JavaScript code that we need tested.
**Tests:** [Test Folder](https://github.com/jdr479/CS-Play/tree/main/website/tests)
**Example Test:** [Class Being Tested](https://github.com/jdr479/CS-Play/blob/main/website/Levels/level01.js)
This example test checks to see if the position of the player mock object has been updated correctly. It does so by checking the values of the x and y positions. 


### 2.2. Acceptance test
We used Selenium for our Acceptance test.
**Tests:** [Test File](https://github.com/jdr479/CS-Play/blob/main/tests/acceptance1.js)
**Results:**
![Console Output](https://github.com/jdr479/CS-Play/blob/main/Deliverables/deliverable_images/AT1.PNG)
![Resulting Page](https://github.com/jdr479/CS-Play/blob/main/Deliverables/deliverable_images/AT2.PNG)


## 3. Validation (user evaluation)

### Script
We wanted to show the users three features: the home page, the login page, and the first level. When showing them the first level, we let them go wherever they wanted them to go at first, then asked them to try and get to the login page and attempt to create an account. While doing so, we would take note of what they were saying and doing during the process, as well as what their thoughts were after they had completed the task. After showing them the front page and login page, we showed them the first level. Again, we let them do what they wanted, then asked them to manuver their way to a specific area of the level and go from there. We also took note of what they were saying during the process and what their thoughts were after they were finished.

### User evaluation 1
**Name:** Oskar Karlsson    
**Results:** He really liked the design of the website. It was simple, easy to navigate and looked professional. The level itself didn't work at the time of the evaluation so he couldn't test that part. While he liked the ooevrall look uf it, he could still tell that the website was early in development and lacked a lot of features. For example he would like us to add a learning page, like texts about different programming concepts and maybe videos too. Another thing he missed was the community part; which he had heard our plan about and was expecting, with users able to create levels themselves and playing levels made by others.   

### User evaluation 2
**Name:** Leressa Ray
**Results:** This first user enjoyed how the home page and login page looked. Additionally, she found the login page intuitive; the page's modern design made it easy for her to understand what she was supposed to do and where she was supposed to click to get the job done. She also enjoyed the home page overall, but was confused by the fact that some links didn't work due to them not being implemented yet. She was also used to the "login" button being near the bottom of a webpage in general and wished our site followed this convention as well. In terms of the first level, she was not entirely sure what to do for the most part. When she reached the terminal, she was confused by button not working (again, due to them not being implemented), was not sure what each section of the page was supposed to do, and overall did not find it helpful in terms of it encouraging her to or helping her learn how to program.

### User evaluation 3
**Name:** Julia Ray
**Result:** This user also enjoyed the look of the home page and login page. Not only that, but she only had one gripe with the home page: when trying to access the level selection page, she tried clicking on the picture above the link instead of the link itself. In a future implementation, she would want to be able to click on the picture and have that lead to the level selection page. When she played the first level, she found the interactive part of it easy enough, but was also confused when presented with the terminal. She tried clicking on the buttons first and was not sure why they did not work and did not initially realize that she could type in the terminal section. When it was revealed that she could, she found it fascinating. When asked if she thought this level would encourage her to program more, she stated that she thought the initial draw is there (citing things like the ability to edit code in the terminal), but it was not all the way there.

### Reflections
Like we've talked about before, we were hoping and planning on developing so much more. The biggest problem with our website was simply that we didn't have enough features because even if the users liked our idea and the design of our website, they can't really do much on it in it's current condition. Most of our users seemed to believe that any future implementations should have completed features, such as being able to press certain links or buttons in our levels. Additionally, the levels themselves should be more clear by telling the user what they can do and should do in each section. In the end, we do not believe that we accomplished our value proposition. That being said, we are fairly close. If we had more time, there is a good chance we fix a couple of small things like making the levels less confusing and making each link and button lead to an immediate result.

