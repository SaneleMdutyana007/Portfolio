
console.log('Portfolio.js loaded successfully');

// ==================== PROJECT DATA (inside JS) ====================
const projectData = {
    'pharmacy': {
        title: 'Online Pharmacy System',
        description: 'Full-stack pharmacy management system with user authentication, inventory management, and sales reporting.',
        techTags: ['C#', 'ASP.NET MVC', 'SQL Server', 'JavaScript'],
        githubUrl: 'https://github.com/SaneleMdutyana007/Pharmacy-Management-System',
        videoUrl: 'Pharmacy management.mp4',
        repoName: 'SaneleMdutyana007/Pharmacy-Management-System',
        repoDescription: 'Full-stack pharmacy management system built with C#, ASP.NET MVC, SQL Server, and JavaScript.'
    },
    'task-manager': {
        title: 'Task Manager API',
        description: 'RESTful API for task management with user authentication, CRUD operations, and role-based permissions.',
        techTags: ['C#', '.NET Core', 'SQL Server', 'JWT'],
        githubUrl: 'https://github.com/SaneleMdutyana007/Task-Manager-API',
        repoName: 'SaneleMdutyana007/Task-Manager-API',
        repoDescription: 'RESTful API for task management with authentication and role-based permissions.',
        apiDocs: {
            title: 'Task Manager API Documentation',
            description: 'Comprehensive REST API for managing tasks with user authentication and role-based permissions.',
            endpoints: [
                { method: 'POST', path: '/api/auth/register', description: 'Register new user' },
                { method: 'POST', path: '/api/auth/login', description: 'Authenticate user' },
                { method: 'GET', path: '/api/tasks', description: 'Get all tasks (authenticated)' },
                { method: 'POST', path: '/api/tasks', description: 'Create new task' },
                { method: 'PUT', path: '/api/tasks/{id}', description: 'Update task' },
                { method: 'DELETE', path: '/api/tasks/{id}', description: 'Delete task' }
            ],
            postmanCollection: 'https://www.postman.com/collection-link-here'
        }
    },
    'weather': {
        title: 'Weather Dashboard',
        description: 'Responsive weather application with location detection, forecasts, and interactive charts using public APIs.',
        techTags: ['JavaScript', 'HTML/CSS', 'API Integration', 'Chart.js'],
        githubUrl: 'https://github.com/SaneleMdutyana007/Weather-Dashboard',
        repoName: 'SaneleMdutyana007/Weather-Dashboard',
        repoDescription: 'Responsive weather dashboard with location detection and interactive charts.',
        liveDemo: {
            title: 'Weather Dashboard Live Demo',
            description: 'Interactive weather application that detects your location and displays forecasts with interactive charts.',
            demoUrl: 'https://weather-demo.sanele.com',
            screenshot: 'weather-screenshot.png'
        }
    },
    'barbershop': {
        title: 'Barbershop Online Booking',
        description: 'Online booking system for barbershops with appointment scheduling, staff management, and customer notifications.',
        techTags: ['C#', 'ASP.NET MVC', 'SQL Server', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/SaneleMdutyana007/Barbershop-Booking-System',
        videoUrl: 'barbershop-demo.mp4',
        repoName: 'SaneleMdutyana007/Barbershop-Booking-System',
        repoDescription: 'Online booking system for barbershops with appointment management and notifications.'
    }
};

// ==================== LOADER UTILITIES ====================
function createGlobalLoader() {
    if (document.getElementById('loaderOverlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'loaderOverlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <div class="three-body" aria-hidden="true">
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
            <div class="three-body__dot"></div>
        </div>
    `;
    document.body.appendChild(overlay);
}

function showLoader() {
    const el = document.getElementById('loaderOverlay');
    if (!el) return;
    el.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
}

function hideLoader() {
    const el = document.getElementById('loaderOverlay');
    if (!el) return;
    el.classList.remove('active');
    document.documentElement.style.overflow = '';
}

// ==================== IMAGE HANDLING ====================
function setupProjectImages() {
    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.style.backgroundColor = '#f5f5f5';
        const src = img.getAttribute('src');
        const preloadImage = new Image();
        preloadImage.onload = function () {
            img.src = src;
            img.classList.add('loaded');
            if (this.naturalWidth < 350 || this.naturalHeight < 220) {
                img.style.objectFit = 'contain';
                img.style.backgroundColor = '#f5f5f5';
            }
        };
        preloadImage.onerror = function () {
            img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220"><rect width="100%" height="100%" fill="%23e9ecef"/><text x="50%" y="50%" font-family="Arial" font-size="16" fill="%23718096" text-anchor="middle" dy=".3em">Project Image</text></svg>';
            img.classList.add('loaded');
        };
        preloadImage.src = src;
    });
}

// ==================== CARD HEIGHT EQUALIZATION ====================
function equalizeCardHeights() {
    const projectCards = document.querySelectorAll('.project-card');
    if (!projectCards.length) return;
    let maxHeight = 0;
    projectCards.forEach(card => card.style.height = 'auto');
    projectCards.forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) maxHeight = height;
    });
    projectCards.forEach(card => card.style.height = maxHeight + 'px');
}

// ==================== FINE PRINT ====================
function setupFinePrint() {
    const finePrint = document.querySelector('.projects-fine-print');
    if (!finePrint) return;
    finePrint.style.cursor = 'pointer';
    finePrint.addEventListener('click', function () {
        this.classList.toggle('expanded');
        const p = this.querySelector('p');
        if (this.classList.contains('expanded')) {
            p.innerHTML = '<small><em>Note: The majority of projects featured here are personal and/or academic showcases. They were not commercially deployed and are intended to demonstrate my technical capabilities, problem-solving skills, and future potential in software development. These projects highlight my ability to learn new technologies, implement complex features, and deliver complete solutions from concept to execution.</em></small>';
        } else {
            p.innerHTML = '<small><em>Note: These projects demonstrate my technical capabilities and future potential.</em></small>';
        }
    });
    finePrint.title = "Click to read more about these projects";
}

// ==================== CURRENT YEAR ====================
function setupCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
}

// ==================== SMOOTH SCROLLING ====================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== ANIMATIONS ====================
function setupAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, idx) => el.style.animationDelay = `${idx * 0.2}s`);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animated');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .skill-category').forEach(el => observer.observe(el));
}

// ==================== CONTACT FORM ====================
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        formData.append('_subject', 'New message from Sanele\'s Portfolio');
        formData.append('_replyto', formData.get('email'));
        formData.append('_format', 'plain');

        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        removeFormMessage();

        try {
            const response = await fetch('https://formspree.io/f/xpqdjrwz', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                showFormMessage('✅ Message sent successfully! I will respond within 24 hours.', 'success');
                contactForm.reset();
                const userEmail = formData.get('email');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('⚠️ Could not send message. Please try again or contact me directly.', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showFormMessage(message, type) {
    removeFormMessage();
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (!submitBtn) return;

    const messageDiv = document.createElement('div');
    messageDiv.id = 'form-message';
    messageDiv.className = `form-message ${type}`;
    messageDiv.innerHTML = message;
    submitBtn.parentNode.insertBefore(messageDiv, submitBtn.nextSibling);

    if (type === 'success') {
        setTimeout(() => {
            messageDiv.classList.add('fade-out');
            setTimeout(removeFormMessage, 300);
        }, 10000);
    }
}

function removeFormMessage() {
    const existing = document.getElementById('form-message');
    if (existing) existing.remove();
}

// ==================== MODAL SYSTEM ====================
function initializeModals() {
    console.log('Modal system initializing...');
    const videoModal = document.getElementById('videoModal');
    const githubModal = document.getElementById('githubModal');
    const apiDocsModal = document.getElementById('apiDocsModal');
    const liveDemoModal = document.getElementById('liveDemoModal');
    const pdfModal = document.getElementById('pdfModal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const projectVideo = document.getElementById('projectVideo');

    let currentProjectId = null;
    let pdfDoc = null;
    let pageNum = 1;
    let pageRendering = false;
    let pageNumPending = null;
    let scale = 1.2;
    const canvas = document.getElementById('pdfCanvas');
    const ctx = canvas ? canvas.getContext('2d') : null;

    // Helper to open modal
    function openModal(modal) {
        if (!modal) {
            console.error('Modal element not found');
            return;
        }
        console.log('Opening modal:', modal.id);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => modal.classList.add('active'), 10);
    }

    function closeAllModals() {
        console.log('Closing all modals');
        [videoModal, githubModal, apiDocsModal, liveDemoModal, pdfModal].forEach(modal => {
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => { modal.style.display = 'none'; }, 300);
            }
        });
        document.body.style.overflow = 'auto';
        if (projectVideo) projectVideo.pause();
        if (pdfDoc) {
            pdfDoc.destroy();
            pdfDoc = null;
        }
    }

    // PDF functions
    function renderPage(num) {
        if (!pdfDoc || pageRendering || !ctx) return;
        pageRendering = true;
        const loadingEl = document.getElementById('pdfLoading');
        const errorEl = document.getElementById('pdfError');
        if (loadingEl) loadingEl.style.display = 'flex';
        if (errorEl) errorEl.style.display = 'none';

        pdfDoc.getPage(num).then(page => {
            const viewport = page.getViewport({ scale });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = { canvasContext: ctx, viewport };
            page.render(renderContext).promise.then(() => {
                pageRendering = false;
                if (loadingEl) loadingEl.style.display = 'none';
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
                document.getElementById('pdfPageNum').textContent = num;
            });
        }).catch(() => {
            if (loadingEl) loadingEl.style.display = 'none';
            if (errorEl) errorEl.style.display = 'flex';
        });
        document.getElementById('pdfPageCount').textContent = pdfDoc.numPages;
    }

    function queueRenderPage(num) {
        if (pageRendering) pageNumPending = num;
        else renderPage(num);
    }

    // PDF controls
    if (pdfModal) {
        document.getElementById('pdfPrev')?.addEventListener('click', () => {
            if (pageNum <= 1) return;
            pageNum--;
            queueRenderPage(pageNum);
        });
        document.getElementById('pdfNext')?.addEventListener('click', () => {
            if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
            pageNum++;
            queueRenderPage(pageNum);
        });
        document.getElementById('pdfZoomIn')?.addEventListener('click', () => {
            scale += 0.2;
            queueRenderPage(pageNum);
        });
        document.getElementById('pdfZoomOut')?.addEventListener('click', () => {
            if (scale > 0.4) {
                scale -= 0.2;
                queueRenderPage(pageNum);
            }
        });
    }

    // GitHub Modal
    document.querySelectorAll('.open-github-modal').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log('GitHub button clicked');
            showLoader();
            currentProjectId = btn.dataset.project;
            const project = projectData[currentProjectId];
            if (!project) {
                console.error('Project not found:', currentProjectId);
                hideLoader();
                return;
            }
            document.getElementById('githubModalTitle').textContent = project.title + ' Repository';
            document.getElementById('repoName').textContent = project.repoName;
            document.getElementById('repoDescription').textContent = project.repoDescription;
            const techContainer = document.getElementById('repoTechTags');
            techContainer.innerHTML = '';
            project.techTags.forEach(tag => {
                const span = document.createElement('span');
                span.textContent = tag;
                techContainer.appendChild(span);
            });
            const githubLink = document.getElementById('githubRepoLink');
            githubLink.href = project.githubUrl;
            githubLink.innerHTML = '<i class="fab fa-github"></i> Open in GitHub';
            openModal(githubModal);
            setTimeout(hideLoader, 500);
        });
    });

    // Video Modal
    document.querySelectorAll('.open-video-modal').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log('Video button clicked');
            showLoader();
            currentProjectId = btn.dataset.project;
            const project = projectData[currentProjectId];
            if (!project || !project.videoUrl) {
                console.error('Video not found for project:', currentProjectId);
                hideLoader();
                return;
            }
            document.getElementById('videoModalTitle').textContent = project.title + ' Demo';
            const videoSource = projectVideo.querySelector('source');
            videoSource.src = project.videoUrl;
            projectVideo.load();
            const downloadLink = document.getElementById('downloadVideoLink');
            if (downloadLink) {
                downloadLink.href = project.videoUrl;
                downloadLink.download = project.title.replace(/\s+/g, '-') + '-demo.mp4';
            }
            openModal(videoModal);
            setTimeout(hideLoader, 500);
        });
    });

    // API Docs Modal
    document.querySelectorAll('.open-api-docs-modal').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log('API Docs button clicked');
            currentProjectId = btn.dataset.project;
            const project = projectData[currentProjectId];
            if (!project || !project.apiDocs) {
                console.error('API Docs not found for project:', currentProjectId);
                return;
            }
            document.getElementById('apiDocsTitle').textContent = project.apiDocs.title;
            document.getElementById('apiDocsInfo').innerHTML = `<h4>Description</h4><p>${project.apiDocs.description}</p>`;
            const endpointsList = document.getElementById('apiEndpointsList');
            endpointsList.innerHTML = '';
            project.apiDocs.endpoints.forEach(endpoint => {
                const div = document.createElement('div');
                div.className = 'api-endpoint';
                div.innerHTML = `<span class="api-method ${endpoint.method.toLowerCase()}">${endpoint.method}</span><span class="api-path">${endpoint.path}</span><span class="api-description">${endpoint.description}</span>`;
                endpointsList.appendChild(div);
            });
            const postmanLink = document.getElementById('apiPostmanLink');
            if (project.apiDocs.postmanCollection) {
                postmanLink.href = project.apiDocs.postmanCollection;
                postmanLink.style.display = 'inline-flex';
            } else {
                postmanLink.style.display = 'none';
            }
            openModal(apiDocsModal);
        });
    });

    // Live Demo Modal
    document.querySelectorAll('.open-live-demo-modal').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log('Live Demo button clicked');
            showLoader();
            currentProjectId = btn.dataset.project;
            const project = projectData[currentProjectId];
            if (!project || !project.liveDemo) {
                console.error('Live Demo not found for project:', currentProjectId);
                hideLoader();
                return;
            }
            document.getElementById('liveDemoTitle').textContent = project.liveDemo.title;
            document.getElementById('liveDemoInfo').innerHTML = `<h4>About the Demo</h4><p>${project.liveDemo.description}</p>`;
            const screenshot = document.getElementById('demoScreenshot');
            if (screenshot && project.liveDemo.screenshot) screenshot.src = project.liveDemo.screenshot;
            const demoLink = document.getElementById('liveDemoLink');
            if (project.liveDemo.demoUrl) {
                demoLink.href = project.liveDemo.demoUrl;
                demoLink.style.display = 'inline-flex';
            } else {
                demoLink.style.display = 'none';
            }
            openModal(liveDemoModal);
            setTimeout(hideLoader, 500);
        });
    });

    // PDF Modal (certificates) - with error handling
    document.querySelectorAll('.open-pdf-modal').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            console.log('PDF button clicked');
            const pdfPath = btn.dataset.pdf;
            const pdfTitle = btn.dataset.title || btn.querySelector('span')?.textContent || 'Document';
            document.getElementById('pdfModalTitle').textContent = pdfTitle;
            pageNum = 1;
            scale = 1.2;
            const loadingEl = document.getElementById('pdfLoading');
            const errorEl = document.getElementById('pdfError');
            if (loadingEl) loadingEl.style.display = 'flex';
            if (errorEl) errorEl.style.display = 'none';
            if (pdfDoc) pdfDoc.destroy();
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);

            // ** Always open the modal **
            openModal(pdfModal);

            // Check if pdfjsLib exists
            if (typeof pdfjsLib === 'undefined') {
                console.error('pdfjsLib not loaded');
                if (loadingEl) loadingEl.style.display = 'none';
                if (errorEl) {
                    errorEl.style.display = 'flex';
                    errorEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>PDF library failed to load. Please try again later.</p>';
                }
                return;
            }

            // Load PDF
            const loadingTask = pdfjsLib.getDocument(pdfPath.replace('~/', ''));
            loadingTask.promise.then(pdf => {
                pdfDoc = pdf;
                document.getElementById('pdfPageCount').textContent = pdf.numPages;
                renderPage(pageNum);
            }).catch(err => {
                console.error('Error loading PDF:', err);
                if (loadingEl) loadingEl.style.display = 'none';
                if (errorEl) {
                    errorEl.style.display = 'flex';
                    errorEl.innerHTML = '<i class="fas fa-exclamation-triangle"></i><p>Could not load PDF. Check file path.</p>';
                }
            });
        });
    });

    // Close modals
    closeButtons.forEach(btn => btn.addEventListener('click', closeAllModals));
    [videoModal, githubModal, apiDocsModal, liveDemoModal, pdfModal].forEach(modal => {
        if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeAllModals(); });
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllModals(); });

    // Ensure modals start hidden
    [videoModal, githubModal, apiDocsModal, liveDemoModal, pdfModal].forEach(modal => {
        if (modal) modal.style.display = 'none';
    });

    console.log('Modal system initialized');
}

// ==================== INITIALIZE ON DOM CONTENT LOADED ====================
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');
    createGlobalLoader();
    setupContactForm();
    setupCurrentYear();
    setupSmoothScrolling();
    setupAnimations();
    setupFinePrint();
    setupProjectImages();
    window.addEventListener('load', equalizeCardHeights);
    window.addEventListener('resize', equalizeCardHeights);
    initializeModals();

    // Download links loader
    document.querySelectorAll('a[download]').forEach(a => {
        a.addEventListener('click', () => {
            showLoader();
            setTimeout(hideLoader, 1200);
        });
    });
});

// ==================== WINDOW LOAD ====================
window.addEventListener('load', function () {
    console.log('Page fully loaded');
    document.body.classList.add('loaded');
    setupCurrentYear();
});