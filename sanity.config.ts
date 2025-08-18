import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import config from "./config";
import event from "./schemaTypes/event";
import form from "./schemaTypes/form";
import submission from "./schemaTypes/submission";
import { member } from "./schemaTypes/member";
import testimonial from "./schemaTypes/testimonial";
import category from "./schemaTypes/category";
import { football } from "./schemaTypes/format";

export default defineConfig({
	name: "default",
	title: config.projectTitle,
	projectId: config.projectId,
	dataset: config.projectDataset,
	plugins: [
		visionTool(),
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Events")
							.child(
								S.documentTypeList("category")
									.title("Event Categories")
									.child((categoryId) =>
										S.documentTypeList("event")
											.title("Events by Category")
											.filter(
												`_type == "event" && category._ref == $categoryId`
											)
											.params({ categoryId })
									)
							),
						S.listItem()
							.title("Forms")
							.child(
								S.documentTypeList("category")
									.title("Event Categories")
									.filter(`_type == "category"`)
									.child((categoryId) =>
										S.documentTypeList("form")
											.title("Forms by Category")
											.filter(`_type == "form" && category._ref == $categoryId`)
											.params({ categoryId })
									)
							),
						S.listItem()
							.title("Submissions")
							.child(
								S.documentTypeList("category")
									.title("Submissions by Category")
									.child((categoryId) =>
										S.documentTypeList("event")
											.title("Events by Category")
											.filter(
												'_type == "event" && category._ref == $categoryId'
											)
											.params({ categoryId })
											.child((eventId) =>
												S.documentList()
													.title("Submissions for Event")
													.filter(
														'_type == "submission" && event._ref == $eventId'
													)
													.params({ eventId })
											)
									)
							),
						...S.documentTypeListItems().filter(
							(listItem) =>
								!["event", "form", "submission", "football"].includes(
									listItem.getId()!
								)
						),
					]),
		}),
	],
	schema: {
		types: [event, form, submission, member, testimonial, category, football],
	},
});
