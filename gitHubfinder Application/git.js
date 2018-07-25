class Github {
    constructor() {
      this.client_id = '465c134f2803b780e8e5';
      this.client_secret = '99745da5cf3f5298bdb2f88fed77194ec9067851';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }
