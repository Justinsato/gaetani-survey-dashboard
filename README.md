# Gaetani Client Survey Dashboard

A React dashboard for visualizing Gaetani Real Estate client survey results, built with Vite, TypeScript, and Recharts.

## Features

- Executive overview of client satisfaction metrics
- Detailed analysis of portfolio manager performance
- Client sentiment and relationship visualization
- Service quality metrics comparison
- Communication preference analysis

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/gaetani-survey-dashboard.git
   cd gaetani-survey-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

## Deployment on Azure Static Web Apps

This repository is configured for automatic deployment to Azure Static Web Apps.

### First-time setup:

1. Go to the [Azure Portal](https://portal.azure.com)
2. Search for "Static Web Apps" and click "Create"
3. Fill in the basics:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: gaetani-survey-dashboard (or your preferred name)
   - **Plan type**: Free
   - **Region**: Select the closest to your users
   - **Source**: GitHub
   - **GitHub Account**: Connect and select your account
   - **Organization**: Your GitHub organization
   - **Repository**: gaetani-survey-dashboard
   - **Branch**: main or master
   - **Build Presets**: React
   - **App location**: /
   - **Api location**: Leave empty
   - **Output location**: dist

4. Click "Review + create" and then "Create"

5. After creation, Azure will automatically create a GitHub Actions workflow file in your repository.

6. The automatic deployment will begin when you push to your main/master branch.

### For existing deployments:

Commits to the main/master branch will automatically trigger a new build and deployment.

## Troubleshooting

If you encounter build issues:

1. Check that the `index.html` file exists in the root directory
2. Verify that the `vite.config.ts` file has the correct configuration
3. Ensure all dependencies are correctly listed in `package.json`
4. Check the GitHub Actions logs for specific error messages