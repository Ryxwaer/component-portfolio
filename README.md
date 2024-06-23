# SIS Improvements

This project demonstrates improvements for the SAP Integration Suite (SIS) iFlow editor. It includes a before/after slider component to compare different versions of an iFlow editor UI.

## Features

- Before/After slider to compare different versions of the iFlow editor UI.
- Slightly dark theme for a modern look.
- Responsive design using Tailwind CSS.

## Project Setup

### Prerequisites

- Node.js (version 18 or later)
- npm (version 7 or later)

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ryxwaer/SIS_Improvements.git
   cd SIS_Improvements
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

### Production Deployment

#### Docker

1. **Build the Docker image:**

   ```bash
   docker-compose build
   ```

2. **Run the Docker container:**

   ```bash
   docker-compose up -d
   ```

3. **Setpu the nginx proxy manager**


### Project Structure

- **components/**: Vue components, including the BeforeAfterSlider component.
- **assets/**: Static assets such as images and styles.
- **pages/**: Application pages.
- **public/**: Public assets that are directly accessible.
- **nuxt.config.ts**: Nuxt.js configuration file.
- **Dockerfile**: Docker configuration for building the production image.
- **docker-compose.yml**: Docker Compose configuration for running the application.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

### Contact

For more information, please visit the [GitHub Repository](https://github.com/Ryxwaer/SIS_Improvements).