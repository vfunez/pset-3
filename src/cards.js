const readlineSync = require("readline-sync");

const userPlayingCard = (readlineSync.question("\nEnter a playing card: "));
playingCard = userPlayingCard.toUpperCase();

let two = "\nTwo"
let three = "\nThree"
let four = "\nFour"
let five = "\nFive"
let six = "\nSix"
let seven = "\nSeven"
let eight = "\nEight"
let nine = "\nNine"
let ten = "\nTen"
let jack = "\nJack"
let queen = "\nQueen"
let king = "\nKing"
let ace = "\nAce"

let clubs = " of Clubs.\n"
let diamonds = " of Diamonds.\n"
let hearts = " of Hearts.\n"
let spades = " of Spades.\n"

if (playingCard == "2C") {
    console.log(two.concat(clubs) + "")
} else if (playingCard == "2D") {
    console.log(two.concat(diamonds) + "")
} else if (playingCard == "2H") {
    console.log(two.concat(hearts) + "")
} else if (playingCard == "2S") {
    console.log(two.concat(spades) + "")
} else if (playingCard == "3C") {
    console.log(three.concat(clubs) + "")
} else if (playingCard == "3D") {
    console.log(three.concat(diamonds) + "")
} else if (playingCard == "3H") {
    console.log(three.concat(hearts) + "")
} else if (playingCard == "3S") {
    console.log(three.concat(spades) + "")
} else if (playingCard == "4C") {
    console.log(four.concat(clubs) + "")
} else if (playingCard == "4D") {
    console.log(four.concat(diamonds) + "")
} else if (playingCard == "4H") {
    console.log(four.concat(hearts) + "")
} else if (playingCard == "4S") {
    console.log(four.concat(spades) + "")
  } else if (playingCard == "5C") {
      console.log(five.concat(clubs) + "")
  } else if (playingCard == "5D") {
      console.log(five.concat(diamonds) + "")
  } else if (playingCard == "5H") {
      console.log(five.concat(hearts) + "")
  } else if (playingCard == "5S") {
      console.log(five.concat(spades) + "")
    } else if (playingCard == "6C") {
        console.log(six.concat(clubs) + "")
    } else if (playingCard == "6D") {
        console.log(six.concat(diamonds) + "")
    } else if (playingCard == "6H") {
        console.log(six.concat(hearts) + "")
    } else if (playingCard == "6S") {
        console.log(six.concat(spades) + "")
      } else if (playingCard == "7C") {
          console.log(seven.concat(clubs) + "")
      } else if (playingCard == "7D") {
          console.log(seven.concat(diamonds) + "")
      } else if (playingCard == "7H") {
          console.log(seveb.concat(hearts) + "")
      } else if (playingCard == "7S") {
          console.log(seven.concat(spades) + "")
        } else if (playingCard == "8C") {
            console.log(eight.concat(clubs) + "")
        } else if (playingCard == "8D") {
            console.log(eight.concat(diamonds) + "")
        } else if (playingCard == "8H") {
            console.log(eight.concat(hearts) + "")
        } else if (playingCard == "8S") {
            console.log(eight.concat(spades) + "")
          } else if (playingCard == "9C") {
              console.log(nine.concat(clubs) + "")
          } else if (playingCard == "9D") {
              console.log(nine.concat(diamonds) + "")
          } else if (playingCard == "9H") {
              console.log(nine.concat(hearts) + "")
          } else if (playingCard == "9S") {
              console.log(nine.concat(spades) + "")
            } else if (playingCard == "TC") {
                console.log(ten.concat(clubs) + "")
            } else if (playingCard == "TD") {
                console.log(ten.concat(diamonds) + "")
            } else if (playingCard == "TH") {
                console.log(ten.concat(hearts) + "")
            } else if (playingCard == "TS") {
                console.log(ten.concat(spades) + "")
              } else if (playingCard == "JC") {
                  console.log(jack.concat(clubs) + "")
              } else if (playingCard == "JD") {
                  console.log(jack.concat(diamonds) + "")
              } else if (playingCard == "JH") {
                  console.log(jack.concat(hearts) + "")
              } else if (playingCard == "JS") {
                  console.log(jack.concat(spades) + "")
                } else if (playingCard == "QC") {
                    console.log(queen.concat(clubs) + "")
                } else if (playingCard == "QD") {
                    console.log(queen.concat(diamonds) + "")
                } else if (playingCard == "QH") {
                    console.log(queen.concat(hearts) + "")
                } else if (playingCard == "QS") {
                    console.log(queen.concat(spades) + "")
                  } else if (playingCard == "KC") {
                      console.log(king.concat(clubs) + "")
                  } else if (playingCard == "KD") {
                      console.log(king.concat(diamonds) + "")
                  } else if (playingCard == "KH") {
                      console.log(king.concat(hearts) + "")
                  } else if (playingCard == "KS") {
                      console.log(king.concat(spades) + "")
                    } else if (playingCard == "AC") {
                        console.log(ace.concat(clubs) + "")
                    } else if (playingCard == "AD") {
                        console.log(ace.concat(diamonds) + "")
                    } else if (playingCard == "AH") {
                        console.log(ace.concat(hearts) + "")
                    } else if (playingCard == "AS") {
                        console.log(ace.concat(spades) + "")
                      } else {
                          console.log("\nInvalid.\n")
                      }
