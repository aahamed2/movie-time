<div align="center">
    <img width="209" alt="Logo" src="https://github.com/user-attachments/assets/1dda4015-3f2e-44fe-823b-5a5293f3a652" />
   
</div>

My Movies Website is a platform for users to browse a wide variety of movies and manage their favorite selections. The application provides an intuitive interface for searching movies and easily marking them as favorites.

Instructions for Installation and Running Locally
To run the application locally, follow these steps:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/aahamed2/movie-time.git
   cd movie-time
   ```
2. **Install dependencies:**
   ```bash
   bun install
   ```
3. **Run the application:**
   ```bash
   bun run dev
   ```
   The application will be accessible at `http://localhost:3000` in your web browser.

**Technologies Used**
- Next.js 15: For building the application with server-side rendering.
- Bun: Used as the JavaScript runtime.
- SCSS: For modular and maintainable styling.
- Zustand: For global state management, particularly for managing favorite movies.
- Embla Carousel: For implementing a responsive carousel feature.
- TypeScript: For static typing, improving code quality and maintainability.
- Next.js Revalidation: Implemented Next.js revalidation to fetch updated data every hour, ensuring that users see the latest information without needing a full page reload.

**Features**
- Search on Home Page: The search bar is integrated on the home page for quick access. Upon entering a query, users are redirected to a results page using `router.push`.
- Dynamic Routing: Each movie detail page has a unique URL for easy bookmarking and sharing.
- Detailed Movie Page: Each movie has a dedicated page that provides in-depth information, including a synopsis, cast details, and user ratings, enhancing the overall user experience
- Sorting Functionality: Users can sort movies on the search results page by release date (latest to oldest or vice versa), ensuring a responsive experience.

**Challenges and Solutions**
- Hydration Errors: Resolved dynamic data inconsistencies between server and client components by using conditional rendering and ensuring consistent data availability.
- Responsive Design: Achieved a visually appealing layout using CSS Modules and SCSS for flexible component styling.
- Favorite Movies Management: Leveraged Zustand for lightweight state management of favorite movies across components.
- Server and Client Components: Utilized Next.js 15's optimized components to improve load times, using server-side rendering for data fetching and client components for interactivity.




