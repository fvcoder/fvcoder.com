import { relations } from "drizzle-orm/relations";
import { integer, numeric, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text().primaryKey().notNull(),
  name: text().notNull(),
  email: text().notNull(),
  emailVerified: integer("email_verified").notNull(),
  image: text(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
  phoneNumber: text("phone_number"),
  phoneNumberVerified: integer("phone_number_verified"),
  username: text(),
  displayUsername: text("display_username"),
});

export const accounts = sqliteTable("accounts", {
  id: text().primaryKey().notNull(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at"),
  refreshTokenExpiresAt: integer("refresh_token_expires_at"),
  scope: text(),
  password: text(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export const apikeys = sqliteTable("apikeys", {
  id: text().primaryKey().notNull(),
  name: text(),
  start: text(),
  prefix: text(),
  key: text().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  refillInterval: integer("refill_interval"),
  refillAmount: integer("refill_amount"),
  lastRefillAt: integer("last_refill_at"),
  enabled: integer(),
  rateLimitEnabled: integer("rate_limit_enabled"),
  rateLimitTimeWindow: integer("rate_limit_time_window"),
  rateLimitMax: integer("rate_limit_max"),
  requestCount: integer("request_count"),
  remaining: integer(),
  lastRequest: integer("last_request"),
  expiresAt: integer("expires_at"),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
  permissions: text(),
  metadata: text(),
});

export const sessions = sqliteTable("sessions", {
  id: text().primaryKey().notNull(),
  expiresAt: integer("expires_at").notNull(),
  token: text().notNull(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const verifications = sqliteTable("verifications", {
  id: text().primaryKey().notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: integer("expires_at").notNull(),
  createdAt: integer("created_at"),
  updatedAt: integer("updated_at"),
});

export const courses = sqliteTable("courses", {
  id: text().primaryKey().notNull(),
  title: text().notNull(),
  logoUrl: text("logo_url").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  colorHex: text("color_hex").notNull(),
  description: text().notNull(),
  contentHour: text("content_hour").default("0").notNull(),
  contentPractice: text("content_practice").default("0").notNull(),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export const lessons = sqliteTable("lessons", {
  id: text().primaryKey().notNull(),
  title: text().notNull(),
  content: text().notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  nextLessonId: text("next_lesson_id"),
  courseId: text("course_id")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});

export const user = sqliteTable("user", {
  id: text().primaryKey().notNull(),
  name: text().notNull(),
  email: text().notNull(),
  emailVerified: integer().notNull(),
  image: text(),
  createdAt: numeric().notNull(),
  updatedAt: numeric().notNull(),
});

export const session = sqliteTable("session", {
  id: text().primaryKey().notNull(),
  expiresAt: numeric().notNull(),
  token: text().notNull(),
  createdAt: numeric().notNull(),
  updatedAt: numeric().notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: text()
    .notNull()
    .references(() => user.id),
});

export const account = sqliteTable("account", {
  id: text().primaryKey().notNull(),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text()
    .notNull()
    .references(() => user.id),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: numeric(),
  refreshTokenExpiresAt: numeric(),
  scope: text(),
  password: text(),
  createdAt: numeric().notNull(),
  updatedAt: numeric().notNull(),
});

export const verification = sqliteTable("verification", {
  id: text().primaryKey().notNull(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: numeric().notNull(),
  createdAt: numeric(),
  updatedAt: numeric(),
});

export const tags = sqliteTable("tags", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const article = sqliteTable("article", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content", { mode: "text" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const userToArticle = sqliteTable("article_author", {
  id: text("id").primaryKey(),
  articleId: text("article_id")
    .notNull()
    .references(() => article.id, { onDelete: "cascade" }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const articleTags = sqliteTable("tags_to_article", {
  id: text("id").primaryKey(),
  articleId: text("article_id")
    .notNull()
    .references(() => article.id, { onDelete: "cascade" }),
  tagId: text("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
});

/**************** Relations **************** */
export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  apikeys: many(apikeys),
  sessions: many(sessions),
}));

export const apikeysRelations = relations(apikeys, ({ one }) => ({
  user: one(users, {
    fields: [apikeys.userId],
    references: [users.id],
  }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const lessonsRelations = relations(lessons, ({ one, many }) => ({
  course: one(courses, {
    fields: [lessons.courseId],
    references: [courses.id],
  }),
  lesson: one(lessons, {
    fields: [lessons.nextLessonId],
    references: [lessons.id],
    relationName: "lessons_nextLessonId_lessons_id",
  }),
  lessons: many(lessons, {
    relationName: "lessons_nextLessonId_lessons_id",
  }),
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  lessons: many(lessons),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const tagsRelations = relations(articleTags, ({ many }) => ({
  articles: many(article),
}));

export const articleRelations = relations(article, ({ many }) => ({
  tags: many(articleTags),
}));

export const articleAuthorRelations = relations(userToArticle, ({ many }) => ({
  articles: many(article),
}));

export const userToArticleRelations = relations(userToArticle, ({ many }) => ({
  articles: many(article),
}));
