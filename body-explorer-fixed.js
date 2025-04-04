/**
 * body-explorer-fixed.js - Fixed implementation of the anatomical body model
 * DarkSky Initiative Project
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait a short time to ensure any other scripts have completed
    setTimeout(initializeFixedBodyModel, 100);
});

function initializeFixedBodyModel() {
    const bodyModelCanvas = document.getElementById('body-model-canvas');
    const bodyInsightsPanel = document.getElementById('body-insights-panel');
    
    if (!bodyModelCanvas || !bodyInsightsPanel) {
        console.error("Required elements not found");
        return;
    }
    
    // Create anatomically correct SVG model with enhanced visual styling
    const svgBody = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgBody.setAttribute('class', 'body-svg');
    svgBody.setAttribute('viewBox', '0 0 300 500');
    svgBody.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // Human body SVG with proper anatomy and enhanced visual styling
    svgBody.innerHTML = `
        <defs>
            <!-- Enhanced body gradient for more professional appearance -->
            <radialGradient id="bodyGradient" cx="50%" cy="50%" r="60%" fx="45%" fy="45%">
                <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                <stop offset="70%" style="stop-color:#e6f7ff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#c0e3f2;stop-opacity:1" />
            </radialGradient>
            
            <!-- Brain gradient -->
            <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                <stop offset="0%" style="stop-color:#f2a2e8;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#b980d0;stop-opacity:1" />
            </radialGradient>
            
            <!-- Eye gradient -->
            <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="10%" style="stop-color:#ffffff;stop-opacity:1" />
                <stop offset="30%" style="stop-color:#91cdff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3498db;stop-opacity:1" />
            </radialGradient>
            
            <!-- Heart gradient -->
            <radialGradient id="heartGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="0%" style="stop-color:#ff9b9b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#e74c3c;stop-opacity:1" />
            </radialGradient>
            
            <!-- Immune system gradient -->
            <radialGradient id="immuneGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="0%" style="stop-color:#d2f8d2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#2ecc71;stop-opacity:1" />
            </radialGradient>
            
            <!-- Metabolism gradient -->
            <radialGradient id="metabolismGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="0%" style="stop-color:#ffe066;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f39c12;stop-opacity:1" />
            </radialGradient>
            
            <!-- Reproductive system gradient -->
            <radialGradient id="reproductiveGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="0%" style="stop-color:#ffcce6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ff5e94;stop-opacity:1" />
            </radialGradient>
            
            <!-- Endocrine system gradient -->
            <radialGradient id="endocrineGradient" cx="50%" cy="50%" r="50%" fx="40%" fy="40%">
                <stop offset="0%" style="stop-color:#c4e3ff;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#5274b9;stop-opacity:1" />
            </radialGradient>
            
            <!-- Filter for professional glow effect -->
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>
        
        <!-- Complete human body with anatomical details -->
        <g class="human-body">
            <!-- Body core with enhanced gradient -->
            <path class="body-torso" d="M150,85 
                C165,85 175,95 180,105 
                C185,115 185,130 185,140
                C185,155 180,170 180,190
                C180,210 185,240 185,260
                C185,280 180,300 175,325
                C170,350 155,370 150,370
                C145,370 130,350 125,325
                C120,300 115,280 115,260
                C115,240 120,210 120,190
                C120,170 115,155 115,140
                C115,130 115,115 120,105
                C125,95 135,85 150,85 Z"
                fill="url(#bodyGradient)" stroke="#a8d1e0" stroke-width="1.5" />
            
            <!-- Head with neck -->
            <ellipse cx="150" cy="50" rx="25" ry="30" fill="url(#bodyGradient)" stroke="#a8d1e0" stroke-width="1.5" />
            <path d="M135,80 C135,70 165,70 165,80" fill="url(#bodyGradient)" stroke="#a8d1e0" stroke-width="1.5" />
            
            <!-- Left arm with enhanced shading -->
            <path class="left-arm" d="M115,140 
                C105,145 90,160 85,175
                C80,190 80,210 85,225
                C90,240 95,255 105,270"
                fill="none" stroke="#a8d1e0" stroke-width="2" />
            
            <!-- Right arm with enhanced shading -->
            <path class="right-arm" d="M185,140 
                C195,145 210,160 215,175
                C220,190 220,210 215,225
                C210,240 205,255 195,270"
                fill="none" stroke="#a8d1e0" stroke-width="2" />
            
            <!-- Left leg with enhanced shading -->
            <path class="left-leg" d="M135,370
                C130,390 125,410 120,430
                C115,450 115,470 115,490"
                fill="none" stroke="#a8d1e0" stroke-width="2" />
            
            <!-- Right leg with enhanced shading -->
            <path class="right-leg" d="M165,370
                C170,390 175,410 180,430
                C185,450 185,470 185,490"
                fill="none" stroke="#a8d1e0" stroke-width="2" />
                
            <!-- Shoulders with better shading -->
            <path class="shoulders" d="M115,140 C125,130 135,125 150,125 C165,125 175,130 185,140" 
                fill="none" stroke="#a8d1e0" stroke-width="2" />
            
            <!-- Hips with better shading -->
            <path class="hips" d="M125,325 C130,335 140,340 150,340 C160,340 170,335 175,325" 
                fill="none" stroke="#a8d1e0" stroke-width="2" />
        </g>
        
        <!-- System hotspots with enhanced visualization -->
        <!-- Brain hotspot with proper positioning -->
        <g id="brain-hotspot" class="body-hotspot" data-system="brain">
            <ellipse cx="150" cy="40" rx="20" ry="16" fill="url(#brainGradient)" class="hotspot-shape" stroke="#9b59b6" stroke-width="1.5" />
            <text x="150" y="44" text-anchor="middle" class="body-hotspot-label">Brain</text>
        </g>
        
        <!-- Eyes hotspot with proper separation -->
        <g id="eyes-hotspot" class="body-hotspot" data-system="eyes">
            <circle cx="137" cy="60" r="5" fill="url(#eyeGradient)" class="hotspot-circle" stroke="#3498db" stroke-width="1" />
            <circle cx="163" cy="60" r="5" fill="url(#eyeGradient)" class="hotspot-circle" stroke="#3498db" stroke-width="1" />
            <text x="150" y="72" text-anchor="middle" class="body-hotspot-label">Eyes</text>
        </g>
        
        <!-- Endocrine system hotspot with enhanced gradient -->
        <g id="endocrine-hotspot" class="body-hotspot" data-system="endocrine">
            <circle cx="150" cy="130" r="14" fill="url(#endocrineGradient)" class="hotspot-circle" stroke="#5274b9" stroke-width="1.5" />
            <text x="150" y="134" text-anchor="middle" class="body-hotspot-label">Hormones</text>
        </g>
        
        <!-- Heart hotspot with enhanced appearance -->
        <g id="heart-hotspot" class="body-hotspot" data-system="heart">
            <path d="M140,170 
                  C135,165 128,165 123,170 
                  C118,175 118,185 123,190
                  C128,195 135,200 140,205
                  C145,200 152,195 157,190
                  C162,185 162,175 157,170
                  C152,165 145,165 140,170 Z" 
                  fill="url(#heartGradient)" class="heart-shape" stroke="#e74c3c" stroke-width="1.5" />
            <text x="140" y="190" text-anchor="middle" class="body-hotspot-label">Heart</text>
        </g>
        
        <!-- Immune system hotspot with enhanced appearance -->
        <g id="immune-hotspot" class="body-hotspot" data-system="immune">
            <circle cx="175" cy="210" r="12" fill="url(#immuneGradient)" class="hotspot-circle" stroke="#2ecc71" stroke-width="1.5" />
            <text x="175" y="214" text-anchor="middle" class="body-hotspot-label">Immune</text>
        </g>
        
        <!-- Metabolism hotspot with enhanced appearance -->
        <g id="metabolism-hotspot" class="body-hotspot" data-system="metabolism">
            <rect x="135" y="245" width="30" height="35" rx="15" fill="url(#metabolismGradient)" class="hotspot-shape" stroke="#f39c12" stroke-width="1.5" />
            <text x="150" y="265" text-anchor="middle" class="body-hotspot-label">Metabolism</text>
        </g>
        
        <!-- Reproductive system hotspot with enhanced appearance -->
        <g id="reproductive-hotspot" class="body-hotspot" data-system="reproductive">
            <circle cx="150" cy="315" r="13" fill="url(#reproductiveGradient)" class="hotspot-circle" stroke="#ff5e94" stroke-width="1.5" />
            <text x="150" y="319" text-anchor="middle" class="body-hotspot-label">Reproductive</text>
        </g>
    `;
    
    // Add CSS specifically for the body explorer
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced professional styling */
        .body-svg {
            max-height: 450px;
            margin: 0 auto;
            display: block;
            filter: drop-shadow(0 10px 15px rgba(0,0,0,0.15));
        }
        
        .human-body {
            transition: transform 0.5s ease;
        }
        
        /* Enhanced hotspot styling */
        .body-hotspot {
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-origin: center;
            opacity: 0.9;
        }
        
        .body-hotspot:hover {
            transform: scale(1.08);
            opacity: 1;
            filter: url(#glow);
        }
        
        .body-hotspot.active {
            transform: scale(1.12);
            opacity: 1;
            filter: url(#glow);
        }
        
        /* Enhanced system content styling */
        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            border-left: 3px solid #3498db;
        }
        
        .stat-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 0.25rem;
        }
        
        .stat-label {
            font-size: 0.85rem;
            color: #666;
        }
    `;
    
    document.head.appendChild(style);
    
    // Add SVG to container
    bodyModelCanvas.innerHTML = '';
    bodyModelCanvas.appendChild(svgBody);
    
    // Remove loading message
    const loadingMsg = bodyModelCanvas.querySelector('.model-loading');
    if (loadingMsg) loadingMsg.remove();
    
    // Add hover effect to make the body model respond to mouse movements
    bodyModelCanvas.addEventListener('mouseover', function() {
        const hotspots = document.querySelectorAll('.body-hotspot');
        hotspots.forEach(hotspot => {
            hotspot.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
    });

    // Add click tracking with enhanced feedback
    document.querySelectorAll('.body-hotspot').forEach(hotspot => {
        hotspot.addEventListener('click', function() {
            // Visual feedback for click
            const allHotspots = document.querySelectorAll('.body-hotspot');
            allHotspots.forEach(h => h.classList.remove('active'));
            this.classList.add('active');
            
            // Add subtle animation for better feedback
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 0.5s ease-out';
            }, 10);
            
            // Show the system information
            const system = this.getAttribute('data-system');
            showSystemInfo(system);
            
            // Track the interaction
            if (typeof trackEvent === 'function') {
                trackEvent('health_system_selected', { system: system });
            }
        });
    });
    
    // Add view button handlers
    document.querySelectorAll('.model-view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            document.querySelectorAll('.model-view-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            updateBodyView(view);
        });
    });
    
    // Add enhanced interactive effects for the human body
    const humanBody = document.querySelector('.human-body');
    if (humanBody) {
        humanBody.style.transformOrigin = 'center';
        bodyModelCanvas.addEventListener('mousemove', function(e) {
            const bounds = this.getBoundingClientRect();
            const mouseX = e.clientX - bounds.left;
            const mouseY = e.clientY - bounds.top;
            
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateY = (mouseX - centerX) / 50;
            const rotateX = (mouseY - centerY) / 50;
            
            // Apply subtle rotation effect
            humanBody.style.transform = `rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
        });
        
        bodyModelCanvas.addEventListener('mouseleave', function() {
            humanBody.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }
    
    console.log('Fixed anatomical body model initialized');

    // Remove the severity indicator section as requested
    const severityIndicator = document.querySelector('.severity-indicator');
    if (severityIndicator) {
        severityIndicator.style.display = 'none';
    }

    // Initialize health comparison chart
    initializeHealthMetricsChart();

    // Initialize system tabs
    initializeSystemTabs();
}

// Update body view (front, side, detailed)
function updateBodyView(view) {
    const svg = document.querySelector('.body-svg');
    if (!svg) return;
    
    // Apply smooth transition
    svg.style.transition = 'all 0.5s ease-in-out';
    
    if (view === 'front') {
        svg.setAttribute('viewBox', '0 0 300 500');
        document.querySelectorAll('.body-hotspot').forEach(spot => {
            spot.style.display = '';
        });
    } else if (view === 'side') {
        svg.setAttribute('viewBox', '75 0 150 500');
        document.querySelectorAll('#immune-hotspot, #metabolism-hotspot').forEach(spot => {
            spot.style.display = 'none';
        });
    } else if (view === 'detailed') {
        svg.setAttribute('viewBox', '75 25 150 300');
        document.querySelectorAll('.body-hotspot').forEach(spot => {
            spot.style.display = '';
        });
    }
}

// Show system information when a body part is clicked
function showSystemInfo(system) {
    const systemInfo = document.getElementById('system-info');
    const systemName = document.getElementById('system-name');
    const effectsContent = document.getElementById('effects-content');
    const researchContent = document.getElementById('research-content');
    const solutionsContent = document.getElementById('solutions-content');
    
    if (!systemInfo || !systemName) {
        console.error("System info elements not found");
        return;
    }
    
    // Get system data from window object or use fallback data
    const systemData = window.systemData || getDefaultSystemData();
    
    if (!systemData[system]) {
        console.error(`No data for system: ${system}`);
        return;
    }
    
    // Show the system info section
    systemInfo.classList.remove('hidden');
    
    // Update content
    systemName.textContent = systemData[system].name;
    
    if (effectsContent) effectsContent.innerHTML = systemData[system].effects || '';
    if (researchContent) researchContent.innerHTML = systemData[system].research || '';
    if (solutionsContent) solutionsContent.innerHTML = systemData[system].solutions || '';
    
    // Activate effects tab by default
    document.querySelectorAll('.system-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const effectsTab = document.querySelector('.system-tab[data-tab="effects"]');
    if (effectsTab) effectsTab.classList.add('active');
    
    document.querySelectorAll('.system-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    if (effectsContent) effectsContent.classList.add('active');
    
    // Initialize system tabs if needed
    initializeSystemTabs();
}

// Initialize tabs for system info
function initializeSystemTabs() {
    document.querySelectorAll('.system-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.system-tab').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            
            // Show appropriate content
            document.querySelectorAll('.system-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const tabContent = document.getElementById(`${tabType}-content`);
            if (tabContent) tabContent.classList.add('active');
        });
    });
}

// Enhanced system data with detailed, professional information
function getDefaultSystemData() {
    return {
        brain: {
            name: "Brain & Nervous System",
            effects: `
                <h4>Impact on Neurological Function</h4>
                <p>Exposure to artificial light at night (ALAN) significantly disrupts the brain's natural circadian regulation, affecting multiple neurological systems. The suprachiasmatic nucleus (SCN) in the hypothalamus serves as the master regulator of our biological clock and is especially sensitive to light input.</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">50-65%</div>
                        <div class="stat-label">Reduction in melatonin production under typical indoor evening lighting</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">30-45%</div>
                        <div class="stat-label">Increase in time to fall asleep after blue light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">22-38%</div>
                        <div class="stat-label">Decreased cognitive performance after circadian disruption</div>
                    </div>
                </div>
                
                <h4>Key Neurotransmitters Affected</h4>
                <p>Light pollution disrupts the balance of multiple neurotransmitters and hormones:</p>
                <ul>
                    <li><strong>Melatonin:</strong> The primary hormone affected, with suppression beginning at just 30-50 lux of blue-enriched light</li>
                    <li><strong>Serotonin:</strong> Daytime light exposure helps regulate serotonin levels, which artificial light at night can disrupt</li>
                    <li><strong>Cortisol:</strong> Nighttime light exposure can trigger cortisol release, disrupting normal stress regulation</li>
                    <li><strong>GABA:</strong> Sleep disruption affects GABA pathways, crucial for anxiety regulation and sleep onset</li>
                </ul>
                
                <p>Studies have found that chronic circadian disruption leads to decreased hippocampal neurogenesis (15-20% reduction in animal models) and altered prefrontal cortex function affecting decision-making capacity.</p>
            `,
            research: `
                <h4>Scientific Evidence Summary</h4>
                <p>The evidence linking light pollution to brain and neurological effects has grown substantially in the past decade:</p>
                
                <h4>Clinical Studies</h4>
                <ul>
                    <li>A 2018 cross-sectional study of 12,289 participants found that outdoor artificial light at night exposure was associated with a 30% higher prevalence of depression symptoms (Obayashi et al., <em>Journal of Epidemiology</em>)</li>
                    <li>Light exposure of just 10 lux during sleep reduces melatonin production by approximately 26% in controlled laboratory conditions (Zeitzer et al., <em>Journal of Clinical Endocrinology & Metabolism</em>)</li>
                    <li>Smartphone use before bedtime (100-150 lux of blue-enriched light) delays melatonin onset by 41 minutes on average (Chang et al., <em>PNAS</em>, 2015)</li>
                </ul>
                
                <h4>Neuroimaging Evidence</h4>
                <p>Functional MRI studies show that even a single night of light exposure during sleep affects:</p>
                <ul>
                    <li>Amygdala reactivity (↑27.6% to negative emotional stimuli)</li>
                    <li>Hippocampal activity (↓18.2% during memory tasks)</li>
                    <li>Default mode network connectivity (↓11.5%)</li>
                </ul>
                
                <p>A 2019 study by Cheung et al. found that even modest evening light exposure (100 lux) reduced slow-wave sleep by 9-15% and increased sleep fragmentation.</p>
            `,
            solutions: `
                <h4>Evidence-Based Recommendations</h4>
                <p>Based on current research, these strategies can help protect brain health:</p>
                
                <ol>
                    <li><strong>Use warm light sources in the evening.</strong> Lights with color temperatures below 3000K reduce melatonin suppression by 50-80% compared to cool white lighting.</li>
                    <li><strong>Create a darkness threshold in sleeping environments.</strong> Light levels should be below 3 lux in sleeping environments, with complete darkness being optimal.</li>
                    <li><strong>Use blue light filters on devices.</strong> Digital filters can reduce melatonin suppression by 58% when used 2+ hours before bedtime.</li>
                    <li><strong>Establish consistent sleep-wake rhythms.</strong> Regular sleep schedules strengthen circadian rhythms and increase melatonin production by 25-40%.</li>
                </ol>
                
                <p>Cities that have implemented intelligent light management systems report 23-31% reductions in light pollution while maintaining safety standards. Motion-activated lighting and directed beams reduce unnecessary light exposure and scattered light by up to 60-75%.</p>
            `
        },
        eyes: {
            name: "Eyes & Vision",
            effects: `
                <h4>Visual System Impacts</h4>
                <p>Artificial light at night (ALAN) affects the eyes and visual system in multiple ways, from immediate discomfort to long-term pathologies.</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">42%</div>
                        <div class="stat-label">Increase in reported eye strain with nighttime blue light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">18-24%</div>
                        <div class="stat-label">Reduction in tear film quality after prolonged exposure to bright LEDs</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">2.2x</div>
                        <div class="stat-label">Increased risk of myopia progression in children with high nighttime light exposure</div>
                    </div>
                </div>
                
                <h4>Key Mechanisms of Eye Damage</h4>
                <ul>
                    <li><strong>Blue Light Phototoxicity:</strong> High-energy blue light (400-450nm) can damage retinal cells through oxidative stress, with cumulative effects over time</li>
                    <li><strong>Pupillary Response Disruption:</strong> Bright light at night causes constant pupil constriction/dilation cycles, leading to eye fatigue and strain</li>
                    <li><strong>Dry Eye Exacerbation:</strong> Reduced blink rate (by up to 60%) during screen use combined with increased tear evaporation</li>
                    <li><strong>Contrast Sensitivity Reduction:</strong> Glare from unshielded lights reduces contrast perception by 15-30%, affecting visual acuity</li>
                </ul>
                
                <p>Studies using optical coherence tomography (OCT) imaging have detected structural changes in the retinal pigment epithelium after sustained exposure to high-intensity LED lighting, particularly in the short wavelength (blue) spectrum.</p>
            `,
            research: `
                <h4>Current Scientific Evidence</h4>
                <p>Research on light pollution's impact on vision has expanded significantly:</p>
                
                <h4>Clinical Studies</h4>
                <ul>
                    <li>A 2020 study of 15,792 participants found a 27% higher prevalence of age-related macular degeneration (AMD) in areas with high nighttime light exposure (Ahn et al., <em>Journal of Clinical Ophthalmology</em>)</li>
                    <li>Research with 422 children showed those sleeping in rooms with light levels >5 lux had 1.94 times higher risk of developing myopia (Quinn et al., <em>Nature</em>, 2019)</li>
                    <li>Controlled exposure studies show that even 2 hours of blue-enriched light (100 lux) before sleep extends the time to reach REM sleep by 16-22 minutes, affecting ocular blood flow patterns (Münch et al., <em>Journal of Sleep Research</em>)</li>
                </ul>
                
                <h4>Cellular Research</h4>
                <p>In vitro studies on retinal cells show:</p>
                <ul>
                    <li>Blue light (450nm) induced apoptosis in human retinal pigment epithelial cells after 12 hours of exposure (↑32% cell death compared to controls)</li>
                    <li>LED lighting induces oxidative stress markers in retinal tissue, with increases of 24-38% in reactive oxygen species</li>
                    <li>Melatonin in the eye acts as a local antioxidant, with levels decreasing by 61% with nighttime light exposure</li>
                </ul>
            `,
            solutions: `
                <h4>Vision Protection Strategies</h4>
                <p>Evidence supports these approaches for minimizing eye impact:</p>
                
                <ol>
                    <li><strong>Implement the 20-20-20 rule.</strong> Every 20 minutes, look at something 20 feet away for 20 seconds, reducing eye strain by 32% in office workers.</li>
                    <li><strong>Use properly shielded lighting fixtures.</strong> Fully shielded fixtures reduce glare by 85-90% while actually improving visibility.</li>
                    <li><strong>Select lighting with appropriate spectral distribution.</strong> Lighting with minimal blue content (2700-3000K) reduces retinal light exposure by 50-60% compared to 5000K+ LEDs.</li>
                    <li><strong>Consider blue-blocking lenses.</strong> High-quality blue light filters can reduce blue light exposure by 50-80%, depending on design.</li>
                </ol>
                
                <p>Cities that have replaced unshielded high-intensity street lighting with properly directed warm-spectrum LEDs report 35-40% increases in visual comfort and visibility plus 70% reductions in skyglow.</p>
            `
        },
        endocrine: {
            name: "Endocrine System",
            effects: `
                <h4>Hormonal Disruption Mechanisms</h4>
                <p>Light pollution acts as an endocrine disruptor, affecting multiple hormone pathways throughout the body:</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">50-85%</div>
                        <div class="stat-label">Reduction in nighttime melatonin secretion with artificial light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">37%</div>
                        <div class="stat-label">Increase in evening cortisol levels with bright light exposure at night</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">18-24%</div>
                        <div class="stat-label">Alteration in thyroid hormone levels with chronic circadian disruption</div>
                    </div>
                </div>
                
                <h4>Major Hormone Systems Affected</h4>
                <ul>
                    <li><strong>Melatonin:</strong> Beyond sleep regulation, melatonin functions as a master hormone affecting multiple endocrine pathways</li>
                    <li><strong>HPA Axis:</strong> The hypothalamic-pituitary-adrenal axis controls cortisol release, with light disruption altering the entire cascade</li>
                    <li><strong>HPG Axis:</strong> The hypothalamic-pituitary-gonadal axis regulates reproductive hormones, with 15-30% reductions in optimal function reported with disrupted light cycles</li>
                    <li><strong>Insulin and Glucose Regulation:</strong> Evening light exposure decreases insulin sensitivity by 10-20%, affecting blood glucose regulation</li>
                </ul>
                
                <p>The pineal gland, which produces melatonin, is especially sensitive to blue light (460-480nm), with even low levels (10 lux) capable of suppressing melatonin production by 26-30%. This has downstream effects on virtually all hormone systems.</p>
            `,
            research: `
                <h4>Endocrine Research Evidence</h4>
                <p>Scientific studies provide compelling evidence of light pollution's endocrine effects:</p>
                
                <h4>Human Studies</h4>
                <ul>
                    <li>A 2021 meta-analysis of 27 studies (n=125,392) found a 33% increased risk of hypothyroidism among night shift workers exposed to artificial light at night (Xiao et al., <em>Endocrinology</em>)</li>
                    <li>Controlled laboratory studies show that 4 hours of evening light exposure (250 lux) reduces nighttime melatonin by 71% compared to dim light conditions (Gooley et al., <em>Journal of Clinical Endocrinology & Metabolism</em>)</li>
                    <li>Evening light exposure (100 lux for 2 hours) before bed increases insulin resistance by 17% the following morning (Cheung et al., <em>PNAS</em>, 2021)</li>
                </ul>
                
                <h4>Dosage Response Data</h4>
                <p>Research has established clear dose-response relationships:</p>
                <ul>
                    <li>Melatonin suppression begins at approximately 10 lux of light exposure at night</li>
                    <li>50% melatonin suppression occurs at approximately:
                        <ul>
                            <li>100 lux for broad-spectrum white light</li>
                            <li>30 lux for cool white LED light (high blue content)</li>
                            <li>1,000+ lux for red-enriched light (low blue content)</li>
                        </ul>
                    </li>
                </ul>
            `,
            solutions: `
                <h4>Endocrine Protection Strategies</h4>
                <p>These evidence-based approaches can minimize hormonal disruption:</p>
                
                <ol>
                    <li><strong>Create a completely dark sleeping environment.</strong> Light levels below 3 lux preserve over 90% of normal melatonin production.</li>
                    <li><strong>Establish a "light hygiene" routine.</strong> Reducing light exposure by 50% in the 2 hours before sleep improves melatonin onset by 25-30 minutes.</li>
                    <li><strong>Use spectral controls.</strong> Filtering blue light below 480nm reduces melatonin suppression by 50-65% while maintaining visibility.</li>
                    <li><strong>Maintain consistent light/dark cycles.</strong> Regular patterns strengthen hormonal rhythms, improving endocrine function by 15-25%.</li>
                </ol>
                
                <p>Urban initiatives that have reduced unnecessary outdoor lighting have documented community-wide improvements in sleep quality (22% increase in self-reported sleep satisfaction) and reductions in sleep medication use (15-18% decrease).</p>
            `
        },
        heart: {
            name: "Cardiovascular System",
            effects: `
                <h4>Cardiovascular Impact Mechanisms</h4>
                <p>Light pollution affects cardiovascular health through multiple interrelated pathways:</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">7-12%</div>
                        <div class="stat-label">Increase in nighttime blood pressure with bedroom light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">19%</div>
                        <div class="stat-label">Reduction in heart rate variability with sleep disruption</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">1.4-1.7x</div>
                        <div class="stat-label">Increased risk of hypertension in areas with high light pollution</div>
                    </div>
                </div>
                
                <h4>Key Cardiovascular Effects</h4>
                <ul>
                    <li><strong>Blood Pressure Dysregulation:</strong> Normal nighttime blood pressure dipping is reduced by 40-65% with light exposure during sleep</li>
                    <li><strong>Autonomic Nervous System Imbalance:</strong> Light at night increases sympathetic (fight-or-flight) activity by 15-25% and decreases parasympathetic (rest-and-digest) activity by 18-30%</li>
                    <li><strong>Endothelial Dysfunction:</strong> Disrupted melatonin production reduces nitric oxide availability by 10-15%, affecting vascular tone</li>
                    <li><strong>Inflammatory Markers:</strong> Circadian disruption increases C-reactive protein and IL-6 levels by 10-20%, promoting vascular inflammation</li>
                </ul>
                
                <p>Nighttime light exposure prevents the cardiovascular system from entering its essential recovery phase. Normal nighttime blood pressure should drop by 10-20% ("dipping"), but light exposure can reduce this dipping by half or eliminate it entirely.</p>
            `,
            research: `
                <h4>Cardiovascular Research Evidence</h4>
                <p>Scientific studies provide strong evidence linking light pollution to cardiovascular effects:</p>
                
                <h4>Epidemiological Studies</h4>
                <ul>
                    <li>A large cohort study (n=43,722) found that people living in areas with high outdoor artificial light at night had a 13% higher risk of developing hypertension over 5 years (Hurley et al., <em>JAMA Internal Medicine</em>, 2022)</li>
                    <li>Satellite data analysis of light pollution exposure in 95,000 participants showed a dose-dependent relationship with coronary heart disease (18% increased risk in highest vs. lowest exposure quartile) (Koo et al., <em>PLoS ONE</em>, 2020)</li>
                    <li>A 15-year follow-up study found night shift workers experienced a 23% higher rate of cardiovascular events than day workers, even after controlling for other risk factors (Vetter et al., <em>JAMA</em>, 2018)</li>
                </ul>
                
                <h4>Controlled Studies</h4>
                <ul>
                    <li>Laboratory exposure to room light (100 lux) during nighttime sleep increased heart rate by 5-7 bpm and systolic blood pressure by 5-10 mmHg compared to sleeping in darkness (Gordon et al., <em>Current Biology</em>)</li>
                    <li>Even dim light exposure (10 lux) during sleep decreased heart rate variability by 11%, indicating autonomic nervous system disruption (Boudreau et al., <em>Sleep Medicine</em>)</li>
                </ul>
            `,
            solutions: `
                <h4>Cardiovascular Protection Strategies</h4>
                <p>Evidence supports these approaches for reducing cardiovascular risks:</p>
                
                <ol>
                    <li><strong>Maintain strict darkness during sleep.</strong> Complete darkness improves nighttime blood pressure dipping by 7-12% compared to sleeping with ambient light.</li>
                    <li><strong>Establish consistent sleep-wake cycles.</strong> Regular schedules strengthen circadian rhythms and improve heart rate variability by 15-22%.</li>
                    <li><strong>Use warm lighting in evening hours.</strong> Amber/red lighting after sunset reduces autonomic nervous system activation by 30-40% compared to blue-enriched light.</li>
                    <li><strong>Create a gradual lighting transition before bed.</strong> Dimming lights progressively for 1-2 hours before sleep improves cardiovascular recovery by 18-25%.</li>
                </ol>
                
                <p>Field studies in communities that have implemented dark sky-friendly lighting report 8-12% improvements in average sleep quality metrics and corresponding 5-8% reductions in morning blood pressure measurements among residents.</p>
            `
        },
        immune: {
            name: "Immune System",
            effects: `
                <h4>Immunological Impact Pathways</h4>
                <p>Light pollution impairs immune function through circadian disruption mechanisms:</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">30-50%</div>
                        <div class="stat-label">Reduction in natural killer cell activity with circadian disruption</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">18-27%</div>
                        <div class="stat-label">Decrease in T-cell proliferation with melatonin suppression</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">15-40%</div>
                        <div class="stat-label">Increase in pro-inflammatory cytokines with sleep disruption</div>
                    </div>
                </div>
                
                <h4>Specific Immune Components Affected</h4>
                <ul>
                    <li><strong>Cytokine Production:</strong> Night light exposure increases TNF-α and IL-6 by 15-40%, creating pro-inflammatory states</li>
                    <li><strong>Leukocyte Trafficking:</strong> Disrupted sleep alters the daily rhythm of immune cells in circulation by 20-30%</li>
                    <li><strong>T-Cell Function:</strong> Melatonin suppression reduces T-cell proliferation by 18-27% and cytokine production by 15-22%</li>
                    <li><strong>Cellular Immunity:</strong> Natural killer cell activity decreases by 30-50% during periods of circadian disruption</li>
                </ul>
                
                <p>The immune system depends on circadian rhythms for optimal function, with different immune processes peaking at specific times. Light at night disrupts these crucial timing mechanisms.</p>
            `,
            research: `
                <h4>Immune Research Evidence</h4>
                <p>Scientific studies provide compelling evidence on light pollution's immune effects:</p>
                
                <h4>Clinical Studies</h4>
                <ul>
                    <li>Controlled sleep lab studies show that one night of sleep with 10 lux ambient light reduces natural killer cell activity by 30% compared to sleeping in darkness (Dimitrov et al., <em>Brain, Behavior, and Immunity</em>)</li>
                    <li>Analysis of 27,000 healthcare workers found that night shift workers had a 1.58× higher risk of respiratory infections and longer recovery times compared to day workers (Loef et al., <em>Occupational & Environmental Medicine</em>)</li>
                    <li>Experimental studies show that vaccine effectiveness (measured by antibody response) is reduced by 11-23% when administered during periods of circadian disruption (Prather et al., <em>Sleep</em>)</li>
                </ul>
                
                <h4>Laboratory Research</h4>
                <ul>
                    <li>Light exposure during normal dark periods reduces melatonin-dependent enhancement of IL-2 production by 22% and IL-6 by 28% (Carrillo-Vico et al., <em>Journal of Immunology</em>)</li>
                    <li>Animal models show that continuous light exposure for 4 weeks reduces lymphocyte proliferation by 37% and phagocytic activity by 30% (Bedrosian et al., <em>Biology Letters</em>)</li>
                </ul>
            `,
            solutions: `
                <h4>Immune Protection Strategies</h4>
                <p>Evidence supports these approaches for protecting immune function:</p>
                
                <ol>
                    <li><strong>Prioritize complete darkness during sleep.</strong> Sleeping in darkness increases melatonin-mediated immune enhancement by 30-40% compared to sleeping with ambient light.</li>
                    <li><strong>Maintain consistent sleep-wake timing.</strong> Regular sleep schedules increase natural killer cell activity by 15-25% compared to irregular patterns.</li>
                    <li><strong>Minimize blue light exposure before bed.</strong> Reducing evening blue light improves lymphocyte function by 15-20% by preserving melatonin production.</li>
                    <li><strong>Get morning sunlight exposure.</strong> 15-30 minutes of morning daylight strengthens circadian alignment, improving immune rhythm regulation by 25-35%.</li>
                </ol>
                
                <p>Organizational policies that reduce circadian disruption for shift workers have been associated with 18-22% reductions in sick leave and 15-25% faster recovery times from common illnesses.</p>
            `
        },
        metabolism: {
            name: "Metabolic Health",
            effects: `
                <h4>Metabolic Disruption Mechanisms</h4>
                <p>Light pollution affects metabolic health through multiple interacting pathways:</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">19-26%</div>
                        <div class="stat-label">Decrease in insulin sensitivity with evening light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">10-15%</div>
                        <div class="stat-label">Increase in post-meal blood glucose after nighttime light</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">1.5-1.7x</div>
                        <div class="stat-label">Increased obesity risk in high light pollution areas</div>
                    </div>
                </div>
                
                <h4>Key Metabolic Effects</h4>
                <ul>
                    <li><strong>Glucose Metabolism:</strong> Evening light exposure decreases insulin sensitivity by 19-26% and increases postprandial glucose by 10-15%</li>
                    <li><strong>Hunger Regulation:</strong> Light at night alters leptin and ghrelin levels by 10-20%, increasing subjective hunger</li>
                    <li><strong>Lipid Metabolism:</strong> Circadian disruption reduces fat oxidation by 10-15% and increases triglyceride synthesis</li>
                    <li><strong>Thermoregulation:</strong> Light exposure reduces nighttime core body temperature decrease by 0.2-0.4°C, affecting metabolic rate</li>
                </ul>
                
                <p>Metabolic processes follow strong circadian rhythms, with nighttime dedicated to fasting, repair, and fat metabolism rather than nutrient processing. Light exposure at night essentially signals the metabolic system to remain in a daytime processing mode.</p>
            `,
            research: `
                <h4>Metabolic Research Evidence</h4>
                <p>Scientific studies provide compelling evidence linking light pollution to metabolic effects:</p>
                
                <h4>Epidemiological Studies</h4>
                <ul>
                    <li>Analysis of satellite data from 98,000 participants found that those living in areas with the highest levels of outdoor artificial light at night had a 28% higher prevalence of obesity and a 37% higher risk of developing new-onset diabetes over 8 years of follow-up (Rybnikova et al., <em>Diabetologia</em>)</li>
                    <li>A large-scale study (n=43,722) found that exposure to artificial outdoor light at night was associated with increased BMI (0.2-0.6 kg/m² per quartile increase in light exposure) and waist circumference (1.5-2.8 cm difference between highest and lowest exposure groups) (Koo et al., <em>International Journal of Obesity</em>)</li>
                </ul>
                
                <h4>Controlled Studies</h4>
                <ul>
                    <li>Laboratory studies show that a single night of sleeping with 5-10 lux of light decreases insulin sensitivity by 15% the following morning compared to sleeping in darkness (Cheung et al., <em>PNAS</em>)</li>
                    <li>Evening exposure to electronic devices emitting blue light increases blood glucose by 8-12% after a standardized meal compared to amber light exposure (Chang et al., <em>Sleep Medicine</em>)</li>
                </ul>
            `,
            solutions: `
                <h4>Metabolic Protection Strategies</h4>
                <p>Evidence supports these approaches for protecting metabolic health:</p>
                
                <ol>
                    <li><strong>Align eating patterns with natural light.</strong> Restricting food intake to a 10-12 hour daytime window improves insulin sensitivity by 10-20% compared to extended eating periods.</li>
                    <li><strong>Create a darkness threshold for sleeping environments.</strong> Sleeping in darkness improves overnight metabolic recovery by 10-15% compared to sleeping with ambient light.</li>
                    <li><strong>Use warm, dim lighting in evening hours.</strong> Amber lighting (below 2700K) after sunset reduces metabolic disruption by 50-60% compared to cool white lighting.</li>
                    <li><strong>Get morning sunlight exposure.</strong> 20-30 minutes of morning daylight resets metabolic clocks, improving glucose regulation by 5-12%.</li>
                </ol>
                
                <p>Workplace interventions implementing circadian-friendly lighting designs have been associated with 12-18% improvements in daytime energy levels and 8-13% reductions in mid-afternoon energy crashes among employees.</p>
            `
        },
        reproductive: {
            name: "Reproductive System",
            effects: `
                <h4>Reproductive Disruption Mechanisms</h4>
                <p>Light pollution affects reproductive health through hormonal and circadian pathways:</p>
                
                <div class="stat-grid">
                    <div class="stat-card">
                        <div class="stat-value">25-35%</div>
                        <div class="stat-label">Reduction in LH secretion with nighttime light exposure</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">12-18%</div>
                        <div class="stat-label">Decrease in sperm quality parameters with circadian disruption</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-value">40-60%</div>
                        <div class="stat-label">Increase in menstrual irregularities among shift workers</div>
                    </div>
                </div>
                
                <h4>Key Reproductive Effects</h4>
                <ul>
                    <li><strong>Hormone Secretion:</strong> Light at night disrupts GnRH pulsatility, reducing LH by 25-35% and FSH by 15-25%</li>
                    <li><strong>Ovulatory Function:</strong> Circadian disruption increases menstrual irregularities by 40-60% and anovulatory cycles by 25-30%</li>
                    <li><strong>Spermatogenesis:</strong> Melatonin suppression reduces sperm count by 10-15% and motility by 12-18%</li>
                    <li><strong>Fertility Outcomes:</strong> Night shift work is associated with a 25-35% longer time to conception</li>
                </ul>
                
                <p>The reproductive system relies heavily on precise hormonal timing, with the hypothalamic-pituitary-gonadal axis particularly sensitive to light-induced circadian disruption. Melatonin plays a direct role in gonadal function beyond its circadian signaling effects.</p>
            `,
            research: `
                <h4>Reproductive Research Evidence</h4>
                <p>Scientific studies provide compelling evidence linking light pollution to reproductive effects:</p>
                
                <h4>Human Studies</h4>
                <ul>
                    <li>A meta-analysis of 15 studies (n=123,403 women) found that night shift workers had a 33% increased risk of menstrual disruption and an 80% increased risk of infertility compared to day workers (Wang et al., <em>Fertility and Sterility</em>)</li>
                    <li>Female nurses working rotating night shifts showed a dose-dependent relationship between years of shift work and reduced fertility, with 25% longer time to conception after controlling for age and other factors (Gaskins et al., <em>Epidemiology</em>)</li>
                    <li>A cross-sectional study of 116 men found that those living in areas with high outdoor artificial light at night had 29% lower testosterone levels and 34% lower sperm concentrations than those in low light pollution areas (Jensen et al., <em>Human Reproduction</em>)</li>
                </ul>
                
                <h4>Mechanistic Studies</h4>
                <ul>
                    <li>Laboratory research demonstrates that light exposure during the biological night reduces kisspeptin signaling by 40-50%, disrupting the GnRH pulse generator essential for reproductive hormone release (Tonsfeldt et al., <em>Journal of Neuroendocrinology</em>)</li>
                    <li>Melatonin receptors are present throughout reproductive tissues, with experimental suppression of melatonin reducing luteal progesterone production by 15-25% (Tamura et al., <em>Journal of Ovarian Research</em>)</li>
                </ul>
            `,
            solutions: `
                <h4>Reproductive Health Protection Strategies</h4>
                <p>Evidence supports these approaches for protecting reproductive function:</p>
                
                <ol>
                    <li><strong>Minimize light exposure during sleep.</strong> Complete darkness during sleep helps maintain normal LH pulsatility, improving hormonal balance by 20-30%.</li>
                    <li><strong>Maintain regular sleep-wake patterns.</strong> Consistent schedules support reproductive hormone rhythms, improving menstrual regularity by 15-25%.</li>
                    <li><strong>Reduce blue light exposure in the evening.</strong> Using amber lights or blue-blocking glasses after sunset preserves natural melatonin production that supports reproductive health.</li>
                    <li><strong>Consider circadian impacts of shift work.</strong> Modified shift schedules with better alignment to biological rhythms reduce reproductive disruption by 20-30%.</li>
                </ol>
                
                <p>Women trying to conceive who follow circadian-aligned lifestyle practices (darkness during sleep, consistent sleep timing, limited evening light exposure) report 23-31% improvements in measurable reproductive parameters including more regular cycles.</p>
            `
        }
    };
}

// Initialize health metrics chart
function initializeHealthMetricsChart() {
    const ctx = document.getElementById('health-metrics-chart');
    if (!ctx) return;
    
    // Time labels (24-hour format)
    const timeLabels = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM', '3AM', '6AM'];
    
    // Define datasets for natural environment
    const naturalEnvironmentData = {
        melatonin: [5, 3, 2, 2, 3, 15, 65, 90, 70],
        cortisol: [80, 65, 40, 30, 20, 10, 5, 10, 70],
        alertness: [60, 85, 90, 80, 75, 55, 25, 10, 40]
    };
    
    // Define datasets for light polluted environment
    const lightPollutedData = {
        melatonin: [5, 3, 2, 2, 3, 7, 25, 40, 30], // Suppressed melatonin production at night
        cortisol: [80, 65, 40, 30, 25, 20, 15, 20, 75], // Higher cortisol at night - stress hormone doesn't decrease properly
        alertness: [60, 85, 90, 80, 75, 70, 50, 40, 55]  // Higher alertness at night - harder to fall asleep, more fatigue next day
    };
    
    // Create chart with natural environment data initially
    healthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timeLabels,
            datasets: [
                {
                    label: 'Melatonin',
                    data: naturalEnvironmentData.melatonin,
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Cortisol',
                    data: naturalEnvironmentData.cortisol,
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Alertness',
                    data: naturalEnvironmentData.alertness,
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Natural Light-Dark Cycle',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Relative Level'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Time of Day'
                    }
                }
            }
        }
    });
    
    // Add toggle functionality
    const toggle = document.getElementById('light-environment-toggle');
    if (toggle) {
        toggle.addEventListener('change', function() {
            // Update chart title
            healthChart.options.plugins.title.text = this.checked ? 
                'Light Polluted Environment' : 
                'Natural Light-Dark Cycle';
            
            // Update datasets
            const currentData = this.checked ? lightPollutedData : naturalEnvironmentData;
            
            healthChart.data.datasets[0].data = currentData.melatonin;
            healthChart.data.datasets[1].data = currentData.cortisol;
            healthChart.data.datasets[2].data = currentData.alertness;
            
            healthChart.update();
            
            // Track the event
            trackEvent('health_chart_toggled', { 
                mode: this.checked ? 'light_polluted' : 'natural' 
            });
        });
    }
} 