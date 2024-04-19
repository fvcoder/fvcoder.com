-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "colorSelect" TEXT NOT NULL,
    "authority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_project" ("body", "color", "colorSelect", "createdAt", "description", "handle", "id", "name", "thumbnail", "updatedAt") SELECT "body", "color", "colorSelect", "createdAt", "description", "handle", "id", "name", "thumbnail", "updatedAt" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
CREATE TABLE "new_skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "colorSelect" TEXT NOT NULL,
    "authority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_skills" ("color", "colorSelect", "createdAt", "handle", "icon", "id", "name", "updatedAt") SELECT "color", "colorSelect", "createdAt", "handle", "icon", "id", "name", "updatedAt" FROM "skills";
DROP TABLE "skills";
ALTER TABLE "new_skills" RENAME TO "skills";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
