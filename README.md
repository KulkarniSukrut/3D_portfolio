# 3D Portfolio Website

A cutting-edge, fully responsive 3D portfolio website built with React, React Three Fiber (R3F), and GSAP ScrollTrigger. This immersive web experience showcases creative development skills through interactive 3D models and smooth scroll-based animations.

## 🚀 Features

### 3D Experience
- **MacBook Model**: Animated laptop that opens on scroll with screen unlock animation
- **File Folder**: Interactive folder that opens to reveal project cards
- **iPad Model**: Tablet with app opening animation for contact section
- **Smooth Transitions**: All animations are scrubbed with GSAP ScrollTrigger

### Technical Highlights
- **100% Responsive**: Scales perfectly on mobile and desktop using R3F's responsive helpers
- **Performance Optimized**: Uses Suspense for model loading and optimized assets
- **Scroll-Driven**: Fixed 3D canvas with content sections scrolling over it
- **Modern Stack**: React 18, Vite, Tailwind CSS, Three.js

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: React Three Fiber, Three.js, @react-three/drei
- **Animations**: GSAP with ScrollTrigger plugin
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Project Structure

```
3d-portfolio/
├── public/
│   ├── models/          # 3D model files (.glb, .gltf)
│   └── textures/        # Texture files
├── src/
│   ├── components/
│   │   ├── Experience.jsx    # Main 3D scene component
│   │   └── LoadingScreen.jsx # Loading component
│   ├── models/           # 3D model imports
│   ├── App.jsx          # Main app with scroll sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Animation Timeline

### Section 1: Landing
- MacBook model centered and closed
- Welcome message with call-to-action

### Section 2: About Me
- MacBook opens smoothly on scroll
- Screen "unlocks" with blur-to-clear animation
- About content appears on screen texture

### Section 3: Projects
- File folder emerges from background
- Folder opens as scrolling continues
- Project cards fly out with staggered animation
- Each card is clickable (links to GitHub repos)

### Section 4: Contact
- iPad model appears with scaling animation
- App opening animation on iPad screen
- Contact form and social links revealed

## 🎮 Usage

### Adding Your Own Content

1. **Update About Me Section**: Modify the text in `App.jsx` section 2
2. **Add Projects**: Update the projects array in `Experience.jsx`
3. **Change Contact Info**: Update email and social links in section 4
4. **Customize Colors**: Modify material colors in the 3D components

### Adding 3D Models

1. Place your GLTF/GLB models in `public/models/`
2. Import them in the respective components
3. Replace the placeholder geometry with your models

Example:
```jsx
import macbookModel from '../models/macbook.glb';

// Use useGLTF hook from @react-three/drei
const { scene } = useGLTF(macbookModel);
```

## 🔧 Customization

### Performance Tips
- Use Draco compression for 3D models
- Optimize texture sizes (use 2K or smaller)
- Enable model LODs for complex scenes
- Use React.memo for expensive components

### Responsive Design
- Adjust camera positions based on screen size
- Use `useResponsive` helper from @react-three/drei
- Test on various devices and screen sizes

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder
3. Configure build settings

### GitHub Pages
1. Update `vite.config.js` base path
2. Build and deploy to `gh-pages` branch

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) for React + Three.js integration
- [GSAP](https://greensock.com/gsap/) for smooth animations
- [Three.js](https://threejs.org/) for 3D graphics
- [Vite](https://vitejs.dev/) for fast development experience

## 📞 Contact

Created with ❤️ by [Your Name]

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: hello@example.com
