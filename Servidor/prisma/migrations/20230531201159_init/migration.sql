-- CreateTable
CREATE TABLE "Productos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Productos_name_key" ON "Productos"("name");
