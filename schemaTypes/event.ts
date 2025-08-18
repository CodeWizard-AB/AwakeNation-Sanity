import { defineField, defineType } from "sanity";

const event = defineType({
	name: "event",
	title: "Events",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Event Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [{ type: "category" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "form",
			title: "Event Form",
			type: "reference",
			to: [{ type: "form" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventDate",
			title: "Event Start Date",
			type: "date",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventEndDate",
			title: "Event End Date",
			type: "date",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "registrationOpen",
			title: "Registration Open",
			type: "boolean",
			initialValue: true,
		}),
		defineField({
			name: "registrationDeadline",
			title: "Registration Deadline",
			type: "date",
		}),
		defineField({
			name: "imageUrl",
			title: "Event Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "fee",
			title: "Registration Fee",
			type: "number",
			validation: (rule) => rule.min(0),
		}),
	],
});

export default event;
