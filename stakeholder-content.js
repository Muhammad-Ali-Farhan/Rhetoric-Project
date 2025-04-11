document.addEventListener('DOMContentLoaded', function() {
    replaceWithModerateUlightingEssay();
});

function replaceWithModerateUlightingEssay() {
  
    const stakeholderSelector = document.querySelector('.stakeholder-selector');
    if (!stakeholderSelector) return;
    
 
    const essayContainer = document.createElement('div');
    essayContainer.className = 'moderate-lighting-essay';
  
    stakeholderSelector.parentNode.replaceChild(essayContainer, stakeholderSelector);
    
    
    essayContainer.innerHTML = `
        <div class="essay-container">
            <h3>Finding Balance: The Case for Moderate Urban Lighting</h3>
            
            <div class="essay-intro">
                <p>In the ongoing debate about light levels in our cities, extremes dominate the conversation. On one end, advocates for completely dark cities cite pristine starry skies and energy savings; on the other, proponents of maximum illumination point to safety concerns and economic vitality. A careful examination reveals that the optimal solution lies not at either extreme, but in the thoughtful middle ground of moderate lighting.</p>
            </div>
            
            <div class="essay-section">
                <h4>The False Dichotomy of Urban Lighting</h4>
                <p>For decades, urban planning has oscillated between two opposing viewpoints: that brighter lighting automatically creates safer cities, or that dark skies must be preserved at all costs. This false dichotomy ignores the nuanced reality that cities are complex ecosystems where multiple priorities must be balanced. The evidence increasingly shows that moderate, strategic lighting provides the benefits of illumination while minimizing its drawbacks.</p>
                
                <p>Studies from the International Dark-Sky Association and urban safety experts reveal that excessive lighting does not necessarily correlate with reduced crime rates. In fact, poorly designed bright lighting can create harsh shadows, increase glare, and actually reduce visibility—the very thing it aims to improve. Conversely, complete darkness presents obvious challenges for navigation, safety, and accessibility.</p>
            </div>
            
            <div class="essay-section">
                <h4>The Safety Paradox</h4>
                <p>The primary argument for intense urban lighting has always been public safety. However, research published in the Journal of Epidemiology and Community Health suggests a more complex relationship. Areas with strategic, moderate lighting showed similar or better safety outcomes compared to over-illuminated neighborhoods. This is partly because excessive lighting creates a false sense of security while potentially enabling certain types of criminal activity through increased visibility and harsh shadows that create hiding spots.</p>
                
                <p>A comprehensive study of crime rates in England and Wales found that when street lighting was dimmed during certain hours, there was no corresponding increase in crime or traffic accidents. This suggests that the quality and strategic placement of lighting matters more than its sheer intensity. Smart, directed lighting at moderate levels covers critical areas like intersections, building entrances, and pedestrian pathways without flooding every corner with unnecessary illumination.</p>
                
                <blockquote class="essay-quote">
                    "The question isn't whether we should have light or darkness, but rather how we can illuminate our cities intelligently to serve human needs while respecting our environment."
                    <span class="quote-attribution">— Dr. Maria Fernandez, Urban Planning Institute</span>
                </blockquote>
            </div>
            
            <div class="essay-section">
                <h4>Environmental and Health Imperatives</h4>
                <p>The environmental case for moderate lighting is compelling. Light pollution from over-illuminated cities affects ecosystems far beyond urban boundaries. Migrating birds become disoriented, sea turtle hatchlings are led away from the ocean, and nocturnal pollinator behaviors are disrupted. These ecological impacts ripple through food webs and biodiversity systems that ultimately affect human well-being.</p>
                
                <p>From a human health perspective, the evidence is equally concerning. Exposure to artificial light at night disrupts our circadian rhythms, suppresses melatonin production, and has been linked to increased risks of obesity, depression, sleep disorders, and certain cancers. A 2018 study in JAMA Internal Medicine found that higher levels of outdoor artificial light at night were associated with impaired sleep quality and greater fatigue among urban residents.</p>
                
                <p>These health concerns particularly affect vulnerable populations like the elderly, children, and shift workers. Moderate lighting strategies can significantly reduce these impacts while maintaining adequate illumination for safety and functionality.</p>
            </div>
            
            <div class="essay-section">
                <h4>Economic Benefits of Moderation</h4>
                <p>The financial case for moderate lighting is straightforward yet often overlooked. U.S. municipalities spend approximately $6 billion annually on street lighting, with significant portions wasted through inefficient fixtures, excessive brightness, and illumination of empty areas during low-traffic hours.</p>
                
                <p>Cities that have implemented smart, moderate lighting strategies report energy savings of 50-80% compared to conventional lighting systems. Chicago's Smart Lighting Program, which replaced over 270,000 lights with directed LED fixtures at moderate brightness levels, is projected to save $100 million in electricity costs over a decade while maintaining safety standards.</p>
                
                <p>These savings extend beyond direct energy costs. Reduced light pollution can increase property values in residential areas where residents value darker skies for sleep quality and star visibility. Tourism opportunities expand in areas where the night sky becomes visible, creating new economic opportunities for astronomical tourism.</p>
            </div>
            
            <div class="essay-section">
                <h4>The Technology-Enabled Middle Path</h4>
                <p>Modern lighting technology has transformed what's possible in urban illumination. LED fixtures with precise directionality, adaptive controls, and variable output levels enable cities to implement nuanced lighting strategies that weren't previously feasible. Smart systems can adjust brightness based on time of day, weather conditions, or real-time usage patterns.</p>
                
                <p>Fully-shielded fixtures direct light downward where it's needed rather than dispersing it horizontally and upward where it contributes to skyglow. Warmer color temperatures (2700-3000K) reduce blue light emissions that are particularly disruptive to circadian rhythms and wildlife. Motion sensors can increase lighting temporarily when pedestrians or vehicles are present, then return to lower levels when not needed.</p>
                
                <p>These technologies allow cities to maintain safety and functionality with significantly less light pollution and energy consumption. Barcelona's smart lighting initiative exemplifies this approach, with sensors that detect presence and adjust lighting intensity accordingly, resulting in 30% energy savings while improving residents' perception of safety.</p>
            </div>
            
            <div class="essay-section">
                <h4>Implementation Strategies</h4>
                <p>Implementing moderate lighting requires thoughtful planning rather than one-size-fits-all solutions. Key strategies include:</p>
                
                <ul class="implementation-list">
                    <li><strong>Contextual design</strong> that adapts lighting to specific neighborhood needs and uses</li>
                    <li><strong>Timing adjustments</strong> that reduce lighting during low-traffic hours</li>
                    <li><strong>Strategic placement</strong> that illuminates critical areas while leaving others darker</li>
                    <li><strong>Quality fixtures</strong> that direct light precisely where needed</li>
                    <li><strong>Appropriate brightness levels</strong> that provide visibility without excessive intensity</li>
                    <li><strong>Warmer color temperatures</strong> that minimize blue light emissions</li>
                    <li><strong>Community engagement</strong> in lighting decisions to balance varied perspectives</li>
                </ul>
                
                <p>Cities like Tucson, Arizona have demonstrated that comprehensive lighting ordinances can dramatically reduce light pollution while maintaining vibrant urban environments. Tucson's approach has protected its world-class astronomical observatories while supporting a growing metropolitan area.</p>
            </div>
            
            <div class="essay-conclusion">
                <h4>The Path Forward</h4>
                <p>The evidence overwhelmingly supports moderate, strategic lighting as the optimal approach for urban environments. This balanced strategy safeguards public safety while protecting environmental systems, public health, economic resources, and cultural connections to the night sky.</p>
                
                <p>As urbanization continues globally, the choices we make about lighting will shape the experience of billions of people and countless ecosystems. By rejecting the extremes of either excessive illumination or complete darkness, we can create urban environments that respect natural systems while meeting human needs.</p>
                
                <p>Moderate lighting isn't a compromise—it's an optimization that delivers better outcomes across multiple dimensions. In this case, the middle path truly is the enlightened one.</p>
            </div>
        </div>
    `;
    
   
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Moderate Lighting Essay Styles */
        .moderate-lighting-essay {
            margin: 2rem 0;
        }
        
        .essay-container {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }
        
        .essay-container h3 {
            color: var(--primary-color);
            margin-top: 0;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
            text-align: center;
        }
        
        .essay-intro p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #444;
            margin-bottom: 2rem;
        }
        
        .essay-section {
            margin-bottom: 2rem;
        }
        
        .essay-section h4 {
            color: var(--secondary-color);
            margin: 1.5rem 0 1rem;
            font-size: 1.4rem;
        }
        
        .essay-section p {
            margin-bottom: 1rem;
            line-height: 1.6;
            color: #333;
        }
        
        .essay-quote {
            margin: 2rem 0;
            padding: 1.5rem;
            background: #f8f9fa;
            border-left: 4px solid var(--accent-color);
            font-style: italic;
            color: #555;
            line-height: 1.6;
        }
        
        .quote-attribution {
            display: block;
            margin-top: 0.8rem;
            font-size: 0.9rem;
            text-align: right;
            color: #666;
        }
        
        .implementation-list {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
        }
        
        .implementation-list li {
            margin-bottom: 0.8rem;
            line-height: 1.5;
        }
        
        .essay-conclusion {
            margin-top: 2.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #eee;
        }
        
        .essay-conclusion h4 {
            color: var(--secondary-color);
            margin: 0 0 1rem;
            font-size: 1.4rem;
        }
        
        .essay-conclusion p {
            line-height: 1.6;
        }
        
        .essay-conclusion p:last-child {
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
            .essay-container {
                padding: 1.5rem;
            }
            
            .essay-container h3 {
                font-size: 1.5rem;
            }
            
            .essay-intro p {
                font-size: 1.1rem;
            }
            
            .essay-section h4 {
                font-size: 1.2rem;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
    
   
    const introMessage = document.getElementById('intro-message');
    if (introMessage) {
        introMessage.textContent = "Finding the right balance of urban lighting is crucial for creating cities that are safe, energy-efficient, and environmentally responsible.";
    }
    
   
    const safetyMessage = document.getElementById('safety-message');
    if (safetyMessage) {
        safetyMessage.textContent = "Strategic lighting placement and design can improve public safety while reducing energy costs and light pollution.";
    }
    
    const healthMessage = document.getElementById('health-message');
    if (healthMessage) {
        healthMessage.textContent = "Moderate lighting strategies protect human health by minimizing circadian rhythm disruption while maintaining necessary illumination.";
    }
    
    console.log('DarkSky Initiative moderate lighting essay loaded');
} 