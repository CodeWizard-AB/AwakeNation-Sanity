interface Config {
  projectId: string
  projectDataset: string
  projectTitle: string
}

const config: Config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  projectDataset: process.env.SANITY_STUDIO_PROJECT_DATASET!,
  projectTitle: process.env.SANITY_STUDIO_PROJECT_TITLE!,
}

export default config
