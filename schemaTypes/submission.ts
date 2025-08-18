import { defineField, defineType } from "sanity";

const submission = defineType({
	name: "submission",
	title: "Submissions",
	type: "document",
	fields: [
		defineField({
			name: "event",
			title: "Event",
			type: "reference",
			to: [{ type: "event" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "submittedAt",
			title: "Submitted At",
			type: "date",
			initialValue: new Date().toISOString(),
		}),
		defineField({
			name: "submissionData",
			title: "Submission Data",
			type: "reference",
			to: [{ type: "football" }],
		}),
	],
	preview: {
		select: {
			title: "submissionData.teamName",
			subtitle: "submittedAt",
		},
	},
});

export default submission;
