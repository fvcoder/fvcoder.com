/*
  Warnings:

  - You are about to drop the column `color` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `colorSelect` on the `project` table. All the data in the column will be lost.
  - Added the required column `state` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "authority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_project" ("authority", "body", "createdAt", "description", "handle", "id", "name", "thumbnail", "updatedAt") SELECT "authority", "body", "createdAt", "description", "handle", "id", "name", "thumbnail", "updatedAt" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
