// Blog data from the provided JSON
const blogData = {
  "blogPosts": [
    {
      "id": 1,
      "title": "My Journey as a Junior Developer",
      "excerpt": "Starting my career in software development has been an incredible learning experience. Here's what I've learned in my first year as a junior developer.",
      "content": "Starting my career in software development has been both challenging and rewarding. When I first began coding, everything seemed overwhelming - from understanding basic syntax to grasping complex frameworks. However, persistence and continuous learning have been my best friends throughout this journey.\n\nThe most important lesson I've learned is that being a junior developer isn't about knowing everything; it's about being curious, asking questions, and never being afraid to admit when you don't understand something. Every senior developer was once in our shoes, and most are more than willing to help and share their knowledge.\n\nSome key milestones in my journey include:\n- Building my first web application using HTML, CSS, and JavaScript\n- Learning React and creating dynamic user interfaces\n- Understanding version control with Git and GitHub\n- Collaborating with a team on my first real project\n- Participating in code reviews and learning from feedback\n\nTo fellow junior developers: embrace the challenges, celebrate small wins, and remember that growth takes time. Every bug you fix and every feature you implement is a step forward in your development journey.",
      "date": "2024-08-15",
      "readTime": "5 min read",
      "category": "Career",
      "tags": ["junior developer", "career", "learning", "growth"]
    },
    {
      "id": 2,
      "title": "5 Essential JavaScript Concepts Every Beginner Should Know",
      "excerpt": "Master these fundamental JavaScript concepts to build a strong foundation for your programming journey.",
      "content": "JavaScript is the backbone of modern web development, and understanding its core concepts is crucial for any aspiring developer. Here are five essential concepts that every beginner should master:\n\n**1. Variables and Data Types**\nJavaScript has several data types including strings, numbers, booleans, objects, and arrays. Understanding how to declare and use variables with let, const, and var is fundamental.\n\n**2. Functions**\nFunctions are reusable blocks of code that perform specific tasks. Learn about function declarations, expressions, arrow functions, and how to pass parameters.\n\n**3. Objects and Arrays**\nThese are complex data types that allow you to store multiple values. Objects use key-value pairs, while arrays store ordered lists of items.\n\n**4. Control Flow**\nConditional statements (if/else) and loops (for, while) control how your code executes based on different conditions.\n\n**5. Event Handling**\nJavaScript's ability to respond to user interactions like clicks, form submissions, and keyboard input is what makes websites interactive.\n\nMastering these concepts will give you a solid foundation to build upon as you advance in your JavaScript journey.",
      "date": "2024-08-10",
      "readTime": "7 min read",
      "category": "JavaScript",
      "tags": ["javascript", "beginners", "fundamentals", "tutorial"]
    },
    {
      "id": 3,
      "title": "Building My First React Application",
      "excerpt": "A step-by-step walkthrough of creating my first React app and the lessons learned along the way.",
      "content": "Building my first React application was both exciting and intimidating. React's component-based architecture seemed foreign at first, but once I understood the concepts, everything clicked into place.\n\n**The Project: Personal Task Manager**\nI decided to build a simple task management app that would allow users to add, edit, and delete tasks. This seemed like a perfect first project to understand React fundamentals.\n\n**Key Concepts I Learned:**\n- **Components**: Breaking the UI into reusable pieces\n- **Props**: Passing data between components\n- **State**: Managing component data and re-rendering\n- **Event Handling**: Responding to user interactions\n- **Conditional Rendering**: Showing/hiding elements based on state\n\n**Challenges Faced:**\n1. Understanding when to use state vs props\n2. Managing state across multiple components\n3. Properly handling form inputs\n4. Thinking in React's component-based way\n\n**Key Takeaways:**\n- Start small and gradually add features\n- Don't try to learn everything at once\n- Practice building small projects regularly\n- The React documentation is your best friend\n\nThis project taught me that React isn't as scary as it initially seemed. With practice and patience, anyone can master it!",
      "date": "2024-08-05",
      "readTime": "6 min read",
      "category": "React",
      "tags": ["react", "first project", "learning", "tutorial", "beginner"]
    },
    {
      "id": 4,
      "title": "Code Review Best Practices for Junior Developers",
      "excerpt": "Learn how to give and receive effective code reviews that will accelerate your growth as a developer.",
      "content": "Code reviews are one of the most valuable learning opportunities for junior developers. They provide insights into best practices, coding standards, and different approaches to solving problems.\n\n**When Receiving Code Reviews:**\n\n1. **Don't Take It Personally**\nRemember that feedback is about the code, not about you as a person. Every developer has room for improvement.\n\n2. **Ask Questions**\nIf you don't understand a suggestion, ask for clarification. This shows engagement and helps you learn.\n\n3. **Be Open to Change**\nBe willing to refactor your code based on feedback. This is how you grow and improve.\n\n4. **Learn the 'Why'**\nDon't just implement changes - understand why they're being suggested.\n\n**When Giving Code Reviews:**\n\n1. **Be Constructive**\nFocus on the code and provide actionable feedback rather than just pointing out problems.\n\n2. **Highlight Good Parts**\nDon't just focus on issues - acknowledge well-written code and good practices.\n\n3. **Explain Your Reasoning**\nWhen suggesting changes, explain why the change would be beneficial.\n\n4. **Be Kind and Professional**\nRemember there's a human behind the code. Be respectful in your comments.\n\n**What to Look For:**\n- Code readability and clarity\n- Performance considerations\n- Security vulnerabilities\n- Adherence to coding standards\n- Test coverage\n- Documentation\n\nCode reviews are a collaborative process that benefits everyone involved. Embrace them as opportunities to learn and grow!",
      "date": "2024-07-28",
      "readTime": "8 min read",
      "category": "Best Practices",
      "tags": ["code review", "best practices", "collaboration", "junior developer"]
    },
    {
      "id": 5,
      "title": "Learning Git: A Beginner's Guide",
      "excerpt": "Master the essential Git commands and workflows that every developer needs to know for effective version control.",
      "content": "Git is an essential tool for any developer, but it can seem overwhelming at first. Here's a beginner-friendly guide to get you started with Git and version control.\n\n**What is Git?**\nGit is a distributed version control system that tracks changes in your code over time. It allows you to collaborate with others, maintain different versions of your project, and roll back changes when needed.\n\n**Essential Git Commands:**\n\n1. **git init** - Initialize a new Git repository\n2. **git add** - Stage changes for commit\n3. **git commit** - Save staged changes with a message\n4. **git push** - Upload commits to remote repository\n5. **git pull** - Download changes from remote repository\n6. **git status** - Check the status of your working directory\n7. **git log** - View commit history\n\n**Basic Workflow:**\n1. Make changes to your files\n2. Stage changes with `git add`\n3. Commit changes with `git commit -m 'descriptive message'`\n4. Push to remote repository with `git push`\n\n**Branching Basics:**\nBranches allow you to work on features independently:\n- `git branch feature-name` - Create new branch\n- `git checkout feature-name` - Switch to branch\n- `git merge feature-name` - Merge branch into current branch\n\n**Best Practices:**\n- Write clear, descriptive commit messages\n- Commit frequently with small, logical changes\n- Use branches for new features or experiments\n- Pull before pushing to avoid conflicts\n\n**Common Mistakes to Avoid:**\n- Don't commit sensitive information (passwords, API keys)\n- Don't make huge commits with many unrelated changes\n- Don't ignore .gitignore files\n\nGit might seem complex initially, but with regular practice, it becomes second nature. Start with the basics and gradually learn more advanced features as you need them.",
      "date": "2024-07-20",
      "readTime": "10 min read",
      "category": "Tools",
      "tags": ["git", "version control", "beginner", "tutorial", "workflow"]
    },
    {
      "id": 6,
      "title": "Responsive Web Design Tips and Tricks",
      "excerpt": "Essential techniques for creating websites that look great on all devices, from mobile phones to desktop computers.",
      "content": "In today's multi-device world, responsive web design isn't optional - it's essential. Here are some key tips and tricks to create websites that work beautifully across all screen sizes.\n\n**1. Mobile-First Approach**\nStart designing for mobile devices first, then progressively enhance for larger screens. This ensures your site works well on the most constrained devices.\n\n**2. Flexible Grid Systems**\nUse CSS Grid or Flexbox for flexible layouts that adapt to different screen sizes.\n\n**3. Responsive Images**\nMake images scale properly and serve appropriate sizes.\n\n**4. Flexible Typography**\nUse relative units and consider viewport units for scalable text.\n\n**5. Touch-Friendly Design**\n- Make buttons and links at least 44px tall\n- Provide adequate spacing between interactive elements\n- Consider thumb navigation on mobile devices\n\n**6. Performance Considerations**\n- Optimize images for different screen densities\n- Use CSS instead of JavaScript for simple animations\n- Minimize HTTP requests\n\n**7. Testing Across Devices**\n- Use browser developer tools for initial testing\n- Test on real devices when possible\n- Consider using tools like BrowserStack for comprehensive testing\n\n**Common Breakpoints:**\n- Mobile: 320px - 767px\n- Tablet: 768px - 1023px\n- Desktop: 1024px and up\n\nRemember, responsive design is about creating a great user experience regardless of the device. Focus on content hierarchy, readability, and usability across all screen sizes.",
      "date": "2024-07-15",
      "readTime": "9 min read",
      "category": "CSS",
      "tags": ["responsive design", "css", "mobile-first", "web development", "frontend"]
    }
  ]
};

// Global variables
let currentTheme = 'dark';
let isMenuOpen = false;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
    console.log('Initializing app...');
    
    setupTheme();
    setupEventListeners();
    setupAnimations();
    setupSkillBars();
    
    // Update nav after page loads
    setTimeout(updateActiveNavLink, 100);
    
    console.log('App initialized successfully');
}

function setupTheme() {
    currentTheme = 'dark';
    applyTheme();
}

function applyTheme() {
    // Apply theme by updating CSS custom properties directly
    const root = document.documentElement;
    
    if (currentTheme === 'light') {
        root.style.setProperty('--color-background', '#fcfcf9');
        root.style.setProperty('--color-surface', '#ffffff');
        root.style.setProperty('--color-text', '#134252');
        root.style.setProperty('--color-text-secondary', '#626C71');
        root.style.setProperty('--color-primary', '#218391');
        root.style.setProperty('--color-primary-hover', '#1D7480');
        root.style.setProperty('--color-card-bg', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--color-border-subtle', 'rgba(94, 82, 64, 0.1)');
        root.style.setProperty('--color-nav-bg', 'rgba(252, 252, 249, 0.95)');
    } else {
        root.style.setProperty('--color-background', '#0a0e27');
        root.style.setProperty('--color-surface', '#1a1f3a');
        root.style.setProperty('--color-text', '#ffffff');
        root.style.setProperty('--color-text-secondary', '#b8c4d6');
        root.style.setProperty('--color-primary', '#00d4ff');
        root.style.setProperty('--color-primary-hover', '#4dabf7');
        root.style.setProperty('--color-card-bg', 'rgba(26, 31, 58, 0.8)');
        root.style.setProperty('--color-border-subtle', 'rgba(184, 196, 214, 0.1)');
        root.style.setProperty('--color-nav-bg', 'rgba(10, 14, 39, 0.95)');
    }
    
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-toggle__icon');
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme();
    console.log('Theme toggled to:', currentTheme);
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.onclick = function(e) {
            e.preventDefault();
            toggleTheme();
            return false;
        };
    }
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) {
        navToggle.onclick = function(e) {
            e.preventDefault();
            toggleMobileMenu();
            return false;
        };
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.onclick = function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href);
                closeMobileMenu();
            }
            return false;
        };
    });
    
    // Hero buttons
    const heroContactBtn = document.querySelector('.hero__buttons .btn[href="#contact"]');
    const heroBlogBtn = document.querySelector('.hero__buttons .btn[href="#blog"]');
    
    if (heroContactBtn) {
        heroContactBtn.onclick = function(e) {
            e.preventDefault();
            scrollToSection('#contact');
            return false;
        };
    }
    
    if (heroBlogBtn) {
        heroBlogBtn.onclick = function(e) {
            e.preventDefault();
            scrollToSection('#blog');
            return false;
        };
    }
    
    // Blog cards and read more buttons
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        const postId = card.getAttribute('data-post-id');
        
        // Read more button
        const readMoreBtn = card.querySelector('.read-more-btn');
        if (readMoreBtn) {
            readMoreBtn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                openBlogModal(postId);
                return false;
            };
        }
        
        // Card click
        card.onclick = function(e) {
            if (!e.target.classList.contains('read-more-btn')) {
                openBlogModal(postId);
            }
        };
    });
    
    // Modal controls
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');
    
    if (modalClose) {
        modalClose.onclick = function(e) {
            e.preventDefault();
            closeBlogModal();
            return false;
        };
    }
    
    if (modalOverlay) {
        modalOverlay.onclick = function(e) {
            e.preventDefault();
            closeBlogModal();
            return false;
        };
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            handleContactSubmit();
            return false;
        };
    }
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.onclick = function(e) {
            e.preventDefault();
            scrollToTop();
            return false;
        };
    }
    
    // View all posts button
    const viewAllBtn = document.getElementById('view-all-posts');
    if (viewAllBtn) {
        viewAllBtn.onclick = function(e) {
            e.preventDefault();
            showAllPosts();
            return false;
        };
    }
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('blog-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeBlogModal();
            } else if (isMenuOpen) {
                closeMobileMenu();
            }
        }
    });
    
    console.log('Event listeners set up successfully');
}

function scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
        });
        console.log('Scrolling to:', targetId);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('Scrolling to top');
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    isMenuOpen = !isMenuOpen;
    
    if (navMenu) {
        navMenu.classList.toggle('active', isMenuOpen);
    }
    
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    console.log('Mobile menu toggled:', isMenuOpen);
}

function closeMobileMenu() {
    if (isMenuOpen) {
        toggleMobileMenu();
    }
}

function openBlogModal(postId) {
    const modal = document.getElementById('blog-modal');
    const post = blogData.blogPosts.find(p => p.id === parseInt(postId));
    
    if (!post || !modal) {
        console.error('Post or modal not found');
        return;
    }
    
    console.log('Opening modal for post:', post.title);
    
    // Populate modal content
    const categoryEl = document.getElementById('post-category');
    const dateEl = document.getElementById('post-date');
    const titleEl = document.getElementById('post-title');
    const readTimeEl = document.getElementById('post-read-time');
    const contentEl = document.getElementById('post-content');
    
    if (categoryEl) categoryEl.textContent = post.category;
    if (dateEl) dateEl.textContent = formatDate(post.date);
    if (titleEl) titleEl.textContent = post.title;
    if (readTimeEl) readTimeEl.textContent = post.readTime;
    if (contentEl) contentEl.innerHTML = formatContent(post.content);
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        console.log('Modal closed');
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatContent(content) {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map(paragraph => {
        // Handle bold text
        paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Handle bullet points
        if (paragraph.includes('- ')) {
            const lines = paragraph.split('\n');
            const listItems = lines.filter(line => line.trim().startsWith('- '))
                .map(line => `<li>${line.trim().substring(2)}</li>`)
                .join('');
            const otherLines = lines.filter(line => !line.trim().startsWith('- '))
                .filter(line => line.trim())
                .join('<br>');
            
            return `${otherLines ? `<p>${otherLines}</p>` : ''}<ul>${listItems}</ul>`;
        }
        
        // Handle numbered lists
        if (/^\d+\./.test(paragraph.trim())) {
            const lines = paragraph.split('\n');
            const listItems = lines.filter(line => /^\d+\./.test(line.trim()))
                .map(line => `<li>${line.trim().replace(/^\d+\.\s*/, '')}</li>`)
                .join('');
            const otherLines = lines.filter(line => !/^\d+\./.test(line.trim()))
                .filter(line => line.trim())
                .join('<br>');
            
            return `${otherLines ? `<p>${otherLines}</p>` : ''}<ol>${listItems}</ol>`;
        }
        
        return paragraph.trim() ? `<p>${paragraph.trim()}</p>` : '';
    }).filter(p => p).join('');
}

function handleContactSubmit() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    console.log('Contact form submitted:', { name, email, subject, message });
    
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show success message
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contact-form').reset();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 1rem 2rem;
        border-radius: 8px;
        border-left: 4px solid ${type === 'success' ? '#00d4ff' : '#ff4757'};
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: var(--color-text); font-size: 1.2rem; cursor: pointer; margin-left: 1rem;">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    console.log('Notification shown:', message, type);
}

function handleScroll() {
    updateActiveNavLink();
    updateBackToTopButton();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollPosition = window.scrollY + 100;

    let activeSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            activeSection = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

function updateBackToTopButton() {
    const backToTop = document.getElementById('back-to-top');
    const scrollTop = window.pageYOffset;
    
    if (backToTop) {
        if (scrollTop > 500) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    }
}

function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.blog-card, .skill-card, .about-text, .about-image');
    elements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillSection = document.getElementById('skills');

    if (!skillSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 500);
                });
                observer.unobserve(skillSection);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillSection);
}

function showAllPosts() {
    console.log('Show all posts functionality - placeholder');
    showNotification('All posts functionality would be implemented here.', 'info');
}

// Add required CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(animationStyles);

console.log('JavaScript file loaded completely');