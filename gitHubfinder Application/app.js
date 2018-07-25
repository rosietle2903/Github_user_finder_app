const git = new Github; 
const page = new UI; 

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
   // Make http call
   git.getUser(userText)
    .then(data => {
        console.log(data); 
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        page.showProfile(data.profile); //get (users) from promise since promise return all user data 
        console.log(data.profile);
      }
    })
  } else {
    // Clear profile
    
  }
}); 