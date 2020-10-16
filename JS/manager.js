class Manager {
    constructor(projects) {
      this.projects = projects;
    }
    // Getter
    get projects() {
      return this.projects;
    }
    // Method
    buildProject() {
      return this.height * this.width;
    }
  }