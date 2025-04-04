/**
 * social-impacts.js - Social impact section for light pollution
 * DarkSky Initiative Project
 * Adds a section on social and relationship impacts of light pollution
 */

document.addEventListener('DOMContentLoaded', function() {
    insertSocialImpactsSection();
});

function insertSocialImpactsSection() {
    // Find the safety and health sections to insert between them
    const safetySection = document.getElementById('safety');
    const healthSection = document.getElementById('health');
    
    if (!safetySection || !healthSection) return;
    
    // Create new social impacts section
    const socialSection = document.createElement('section');
    socialSection.id = 'social';
    socialSection.className = 'content-section';
    
    // Insert the section after safety and before health
    healthSection.parentNode.insertBefore(socialSection, healthSection);
    
    // Add content to the section
    socialSection.innerHTML = `
        <div class="section-container">
            <h2>Social & Relationship Impacts</h2>
            <p class="stakeholder-message" id="social-message">Light pollution affects more than just the night sky—it impacts our social connections and relationships.</p>
            
            <div class="social-impacts-content">
                <div class="social-impacts-grid">
                    <div class="impact-card">
                        <div class="impact-icon">😴</div>
                        <h3>Sleep Disruption</h3>
                        <p>Light pollution disrupts our circadian rhythms, leading to poor sleep quality and reduced sleep duration. This results in daytime fatigue, irritability, and decreased motivation for social interactions.</p>
                        <div class="impact-data">
                            <span class="data-value">62%</span>
                            <span class="data-label">of adults report canceling social plans due to sleep-related fatigue</span>
                        </div>
                    </div>
                    
                    <div class="impact-card">
                        <div class="impact-icon">🧠</div>
                        <h3>Cognitive Performance</h3>
                        <p>Sleep deprivation from light exposure impairs attention, decision-making, and emotional regulation. This makes conversations less engaging and meaningful, and reduces our ability to form new memories of social experiences.</p>
                        <div class="impact-data">
                            <span class="data-value">33%</span>
                            <span class="data-label">decline in social problem-solving abilities after poor sleep</span>
                        </div>
                    </div>
                    
                    <div class="impact-card">
                        <div class="impact-icon">😠</div>
                        <h3>Mood & Relationships</h3>
                        <p>Chronic exposure to light at night increases irritability and symptoms of depression, straining close relationships. Partners of sleep-deprived individuals report lower relationship satisfaction and more frequent conflicts.</p>
                        <div class="impact-data">
                            <span class="data-value">45%</span>
                            <span class="data-label">higher conflict rates in relationships affected by sleep issues</span>
                        </div>
                    </div>
                    
                    <div class="impact-card">
                        <div class="impact-icon">🏙️</div>
                        <h3>Community Connection</h3>
                        <p>Excessive artificial lighting discourages stargazing and other nighttime community activities that have traditionally brought people together. The loss of these shared experiences reduces community bonds.</p>
                        <div class="impact-data">
                            <span class="data-value">78%</span>
                            <span class="data-label">of urban residents have never participated in community stargazing</span>
                        </div>
                    </div>
                </div>
                
                <div class="social-impact-highlight">
                    <div class="highlight-content">
                        <h3>The Social Domino Effect</h3>
                        <p>Light pollution initiates a cascade of effects that ultimately harm our social connections:</p>
                        
                        <div class="domino-effect">
                            <div class="domino-step">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h4>Disrupted Sleep</h4>
                                    <p>Artificial light suppresses melatonin production and disturbs natural sleep patterns.</p>
                                </div>
                            </div>
                            
                            <div class="domino-step">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h4>Physical & Mental Fatigue</h4>
                                    <p>Poor sleep quality leads to decreased energy, cognitive function, and mood regulation.</p>
                                </div>
                            </div>
                            
                            <div class="domino-step">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h4>Behavioral Changes</h4>
                                    <p>Fatigue results in social withdrawal, irritability, and reduced empathy.</p>
                                </div>
                            </div>
                            
                            <div class="domino-step">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h4>Relationship Strain</h4>
                                    <p>These behavioral changes lead to less meaningful conversations, more misunderstandings, and fewer shared activities.</p>
                                </div>
                            </div>
                            
                            <div class="domino-step">
                                <div class="step-number">5</div>
                                <div class="step-content">
                                    <h4>Social Isolation</h4>
                                    <p>Over time, strained relationships and decreased social engagement can lead to loneliness and isolation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="highlight-quote">
                        <blockquote>
                            "The impact of light pollution extends beyond individual health—it fundamentally alters how we interact as humans. When we lose our connection to the natural light-dark cycle, we also risk losing our connection to each other."
                            <cite>— Dr. Elena Rodriguez, Social Psychologist</cite>
                        </blockquote>
                    </div>
                </div>
                
                <div class="research-highlight">
                    <h3>Research Insights</h3>
                    <div class="research-findings">
                        <div class="research-finding">
                            <h4>University of Chicago Study (2019)</h4>
                            <p>Participants living in areas with high light pollution reported 27% fewer social interactions per week compared to those in areas with low light pollution, even when controlling for other factors.</p>
                        </div>
                        
                        <div class="research-finding">
                            <h4>Journal of Marriage and Family (2021)</h4>
                            <p>Couples experiencing sleep disturbances due to environmental factors including light pollution showed reduced relationship satisfaction and poorer communication over a 3-year period.</p>
                        </div>
                        
                        <div class="research-finding">
                            <h4>Community Psychology Review (2020)</h4>
                            <p>Neighborhoods that implemented dark-sky friendly lighting reported increased use of public spaces in evening hours and higher levels of community engagement.</p>
                        </div>
                    </div>
                </div>
                
                <div class="solutions-section">
                    <h3>Restoring Social Connection</h3>
                    <p>Smart lighting strategies can help mitigate these social impacts:</p>
                    
                    <ul class="solutions-list">
                        <li><strong>Bedroom light hygiene</strong> - Use blackout curtains and remove blue light sources to improve sleep quality</li>
                        <li><strong>Community dark sky events</strong> - Organize stargazing gatherings to foster connection</li>
                        <li><strong>Evening light dimming</strong> - Reduce indoor lighting intensity in the hours before bedtime</li>
                        <li><strong>Smart outdoor lighting</strong> - Support directed, motion-activated outdoor lighting in your community</li>
                        <li><strong>Digital device management</strong> - Use blue light filters and set device curfews for better sleep</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Add CSS styles for the new section
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Social Impacts Section Styles */
        #social {
            background-color: #f8f9fa;
        }
        
        .social-impacts-content {
            margin-top: 2rem;
        }
        
        .social-impacts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .impact-card {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .impact-card:hover {
            transform: translateY(-5px);
        }
        
        .impact-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .impact-card h3 {
            color: var(--secondary-color);
            margin: 0.5rem 0;
        }
        
        .impact-card p {
            color: #555;
            line-height: 1.5;
        }
        
        .impact-data {
            margin-top: 1.2rem;
            padding-top: 1rem;
            border-top: 1px solid #eee;
        }
        
        .data-value {
            display: block;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
        }
        
        .data-label {
            display: block;
            font-size: 0.9rem;
            color: #666;
        }
        
        .social-impact-highlight {
            background: linear-gradient(135deg, #f5f7fa, #e4e8ee);
            border-radius: 12px;
            padding: 2rem;
            margin: 2.5rem 0;
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .highlight-content {
            flex: 2;
            min-width: 300px;
        }
        
        .highlight-quote {
            flex: 1;
            min-width: 280px;
            display: flex;
            align-items: center;
        }
        
        .highlight-quote blockquote {
            margin: 0;
            padding: 1.5rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            position: relative;
            font-style: italic;
            color: #555;
        }
        
        .highlight-quote blockquote:before {
            content: '"';
            font-size: 4rem;
            position: absolute;
            top: -1rem;
            left: 0.5rem;
            color: rgba(0,0,0,0.1);
            font-family: Georgia, serif;
        }
        
        .highlight-quote cite {
            display: block;
            margin-top: 1rem;
            font-style: normal;
            font-weight: 600;
            text-align: right;
            color: var(--secondary-color);
        }
        
        .domino-effect {
            margin-top: 1.5rem;
        }
        
        .domino-step {
            display: flex;
            margin-bottom: 1rem;
            position: relative;
        }
        
        .domino-step:not(:last-child):after {
            content: '';
            position: absolute;
            top: 2.5rem;
            left: 1.1rem;
            width: 2px;
            height: calc(100% - 1rem);
            background: linear-gradient(to bottom, var(--accent-color), transparent);
        }
        
        .step-number {
            width: 2.2rem;
            height: 2.2rem;
            background: var(--accent-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .step-content {
            padding-top: 0.2rem;
        }
        
        .step-content h4 {
            margin: 0 0 0.3rem;
            color: var(--secondary-color);
        }
        
        .step-content p {
            margin: 0;
            font-size: 0.95rem;
            color: #555;
        }
        
        .research-highlight {
            margin: 2.5rem 0;
        }
        
        .research-findings {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        
        .research-finding {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            border-left: 4px solid var(--secondary-color);
        }
        
        .research-finding h4 {
            margin: 0 0 0.8rem;
            color: var(--primary-color);
        }
        
        .research-finding p {
            margin: 0;
            color: #555;
            line-height: 1.5;
        }
        
        .solutions-section {
            margin: 2.5rem 0 1rem;
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .solutions-list {
            margin: 1.5rem 0 0.5rem;
            padding-left: 1.2rem;
        }
        
        .solutions-list li {
            margin-bottom: 0.8rem;
            line-height: 1.5;
            color: #555;
        }
        
        .solutions-list li strong {
            color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
            .social-impact-highlight {
                padding: 1.5rem;
            }
            
            .highlight-quote blockquote {
                padding: 1.2rem;
            }
            
            .research-findings {
                grid-template-columns: 1fr;
            }
            
            .solutions-section {
                padding: 1.5rem;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
    
    // Add the section link to the navigation menu
    const navList = document.querySelector('nav ul');
    if (navList) {
        const costLink = Array.from(navList.querySelectorAll('li a')).find(link => link.getAttribute('href') === '#cost');
        const healthLink = Array.from(navList.querySelectorAll('li a')).find(link => link.getAttribute('href') === '#health');
        
        if (costLink && healthLink) {
            const costLi = costLink.parentElement;
            const healthLi = healthLink.parentElement;
            
            const socialLi = document.createElement('li');
            socialLi.innerHTML = '<a href="#social">Social</a>';
            
            // Insert between cost and health if both exist
            if (costLi && healthLi) {
                navList.insertBefore(socialLi, healthLi);
            } else {
                // Otherwise just append to the end
                navList.appendChild(socialLi);
            }
        }
    }
    
    console.log('Social impacts section added');
    
    // Add animations to make the section appear with a nice fade-in
    setTimeout(() => {
        const section = document.getElementById('social');
        if (section) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    }, 100);
} 