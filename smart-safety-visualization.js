
document.addEventListener('DOMContentLoaded', function() {
  
    setTimeout(initializeSafetyVisualization, 200);
});

function initializeSafetyVisualization() {
  
    const safetySection = document.getElementById('safety');
    if (!safetySection) return;
    
   
    const comparisonContainer = safetySection.querySelector('.comparison-container');
    if (!comparisonContainer) return;
    

    const urbanLightingContainer = document.createElement('div');
    urbanLightingContainer.className = 'urban-lighting-scenario';
    
   
    comparisonContainer.parentNode.replaceChild(urbanLightingContainer, comparisonContainer);
    
    
    urbanLightingContainer.innerHTML = `
        <div class="lighting-scenario-container">
            <h3>Urban Lighting Scenarios</h3>
            <p class="scenario-intro">Explore how different lighting approaches impact safety, energy use, and the environment.</p>
            
            <div class="scenario-viewer">
                <div class="scenario-image-container">
                    <div class="single-scene-container" id="lighting-scene">
                        <!-- We'll use CSS to change the brightness of a single street scene -->
                    </div>
                    
                    <div class="scenario-labels">
                        <div class="scenario-label" id="no-light-label">No Lighting</div>
                        <div class="scenario-label" id="moderate-light-label">Smart Lighting</div>
                        <div class="scenario-label" id="excessive-light-label">Light Pollution</div>
                    </div>
                </div>
                
                <div class="scenario-slider-container">
                    <input type="range" min="0" max="2" step="1" value="1" class="scenario-slider" id="lighting-level-slider">
                    <div class="slider-markers">
                        <span class="slider-marker">No Lighting</span>
                        <span class="slider-marker">Smart Lighting</span>
                        <span class="slider-marker">Light Pollution</span>
                    </div>
                </div>
            </div>
            
            <div class="scenario-details">
                <div class="scenario-panel" id="no-light-panel">
                    <h3>No Lighting Scenario</h3>
                    <div class="impact-categories">
                        <div class="impact-category negative">
                            <h4>Safety Concerns</h4>
                            <ul>
                                <li><strong>30-50% increase</strong> in nighttime crime rates in unlit areas</li>
                                <li><strong>2.7x higher</strong> risk of pedestrian accidents and falls</li>
                                <li><strong>Reduced visibility</strong> creates dangerous conditions for all road users</li>
                                <li><strong>Emergency response challenges</strong> in completely dark areas</li>
                            </ul>
                        </div>
                        <div class="impact-category positive">
                            <h4>Environmental Benefits</h4>
                            <ul>
                                <li><strong>Zero light pollution</strong> preserves natural night sky</li>
                                <li><strong>No disruption</strong> to nocturnal wildlife patterns and behaviors</li>
                                <li><strong>100% energy savings</strong> compared to lit environments</li>
                                <li><strong>Full astronomical visibility</strong> for observing stars and celestial events</li>
                            </ul>
                        </div>
                        <div class="impact-quote">
                            <p>"While complete darkness preserves the natural night environment, it creates significant safety and accessibility challenges in urban areas that cannot be overlooked."</p>
                            <span class="quote-source">— International Dark-Sky Association</span>
                        </div>
                    </div>
                </div>
                
                <div class="scenario-panel active" id="moderate-light-panel">
                    <h3>Smart Lighting Solution</h3>
                    <div class="impact-categories">
                        <div class="impact-category positive">
                            <h4>Balanced Advantages</h4>
                            <ul>
                                <li><strong>50-80% energy savings</strong> compared to conventional lighting</li>
                                <li><strong>65-75% improvement</strong> in visibility with reduced glare</li>
                                <li><strong>87% reduction</strong> in upward light emissions with fully shielded fixtures</li>
                                <li><strong>Maintains safety standards</strong> while minimizing environmental impact</li>
                                <li><strong>Preserves nighttime darkness</strong> for better sleep and health</li>
                            </ul>
                        </div>
                        <div class="impact-category highlighted">
                            <h4>Smart Technology Integration</h4>
                            <ul>
                                <li><strong>Motion sensors</strong> activate lighting only when needed</li>
                                <li><strong>Warm color temperatures</strong> (2700K-3000K) reduce blue light emissions</li>
                                <li><strong>Directional lighting</strong> focuses illumination on target areas only</li>
                                <li><strong>Dimming capabilities</strong> adjust brightness based on time and conditions</li>
                                <li><strong>Connected systems</strong> enable remote monitoring and adaptive control</li>
                            </ul>
                        </div>
                        <div class="impact-quote">
                            <p>"Smart lighting represents the ideal balance between human needs and environmental preservation, proving we can have safe, functional cities without sacrificing our night sky."</p>
                            <span class="quote-source">— Lighting Research Center</span>
                        </div>
                    </div>
                </div>
                
                <div class="scenario-panel" id="excessive-light-panel">
                    <h3>Light Pollution Issues</h3>
                    <div class="impact-categories">
                        <div class="impact-category negative">
                            <h4>Environmental Impact</h4>
                            <ul>
                                <li><strong>100% skyglow</strong> obliterates visibility of stars and natural night sky</li>
                                <li><strong>Disrupts migration patterns</strong> for birds and other wildlife</li>
                                <li><strong>Alters predator-prey relationships</strong> in urban and suburban ecosystems</li>
                                <li><strong>Affects plant growth cycles</strong> and pollination patterns</li>
                            </ul>
                        </div>
                        <div class="impact-category negative">
                            <h4>Health & Economic Costs</h4>
                            <ul>
                                <li><strong>$3.3 billion wasted annually</strong> on unnecessary outdoor lighting in US</li>
                                <li><strong>Disrupts human circadian rhythms</strong> affecting sleep quality and hormones</li>
                                <li><strong>Increased energy consumption</strong> contributes to carbon emissions</li>
                                <li><strong>Light trespass</strong> causes neighborhood conflicts and reduces property values</li>
                                <li><strong>Excessive glare</strong> actually reduces safety by creating visibility challenges</li>
                            </ul>
                        </div>
                        <div class="impact-quote">
                            <p>"Excessive lighting doesn't automatically create safer environments. In fact, poorly designed lighting often creates more problems than it solves, both for human health and ecosystem balance."</p>
                            <span class="quote-source">— American Medical Association</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
  
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Urban Lighting Scenario Styles */
        .urban-lighting-scenario {
            margin: 2rem 0;
        }
        
        .lighting-scenario-container {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .lighting-scenario-container h3 {
            color: var(--primary-color);
            margin-top: 0;
            margin-bottom: 1rem;
        }
        
        .scenario-intro {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            color: #555;
        }
        
        .scenario-viewer {
            margin-bottom: 2rem;
        }
        
        .scenario-image-container {
            position: relative;
            width: 100%;
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            margin-bottom: 1.5rem;
        }
        
        .single-scene-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1600');
            background-size: cover;
            background-position: center;
            transition: filter 0.8s ease;
        }
        
        /* Different lighting states */
        .lighting-level-0 {
            /* Very dark city with minimal lights for "No Lighting" */
            filter: brightness(0.3) saturate(0.4) contrast(1.1);
        }
        
        .lighting-level-1 {
            /* Moderately lit city for "Smart Lighting" */
            filter: brightness(0.5) saturate(0.7);
        }
        
        .lighting-level-2 {
            /* Original Tokyo night scene - unaltered for "Light Pollution" */
            filter: brightness(1.0) saturate(1.0);
        }
        
        .scenario-labels {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
            z-index: 10;
        }
        
        .scenario-label {
            color: white;
            font-weight: 600;
            font-size: 1.2rem;
            text-shadow: 0 1px 3px rgba(0,0,0,0.5);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            transform: translateY(10px);
        }
        
        .scenario-label.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        .scenario-slider-container {
            padding: 0 1rem;
        }
        
        .scenario-slider {
            width: 100%;
            height: 6px;
            background: #e9ecef;
            -webkit-appearance: none;
            border-radius: 3px;
            outline: none;
            margin-bottom: 1rem;
        }
        
        .scenario-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            background: var(--primary-color);
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        #excessive-light-label .scenario-slider::-moz-range-thumb {
            margin-right: 50px;
        }
        
        .scenario-slider::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: var(--primary-color);
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .slider-markers {
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
        }
        
        .slider-marker {
            font-size: 0.9rem;
            color: #555;
            position: relative;
            text-align: center;
            width: 33.33%;
        }
        
        .slider-marker::before {
            content: '';
            position: absolute;
            top: -15px;
            left: 50%;
            width: 2px;
            height: 10px;
            background: #ccc;
            transform: translateX(-50%);
        }
        
        .scenario-details {
            margin-top: 2rem;
            border-top: 1px solid #eee;
            padding-top: 2rem;
        }
        
        .scenario-panel {
            display: none;
        }
        
        .scenario-panel.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        
        .impact-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .impact-category {
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        
        .impact-category h4 {
            margin-top: 0;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .impact-category ul {
            margin: 0;
            padding-left: 1.5rem;
        }
        
        .impact-category li {
            margin-bottom: 0.8rem;
            line-height: 1.4;
        }
        
        .impact-category li:last-child {
            margin-bottom: 0;
        }
        
        .impact-category.positive {
            background: linear-gradient(135deg, #f1f9f1, #e8f5e9);
            border-left: 4px solid #27ae60;
        }
        
        .impact-category.negative {
            background: linear-gradient(135deg, #fdf1f0, #fee8e7);
            border-left: 4px solid #e74c3c;
        }
        
        .impact-category.highlighted {
            background: linear-gradient(135deg, #e1f5fe, #b3e5fc);
            border-left: 4px solid #03a9f4;
        }
        
        .impact-quote {
            grid-column: 1 / -1;
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 10px;
            border-left: 4px solid #7f8c8d;
            font-style: italic;
            margin-top: 1rem;
        }
        
        .impact-quote p {
            margin: 0 0 0.5rem;
            font-size: 1.1rem;
            line-height: 1.5;
        }
        
        .quote-source {
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
            .lighting-scenario-container {
                padding: 1.5rem;
            }
            
            .scenario-image-container {
                height: 300px;
            }
            
            .impact-categories {
                grid-template-columns: 1fr;
            }
            
            .scenario-label {
                font-size: 1rem;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
    
    
    initializeLightingScenarios();
}

function initializeLightingScenarios() {
    const slider = document.getElementById('lighting-level-slider');
    if (!slider) return;
    
    const lightingScene = document.getElementById('lighting-scene');
    
    const noLightLabel = document.getElementById('no-light-label');
    const moderateLightLabel = document.getElementById('moderate-light-label');
    const excessiveLightLabel = document.getElementById('excessive-light-label');
    
    const noLightPanel = document.getElementById('no-light-panel');
    const moderateLightPanel = document.getElementById('moderate-light-panel');
    const excessiveLightPanel = document.getElementById('excessive-light-panel');
    
    if (lightingScene) {
        const img = new Image();
        img.onload = function() {
            console.log("Background image loaded successfully");
        };
        img.onerror = function() {
            console.log("Background image failed to load, using fallback");
            lightingScene.style.backgroundImage = "url('https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg?auto=compress&cs=tinysrgb&w=1600')";
        };
        
        const style = getComputedStyle(lightingScene);
        const urlMatch = style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
            img.src = urlMatch[1];
        }
    }
    

    updateScenario(1);
    
  
    slider.addEventListener('input', function() {
        const value = parseInt(this.value);
        updateScenario(value);
    });
    

    slider.addEventListener('change', function() {
        const value = parseInt(this.value);
        const scenarioNames = ['No Lighting', 'Smart Lighting', 'Light Pollution'];
        
       
        if (typeof trackEvent === 'function') {
            trackEvent('lighting_scenario_selected', { 
                scenario: scenarioNames[value],
                sliderValue: value 
            });
        }
    });
    
    function updateScenario(value) {
        console.log("Updating scenario to value:", value);
       
        if (lightingScene) {
            lightingScene.classList.remove('lighting-level-0', 'lighting-level-1', 'lighting-level-2');
            lightingScene.classList.add(`lighting-level-${value}`);
        }
        
        
        [noLightLabel, moderateLightLabel, excessiveLightLabel].forEach(label => {
            if (label) label.classList.remove('active');
        });
        
        if (value === 0 && noLightLabel) noLightLabel.classList.add('active');
        if (value === 1 && moderateLightLabel) moderateLightLabel.classList.add('active');
        if (value === 2 && excessiveLightLabel) excessiveLightLabel.classList.add('active');
        
        
        [noLightPanel, moderateLightPanel, excessiveLightPanel].forEach(panel => {
            if (panel) panel.classList.remove('active');
        });
        
        if (value === 0 && noLightPanel) noLightPanel.classList.add('active');
        if (value === 1 && moderateLightPanel) moderateLightPanel.classList.add('active');
        if (value === 2 && excessiveLightPanel) excessiveLightPanel.classList.add('active');
    }
}

function initializeVisualizationTabs() {
    const tabs = document.querySelectorAll('.vis-tab');
    if (!tabs.length) return;
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
         
            document.querySelectorAll('.vis-tab').forEach(t => {
                t.classList.remove('active');
            });
            this.classList.add('active');
            
          
            const tabType = this.getAttribute('data-tab');
            document.querySelectorAll('.vis-panel').forEach(panel => {
                panel.classList.remove('active');
            });
            
            const activePanel = document.getElementById(`${tabType}-panel`);
            if (activePanel) activePanel.classList.add('active');
          
            if (typeof trackEvent === 'function') {
                trackEvent('safety_visualization_tab_changed', { tab: tabType });
            }
        });
    });
}

function initializeComparisonSlider() {
    const slider = document.querySelector('.comparison-slider-control');
    const afterImage = document.querySelector('.comparison-image.after');
    
    if (!slider || !afterImage) return;
    

    updateSliderPosition(50);
    
 
    slider.addEventListener('mousedown', startDragging);
    slider.addEventListener('touchstart', startDragging, { passive: true });
    
    function startDragging(e) {
        e.preventDefault();
        
      
        document.addEventListener('mousemove', moveSlider);
        document.addEventListener('touchmove', moveSlider, { passive: true });
        document.addEventListener('mouseup', stopDragging);
        document.addEventListener('touchend', stopDragging);
    }
    
    function moveSlider(e) {
        let clientX;
        
        
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        } else {
            clientX = e.clientX;
        }
    
        const imageComparison = document.querySelector('.image-comparison');
        const rect = imageComparison.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        
     
        position = Math.min(Math.max(position, 0), 100);
        
        updateSliderPosition(position);
    }
    
    function stopDragging() {
     
        document.removeEventListener('mousemove', moveSlider);
        document.removeEventListener('touchmove', moveSlider);
        document.removeEventListener('mouseup', stopDragging);
        document.removeEventListener('touchend', stopDragging);
        
        
        if (typeof trackEvent === 'function') {
            trackEvent('safety_comparison_slider_used', { position: slider.style.left });
        }
    }
    
    function updateSliderPosition(position) {
       
        slider.style.left = `${position}%`;
        afterImage.style.clipPath = `polygon(${position}% 0, 100% 0, 100% 100%, ${position}% 100%)`;
    }
}

function initializeMapScenarios() {
    const scenarioSelect = document.getElementById('lighting-scenario');
    if (!scenarioSelect) return;
    
    
    const scenarioData = {
        current: {
            energy: '100%',
            pollution: 'High',
            safety: 'Medium'
        },
        minimum: {
            energy: '70%',
            pollution: 'Medium',
            safety: 'Medium'
        },
        recommended: {
            energy: '50%',
            pollution: 'Low',
            safety: 'High'
        },
        optimal: {
            energy: '35%',
            pollution: 'Very Low',
            safety: 'Excellent'
        }
    };
    
   
    updateScenarioMetrics('current');
    
    
    scenarioSelect.addEventListener('change', function() {
        const scenario = this.value;
        updateScenarioMetrics(scenario);
        
        
        if (typeof trackEvent === 'function') {
            trackEvent('safety_map_scenario_changed', { scenario: scenario });
        }
    });
    
  
    document.querySelectorAll('.layer-toggle input').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const layer = this.getAttribute('data-layer');
            
           
            if (typeof trackEvent === 'function') {
                trackEvent('safety_map_layer_toggled', { 
                    layer: layer,
                    state: this.checked ? 'on' : 'off'
                });
            }
        });
    });
    
    function updateScenarioMetrics(scenario) {
        const data = scenarioData[scenario];
        if (!data) return;
        
        document.getElementById('energy-metric').textContent = data.energy;
        document.getElementById('pollution-metric').textContent = data.pollution;
        document.getElementById('safety-metric').textContent = data.safety;
    }
} 