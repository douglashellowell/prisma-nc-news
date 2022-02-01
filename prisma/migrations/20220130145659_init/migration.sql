-- CreateTable
CREATE TABLE "Topic" (
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "avatar_url" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Article" (
    "article_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "topic" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "comment_id" SERIAL NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "article_id" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("comment_id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_topic_fkey" FOREIGN KEY ("topic") REFERENCES "Topic"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Article"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;
