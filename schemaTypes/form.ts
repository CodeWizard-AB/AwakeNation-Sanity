import { defineField, defineType } from "sanity";

const form = defineType({
	name: "form",
	title: "Forms",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Form Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [{ type: "category" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "fields",
			title: "Form Fields",
			type: "array",
			of: [
				defineField({
					type: "object",
					name: "field",
					title: "Field Definition",
					fields: [
						defineField({
							name: "name",
							title: "Name",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "label",
							title: "Label",
							type: "string",
							validation: (Rule) => Rule.required(),
						}),
						defineField({
							name: "type",
							title: "Type",
							type: "string",
							validation: (Rule) => Rule.required(),
							options: {
								list: [
									{ title: "Text", value: "text" },
									{ title: "Email", value: "email" },
									{ title: "Phone", value: "tel" },
									{ title: "Number", value: "number" },
									{ title: "Date", value: "date" },
									{ title: "Time", value: "time" },
									{ title: "Checkbox", value: "checkbox" },
									{ title: "Radio", value: "radio" },
									{ title: "Select", value: "select" },
									{ title: "Text Area", value: "textarea" },
									{ title: "File", value: "file" },
									{ title: "Array of Objects", value: "objectArray" },
								],
							},
						}),
						defineField({
							name: "options",
							title: "Options",
							type: "array",
							of: [{ type: "string" }],
							hidden: ({ parent }) => parent?.type !== "select",
						}),
						defineField({
							name: "subFields",
							title: "Sub Fields",
							type: "array",
							hidden: ({ parent }) => parent?.type !== "objectArray",
							of: [
								defineField({
									name: "subFieldsDefinition",
									title: "Sub Fields Definition",
									type: "object",
									validation: (Rule) => Rule.required(),
									fields: [
										defineField({
											name: "name",
											title: "Name",
											type: "string",
											validation: (Rule) => Rule.required(),
										}),
										defineField({
											name: "label",
											title: "Label",
											type: "string",
											validation: (Rule) => Rule.required(),
										}),
										defineField({
											name: "type",
											title: "Type",
											type: "string",
											validation: (Rule) => Rule.required(),
											options: {
												list: [
													{ title: "Text", value: "text" },
													{ title: "Email", value: "email" },
													{ title: "Phone", value: "tel" },
													{ title: "Number", value: "number" },
													{ title: "Date", value: "date" },
													{ title: "Time", value: "time" },
													{ title: "Checkbox", value: "checkbox" },
													{ title: "Radio", value: "radio" },
													{ title: "Select", value: "select" },
													{ title: "Text Area", value: "textarea" },
													{ title: "File", value: "file" },
												],
											},
										}),
										defineField({
											name: "options",
											title: "Options",
											type: "array",
											of: [{ type: "string" }],
											hidden: ({ parent }) => parent?.type !== "select",
										}),
									],
									preview: {
										select: { title: "label", subtitle: "type" },
										prepare({ title, subtitle }) {
											return { title, subtitle };
										},
									},
								}),
							],
						}),
					],
					preview: {
						select: { title: "label", subtitle: "type" },
						prepare({ title, subtitle }) {
							return { title, subtitle };
						},
					},
				}),
			],
		}),
	],
});

export default form;
