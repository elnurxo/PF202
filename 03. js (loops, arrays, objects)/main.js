// let userName = "john_doe";
// let password = "hashedpassword123";
// let isLoggedIn = false;

// let userNameInput = "john_doe";
// let passwordInput = "hashedpassword123";

// if(userName==userNameInput && password==passwordInput){
//     isLoggedIn = true;
//     console.log('welcome user!');
// }else{
//     console.log('invalid username or password!');
// }

let seasonNumber = 3; //year ending...

switch (seasonNumber) {
  case 1:
  case 4:
    console.log("year ending...");
    break;
  case 2:
    console.log("spring");
    break;
  case 3:
    console.log("summer");
    break;
  default:
    console.log("invalid input!");
    break;
}
