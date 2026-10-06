-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Set" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "trainingId" INTEGER NOT NULL,
    CONSTRAINT "Set_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Set" ("id", "trainingId") SELECT "id", "trainingId" FROM "Set";
DROP TABLE "Set";
ALTER TABLE "new_Set" RENAME TO "Set";
CREATE TABLE "new_SetExercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reps" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "setId" INTEGER NOT NULL,
    CONSTRAINT "SetExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SetExercise_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SetExercise" ("exerciseId", "id", "reps", "setId") SELECT "exerciseId", "id", "reps", "setId" FROM "SetExercise";
DROP TABLE "SetExercise";
ALTER TABLE "new_SetExercise" RENAME TO "SetExercise";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
