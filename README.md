# Shona Dictionary (Duramazwi)

Duramazwi is a Shona dictionary application designed to provide accurate definitions, translations, and examples for Shona words. It includes a search feature with fuzzy matching, Google Analytics for insights, and a user contribution model for expanding the dataset.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses the **App Router** and organizes components under the `src/` directory.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later)
- [MongoDB](https://www.mongodb.com/) (optional, for dynamic storage of dictionary data)
- Docker (optional, for development container setup)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/duramazwi.git
   cd duramazwi
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and set up your environment variables:
   ```sh
   MONGODB_URI=your_mongodb_connection_string # optional
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Development

### Using Dev Containers (Optional)
If you're using VS Code with Dev Containers:
- The project includes a `.devcontainer` setup with MongoDB support.
- Run the containerized environment by opening the project in VS Code and selecting **Reopen in Container**.

## Documentation
- [Analytics Overview](docs/ANALYTICS.md)
- [Data Generation Process](docs/DATA_GENERATION.md)
- [Quality Assurance Plan](docs/QUALITY.md)

## Contribution Guide
We welcome contributions! Here's how you can help:
### Suggest new words
Use the [Suggest Page](https://shonadictionary.com/suggest).
### Fix errors
Report issues (or submit feature requests) via GitHub.

### Submit pull requests.
Address issues or add new features.

  1. **Fork the original repository**: Go to the original GitHub repo and click "Fork."
  2. **Clone or reconfigure your fork**: After forking, clone it locally, or rename your old `origin` to `upstream` and add your new fork as `origin`.
  3. **Create a feature branch**: For example, `git checkout -b my-feature`.
  4. **Make your changes and commit**: Develop your features or fixes, then commit them.
  5. **Push to your fork**: Push your local branch to your fork's repository.
  6. **Open a pull request**: In GitHub, click "Compare & pull request."
    - **Base** should be the original repository's branch (e.g. `asideofcode/duramazwi:main`).
    - **Head** should be your fork's branch (e.g. `<your-username>:my-feature`).
  7. **Review process**: The PR appears in the original repo for review and discussion. You might be asked for changes, and once approved, it will be merged into the upstream repository.

  Following this process will make collaboration much easier. Let me know if you have any questions, and thanks again for your interest in improving the project.


## License
This project is licensed under the MIT License.

## Acknowledgments
- Inspired by existing Shona dictionaries.
- Contributions from the community.
