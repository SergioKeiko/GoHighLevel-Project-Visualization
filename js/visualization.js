// Define data structure
const projectData = {
    overview: {
        title: "GoHighLevel Implementation Overview",
        description: "A comprehensive automation solution for your business processes, integrating all sales channels and tools into a unified platform.",
        keyPoints: [
            "Consolidate all sales channels into one system",
            "Automatically capture leads into the CRM",
            "Apply consistent process to leads from various sources",
            "Integrate with tools you already use (Calendly, Zoom)",
            "Replace PandaDoc with built-in proposal system",
            "Enable automated marketing campaigns",
            "Centralize analytics for easier planning"
        ]
    },
    sections: [
        {
            id: 'core_structure',
            title: 'Core System Structure',
            color: '#3b82f6',
            icon: '🏗️',
            subsections: [
                {
                    id: 'sales_pipeline',
                    title: 'Sales Pipeline',
                    content: [
                        "New Leads: Manual entry or automatic import",
                        "Qualified Leads: After initial conversation",
                        "In Progress: Proposal sent, awaiting decision",
                        "Closed: Contract signed or declined"
                    ]
                },
                {
                    id: 'task_automation',
                    title: 'Task Automation',
                    content: [
                        "New lead → Task for initial consultation",
                        "Form filled → Automatic contact creation",
                        "Contract signed → Project preparation task",
                        "Automatic reminders for follow-ups"
                    ]
                },
                {
                    id: 'integrations',
                    title: 'Tool Integrations',
                    content: [
                        "Calendly: Appointment scheduling",
                        "Zoom: Video meetings",
                        "Email services: Marketing campaigns",
                        "Payment processors: Invoice collection"
                    ]
                },
                {
                    id: 'proposal_system',
                    title: 'Proposal & Contract System',
                    content: [
                        "Dynamic templates with auto-population",
                        "Status tracking (Sent, Opened, Signed)",
                        "Digital signatures and approvals",
                        "Full PandaDoc replacement"
                    ]
                }
            ]
        },
        {
            id: 'sales_channels',
            title: 'Sales Channels Integration',
            color: '#10b981',
            icon: '🔄',
            subsections: [
                {
                    id: 'referral_partners',
                    title: 'Referral Partnerships',
                    content: [
                        "Separate pipelines for different partners",
                        "Lead source tracking and tagging",
                        "Automated partner reminders",
                        "Performance reporting by partner"
                    ]
                },
                {
                    id: 'networking_events',
                    title: 'Networking Events',
                    content: [
                        "QR code contact collection forms",
                        "Automatic event-based segmentation",
                        "Follow-up email sequences",
                        "Conversion tracking by event"
                    ]
                },
                {
                    id: 'webinars',
                    title: 'Webinars & Training',
                    content: [
                        "Registration landing pages",
                        "Zoom integration for automatic links",
                        "Multi-channel reminders (email, SMS)",
                        "Attendee segmentation and follow-up"
                    ]
                },
                {
                    id: 'professional_assoc',
                    title: 'Professional Associations',
                    content: [
                        "Association-specific pipelines",
                        "Automated proposal generation",
                        "Partner performance analytics",
                        "Custom workflows by association"
                    ]
                }
            ]
        },
        {
            id: 'marketing_automation',
            title: 'Marketing Automation',
            color: '#f59e0b',
            icon: '📊',
            subsections: [
                {
                    id: 'email_campaigns',
                    title: 'Email Marketing',
                    content: [
                        "Audience segmentation and targeting",
                        "Multi-step automated sequences",
                        "Personalization via tags and fields",
                        "Performance tracking and optimization"
                    ]
                },
                {
                    id: 'linkedin_integration',
                    title: 'LinkedIn Integration',
                    content: [
                        "Contact import via Zapier",
                        "Audience synchronization",
                        "Campaign coordination",
                        "Lead tracking from social to CRM"
                    ]
                },
                {
                    id: 'lead_nurturing',
                    title: 'Lead Nurturing',
                    content: [
                        "Welcome sequences for new leads",
                        "Re-engagement campaigns",
                        "Behavior-based workflow triggers",
                        "Content delivery based on interests"
                    ]
                },
                {
                    id: 'analytics',
                    title: 'Campaign Analytics',
                    content: [
                        "Open, click, and conversion tracking",
                        "Channel performance comparison",
                        "ROI calculation by campaign",
                        "Audience engagement metrics"
                    ]
                }
            ]
        },
        {
            id: 'growth_plan',
            title: 'Future Growth Plan',
            color: '#6366f1',
            icon: '📈',
            subsections: [
                {
                    id: 'project_management',
                    title: 'Project Management Integration',
                    content: [
                        "Integration with Asana, ClickUp, etc.",
                        "Automatic task creation from CRM stages",
                        "Project progress tracking",
                        "Client dashboard for visibility"
                    ]
                },
                {
                    id: 'scaling',
                    title: 'Scaling Solutions',
                    content: [
                        "Team member access and permissions",
                        "Workflow templates for new channels",
                        "Automated onboarding for new clients",
                        "Process documentation and SOPs"
                    ]
                },
                {
                    id: 'cost_efficiency',
                    title: 'Cost & Efficiency',
                    content: [
                        "Standard Plan ($97/month)",
                        "Consolidation of multiple tools",
                        "Reduced manual work through automation",
                        "Improved conversion through consistency"
                    ]
                },
                {
                    id: 'implementation',
                    title: 'Implementation Steps',
                    content: [
                        "Set up CRM pipeline structure",
                        "Create proposal and contract templates",
                        "Configure integrations (Calendly, Zoom)",
                        "Develop email marketing sequences"
                    ]
                }
            ]
        }
    ]
};

// Global state variables
let activeSection = 'overview';
let activeSubsection = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Render initial overview
    renderOverview();
    
    // Setup section buttons
    renderSectionButtons();
    
    // Setup event listeners
    setupEventListeners();
});

// Render overview section
function renderOverview() {
    const overviewContent = document.getElementById('overview-content');
    const sectionContent = document.getElementById('section-content');
    
    // Show overview, hide section content
    overviewContent.classList.remove('hidden');
    sectionContent.classList.add('hidden');
    
    // Populate overview content
    overviewContent.innerHTML = `
        <h2 class="text-xl font-bold mb-3">${projectData.overview.title}</h2>
        <p class="text-gray-600 mb-6">${projectData.overview.description}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            ${projectData.overview.keyPoints.map(point => `
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-start">
                    <span class="text-blue-500 font-bold mr-2">•</span>
                    <span>${point}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Render section buttons
function renderSectionButtons() {
    const sectionButtonsContainer = document.getElementById('section-buttons');
    
    projectData.sections.forEach(section => {
        const button = document.createElement('div');
        button.className = 'section-button w-full text-left p-3 rounded-md mb-2 flex items-center hover:bg-gray-100';
        button.dataset.section = section.id;
        button.innerHTML = `
            <span class="mr-2">${section.icon}</span>
            <span class="font-medium">${section.title}</span>
        `;
        button.style.borderLeft = `4px solid ${section.color}`;
        
        sectionButtonsContainer.appendChild(button);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Overview button click
    document.getElementById('overview-btn').addEventListener('click', function() {
        setActiveSection('overview');
    });
    
    // Section button clicks
    document.querySelectorAll('.section-button').forEach(button => {
        button.addEventListener('click', function() {
            setActiveSection(this.dataset.section);
        });
    });
}

// Set active section
function setActiveSection(sectionId) {
    activeSection = sectionId;
    activeSubsection = null;
    
    // Update UI
    if (sectionId === 'overview') {
        renderOverview();
        
        // Update active button
        document.getElementById('overview-btn').classList.add('bg-blue-100', 'text-blue-700');
        document.querySelectorAll('.section-button').forEach(btn => {
            btn.classList.remove('bg-blue-100', 'text-blue-700');
        });
    } else {
        // Update active button
        document.getElementById('overview-btn').classList.remove('bg-blue-100', 'text-blue-700');
        document.querySelectorAll('.section-button').forEach(btn => {
            if (btn.dataset.section === sectionId) {
                btn.classList.add('bg-blue-100', 'text-blue-700');
            } else {
                btn.classList.remove('bg-blue-100', 'text-blue-700');
            }
        });
        
        // Render section content
        renderSectionContent(sectionId);
    }
}

// Render section content
function renderSectionContent(sectionId) {
    const overviewContent = document.getElementById('overview-content');
    const sectionContent = document.getElementById('section-content');
    const subsectionButtons = document.getElementById('subsection-buttons');
    const subsectionContent = document.getElementById('subsection-content');
    const sectionTitle = document.getElementById('section-title');
    
    // Get section data
    const section = projectData.sections.find(s => s.id === sectionId);
    if (!section) return;
    
    // Show section content, hide overview
    overviewContent.classList.add('hidden');
    sectionContent.classList.remove('hidden');
    subsectionContent.classList.add('hidden');
    
    // Set section title
    sectionTitle.textContent = section.title;
    
    // Clear and render subsection buttons
    subsectionButtons.innerHTML = '';
    section.subsections.forEach(subsection => {
        const button = document.createElement('button');
        button.className = 'subsection-button p-4 rounded-lg shadow-sm transition-all bg-gray-50 hover:bg-gray-100';
        button.dataset.subsection = subsection.id;
        button.innerHTML = `
            <h3 class="font-bold text-lg">${subsection.title}</h3>
            <p class="text-gray-500 text-sm mt-1">Click to view details</p>
        `;
        
        button.addEventListener('click', function() {
            setActiveSubsection(subsection.id);
        });
        
        subsectionButtons.appendChild(button);
    });
}

// Set active subsection
function setActiveSubsection(subsectionId) {
    activeSubsection = subsectionId;
    
    // Update UI
    document.querySelectorAll('.subsection-button').forEach(btn => {
        if (btn.dataset.subsection === subsectionId) {
            btn.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50');
            btn.classList.remove('bg-gray-50', 'hover:bg-gray-100');
        } else {
            btn.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50');
            btn.classList.add('bg-gray-50', 'hover:bg-gray-100');
        }
    });
    
    // Render subsection content
    renderSubsectionContent(subsectionId);
}

// Render subsection content
function renderSubsectionContent(subsectionId) {
    const subsectionContent = document.getElementById('subsection-content');
    const section = projectData.sections.find(s => s.id === activeSection);
    
    if (!section) return;
    
    const subsection = section.subsections.find(sub => sub.id === subsectionId);
    if (!subsection) return;
    
    // Build content HTML
    let contentHTML = `
        <h3 class="text-xl font-bold mb-4">${subsection.title}</h3>
        <ul class="space-y-2">
    `;
    
    subsection.content.forEach(item => {
        contentHTML += `
            <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span>${item}</span>
            </li>
        `;
    });
    
    contentHTML += '</ul>';
    
    // Update and show content
    subsectionContent.innerHTML = contentHTML;
    subsectionContent.classList.remove('hidden');
    subsectionContent.classList.add('fade-in');
}
