const { Workshop } = require('ldcli');

module.exports = function() {
    var workshop = Workshop({  name: "Pair Exercise: XOXO", slug: "pair-exercise-xoxo", description: "Learn Redux by making a console tic tac toe game" });

  workshop
    .Concept({ name: "Milestone: xoxo on the honor system", slug: "milestone-xoxo-on-the-honor-system", draftMode: false })
      .Action({ name: "Goal", slug: "goal", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Redux", slug: "redux", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "State", slug: "state", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Actions", slug: "actions", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Reducer", slug: "reducer", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Try it out!", slug: "try-it-out", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Feature: who won?", slug: "feature-who-won", draftMode: false })


  return workshop;

}
