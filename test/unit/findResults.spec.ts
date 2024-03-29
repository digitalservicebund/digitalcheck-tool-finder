import { Ressort } from "../../src/models/Ressort";
import { VisualisationObject } from "../../src/models/VisualisationObject";
import {
  findResultByObjectAndRessort,
  getAllObjects,
  getAllRessorts,
} from "../../src/persistance/repository";

describe("Repository", () => {
  test.each(createTestCases())(
    'findResultByObjectAndRessort for "%s" and "%s" returns at least one recommended tool.',
    (
      ressortName, // used for test name
      objectName, // used for test name
      ressort: Ressort,
      object: VisualisationObject,
    ) => {
      const result = findResultByObjectAndRessort(object, ressort);

      expect(result.recommendations).not.toBeNull();
      expect(result.recommendations.length).toBeGreaterThan(0);
    },
  );
});

function createTestCases(): [string, string, Ressort, VisualisationObject][] {
  const testCases: [string, string, Ressort, VisualisationObject][] = [];
  getAllRessorts().forEach((ressort) => {
    getAllObjects().forEach((object) => {
      testCases.push([ressort.name, object.name, ressort, object]);
    });
  });
  return testCases;
}
