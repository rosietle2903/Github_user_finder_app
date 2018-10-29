class Github {
    constructor() {
      this.client_id = 'num';
      this.client_secret = 'num';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }
