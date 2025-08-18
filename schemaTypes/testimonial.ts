// schemas/testimonial.js
import { defineField, defineType } from "sanity";

const testimonial = defineType({
	name: "testimonial",
	title: "Testimonials",
	type: "document",
	fields: [
		defineField({
			name: "authorName",
			title: "Author Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "role",
			title: "Role or Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "testimonialText",
			title: "Testimonial Text",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "authorPhoto",
			title: "Author Photo",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: "alt",
					title: "Alternative Text",
					type: "string",
					description: "Important for accessibility and SEO.",
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "authorName",
			subtitle: "role",
			media: "authorPhoto",
		},
		prepare({ title, subtitle, media }) {
			return {
				title,
				subtitle,
				media,
			};
		},
	},
});

export default testimonial;
