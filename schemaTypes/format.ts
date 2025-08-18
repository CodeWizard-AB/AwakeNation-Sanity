import { defineField, defineType } from "sanity";

export const football = defineType({
	name: "football",
	title: "Football",
	type: "document",
	fields: [
		defineField({
			name: "event",
			title: "Event",
			type: "reference",
			to: [{ type: "event" }],
		}),
		defineField({
			name: "teamName",
			title: "Team Name",
			type: "string",
		}),
		defineField({
			name: "institutionName",
			title: "Institution Name",
			type: "string",
		}),
		defineField({
			name: "managerName",
			title: "Manager Name",
			type: "string",
		}),
		defineField({
			name: "managerPhone",
			title: "Manager Phone",
			type: "string",
		}),
		defineField({
			name: "managerWhatsApp",
			title: "Manager WhatsApp",
			type: "string",
		}),
		defineField({
			name: "managerEmail",
			title: "Manager Email",
			type: "string",
		}),
		defineField({
			name: "universityLogo",
			title: "University Logo",
			type: "file",
		}),
		defineField({
			name: "paymentReceipt",
			title: "Payment Receipt",
			type: "file",
		}),
		defineField({
			name: "players",
			title: "Players",
			type: "array",
			of: [
				{
					type: "object",
					name: "player",
					title: "Player",
					fields: [
						defineField({
							name: "name",
							title: "Player Name",
							type: "string",
						}),
						defineField({
							name: "jerseySize",
							title: "Jersey Size",
							type: "string",
						}),
						defineField({
							name: "position",
							title: "Position",
							type: "string",
						}),
					],
				},
			],
			readOnly: true,
		}),
	],
});
