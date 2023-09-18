let scenarioCount = 0;

module.exports = function () {
  this.registerHandler('BeforeScenario', () => {
    scenarioCount++;
  });

  this.After(() => {
    console.log(`Total scenarios executed: ${scenarioCount}`);
  });
};
