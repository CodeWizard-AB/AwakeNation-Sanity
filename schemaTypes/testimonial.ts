import { defineField, defineType } from "sanity";

const testimonial = defineType({
	name: "testimonial",
	title: "Testimonials",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
	],
});

export default testimonial;
