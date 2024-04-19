-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "colorSelect" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "handle" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "colorSelect" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_projectToskills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_projectToskills_A_fkey" FOREIGN KEY ("A") REFERENCES "project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_projectToskills_B_fkey" FOREIGN KEY ("B") REFERENCES "skills" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_projectToskills_AB_unique" ON "_projectToskills"("A", "B");

-- CreateIndex
CREATE INDEX "_projectToskills_B_index" ON "_projectToskills"("B");
