# Docify 🕊️

Docify is a modern collaborative document editing application powered by the Tiptap editor. It offers real-time collaboration, robust authentication, and an elegant design for seamless user experience. Built with cutting-edge technologies, Docify aims to simplify document editing and sharing.

---

## Features 🔧

- **Real-Time Collaboration**: Work on documents together with Liveblocks, ensuring instant updates across all collaborators. ✨
- **Organization Management**: Create organizations, invite users, and collaborate on documents within shared workspaces. 🔐
- **Authentication**: Secure login and account management powered by Clerk. 🔑
- **Responsive UI**: Built with Tailwind CSS and Shadcn UI for a stunning, mobile-friendly design. 🌐
- **Modern Text Editor**: Leverages the Tiptap editor for a feature-rich, customizable editing experience. 🔄
- **Cloud-Backed Storage**: Uses Convex for efficient and scalable data storage. ☁️

---

## Tech Stack 🎨

### **Frontend**
- **Next.js 15**: The React-based framework for building fast, server-rendered web applications.
- **React 19**: Provides the foundation for a robust, reactive UI.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling. 🎨
- **Shadcn UI**: A component library for consistent and visually appealing designs.

### **Backend & Collaboration**
- **Convex**: Serverless backend for data storage and API management. 🌐
- **Liveblocks**: Real-time collaboration features, ensuring changes sync instantly. 🚀

### **Authentication**
- **Clerk**: Streamlined authentication and user management services. 🔑

---

## Getting Started 🛠️

### Prerequisites

- **Node.js** (v16.8 or newer)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/docify.git
   cd docify
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and add the required variables for Clerk, Convex, and Liveblocks:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
   CLERK_API_KEY=your_clerk_api_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_key
   ```

4. Run the Convex development service:
   ```bash
   npx convex dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000). 🚀

---

## Usage 🔄

1. **Create an Account**: Sign up or log in using the authentication powered by Clerk.
2. **Create an Organization**: Set up an organization and invite collaborators.
3. **Start Editing**: Create a new document or collaborate on an existing one with others in real time.
4. **Share Documents**: Invite collaborators via links and work together in real time. ✉️

---

## Contributing 💪

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request on GitHub. 🔧

---

## License 📚

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgments 🌟

- [Next.js](https://nextjs.org/)
- [Tiptap](https://tiptap.dev/)
- [Clerk](https://clerk.dev/)
- [Liveblocks](https://liveblocks.io/)
- [Convex](https://www.convex.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.dev/)

---

## Contact 📢

If you have any questions or feedback, feel free to reach out at [your-email@example.com](mailto:your-email@example.com).

