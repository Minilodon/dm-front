import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: ["src/graphql/**/*.graphql", "!src/generated/*"],
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript-react-apollo",
        "typescript",
        "typescript-operations",
      ],
      config: {
        withHooks: true,
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        withComponent: true,
      },
    },
  },
};

export default config;
