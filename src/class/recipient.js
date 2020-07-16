class Recipient {
  constructor() {
    this.hasAntibodies = false;
  }

  acceptInjection(vaccine) {
    if (vaccine.composition.includes("Virus Proteins")) {
      this.hasAntibodies = true;
    }
  }

  getHasAntibodies() {
    return this.hasAntibodies;
  }
}

export default Recipient;
