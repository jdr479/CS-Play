const EXIT_BUTTON = document.querySelector("#exit-button");
const TERMINAL_BUTTON = document.querySelector("#terminal-button");
const ANSWER_TO_PUZZLE = "return open";
            
            let computerPosition = 
            {
                x: 10,
                y: 400
            }

            let goalPosition =
            {
                x: 440,
                y: 240
            }

            let wallX = 200;

            let levelComplete = false;
            let puzzleSolved = false;
            
            let playerSize = 
            {
                width: 20,
                height: 20
            };
            
            let playerPosition = 
            {
                x: 10,
                y: 10
            };
            
            let moveRate = 10;
            
            let player = document.getElementById("player");
            let wall = document.getElementById("wall");
            let puzzle_solved_msg = document.getElementById("puzzle-solved-msg");
            let terminal = document.getElementById("terminal");


            function switchOffTerminal()
            {
                terminal.classList.remove("show-element");
                terminal.classList.add("hide-element");

                moveRate = 10;
            }
            
            function switchOnTerminal()
            {
                terminal.classList.remove("hide-element");
                terminal.classList.add("show-element");

                moveRate = 0;
            }
            
            function checkLevelComplete()
            {
                if(playerPosition.x == goalPosition.x && playerPosition.y == goalPosition.y)
                {
                    levelComplete = true;
                    print("Hello");
                }

                if(levelComplete)
                {
                    alert("Level Complete!");
                }
            }
            
            function checkPlayerAnswer()
            {
                let answer = document.querySelector("#answer").value;

                if(answer == ANSWER_TO_PUZZLE)
                {
                    return true;
                }

                return false;
            }
            
            function checkPuzzleSolved()
            {
                if(playerPosition.x == computerPosition.x && playerPosition.y == computerPosition.y)
                {
                    puzzleSolved = true;

                    switchOnTerminal();
                    
                    wall.classList.remove("show-element");
                    wall.classList.add("hide-element");

                    puzzle_solved_msg.classList.add("msg");
                }

            }

            function goToTerminal()
            {
                location.href='http://johnathanray.com/cs-play/Levels/level0101.html';
            }
            
            function updateXPosition(distance)
            {
                playerPosition.x = playerPosition.x + distance;
                if(playerPosition.x < 0 || playerPosition.x > 480)
                {
                    playerPosition.x = playerPosition.x - distance;
                }

                if(playerPosition.x > 180 && puzzleSolved == false)
                {
                    playerPosition.x = playerPosition.x - distance;
                }
                
                print(checkPlayerAnswer());
            }

            function updateYPosition(distance)
            {
                playerPosition.y = playerPosition.y - distance;
                if(playerPosition.y < 0 || playerPosition.y > 480)
                    {
                        playerPosition.y = playerPosition.y + distance;
                    }
            }

            function refreshPosition()
            {
                let x = playerPosition.x - (playerSize.width/2);
                let y = playerPosition.y - (playerSize.height/2);
                let transform = "translate(" + x + " " + y + ")";

                player.setAttribute("transform", transform);
            }

            window.addEventListener("keydown", function(event)
            {
                if(event.defaultPrevented)
                {
                    return;
                }
                if(event.code === "ArrowDown")
                {
                    updateYPosition(-moveRate);
                }
                else if(event.code === "ArrowUp")
                {
                    updateYPosition(moveRate);
                }
                else if(event.code === "ArrowLeft")
                {
                    updateXPosition(-moveRate);
                }
                else if(event.code === "ArrowRight")
                {
                    updateXPosition(moveRate);
                }
                refreshPosition();
                event.preventDefault();

                checkPuzzleSolved();
                checkLevelComplete();

            }, true)

            EXIT_BUTTON.addEventListener('click', switchOffTerminal);
            TERMINAL_BUTTON.addEventListener('click', goToTerminal);