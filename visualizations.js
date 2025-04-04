/**
 * visualizations.js - Interactive visualizations and charts
 * DarkSky Initiative Project
 * Depends on: core.js
 */

// Initialize comparison slider tool
function initializeComparisonTool() {
    const slider = document.getElementById('comparison-slider');
    const beforeImage = document.querySelector('.before-image');
    const sliderHandle = document.querySelector('.slider-handle');
    
    if (!slider || !beforeImage || !sliderHandle) return;
    
    // Update slider position on input
    slider.addEventListener('input', function() {
        const value = this.value + '%';
        beforeImage.style.width = value;
        sliderHandle.style.left = value;
    });
    
    // Set initial position
    slider.dispatchEvent(new Event('input'));
    
    // Track when user interacts with the slider
    slider.addEventListener('change', function() {
        trackEvent('comparison_slider_used', { 
            value: this.value,
            position: beforeImage.style.width
        });
    });
}

// Render a bar chart with Chart.js
function renderBarChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Render a line chart with Chart.js
function renderLineChart(canvasId, data) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Initialize all charts
function initializeCharts() {
    // This function would call specific chart initializations
    // as they're needed throughout the application
}

// Return sky color based on light pollution level
function getPollutionSkyColor(level) {
    // Bortle scale approximations
    const colors = {
        1: '#000000', // Excellent dark sky
        2: '#0a0a2a', // Truly dark sky
        3: '#0a0a3a', // Rural sky
        4: '#0a0a4a', // Rural/suburban transition
        5: '#0a0a5a', // Suburban sky
        6: '#0a0a6a', // Bright suburban sky
        7: '#0a0a7a', // Suburban/urban transition
        8: '#0a0a8a', // City sky
        9: '#0a0a9a'  // Inner city sky
    };
    
    return colors[level] || '#0a0a5a';
}

// Get Bortle scale description
function getBortleDescription(level) {
    const descriptions = {
        1: "Excellent dark sky",
        2: "Truly dark sky",
        3: "Rural sky",
        4: "Rural/suburban transition",
        5: "Suburban sky",
        6: "Bright suburban sky",
        7: "Suburban/urban transition",
        8: "City sky",
        9: "Inner city sky"
    };
    
    return descriptions[level] || "Suburban sky";
}

// Get detailed Bortle scale description
function getDetailedBortleDescription(level) {
    const descriptions = {
        1: "Excellent truly dark sky - No light pollution. The Milky Way casts shadows. Thousands of stars visible.",
        2: "Typical truly dark sky - Slight light pollution on horizon. Milky Way still impressive. M33 galaxy easily visible.",
        3: "Rural sky - Some light pollution. Milky Way shows complex structure. Some dimming of zodiacal light.",
        4: "Rural/suburban transition - Modest light pollution. Milky Way visible well above horizon only. Zodiacal light rarely seen.",
        5: "Suburban sky - Milky Way washed out at zenith and invisible at horizon. Light pollution evident in most directions.",
        6: "Bright suburban sky - Milky Way only visible with averted vision. Clouds illuminated in directions of light sources.",
        7: "Suburban/urban transition - Milky Way invisible. Entire sky has grayish-white hue. Strong light sources evident in all directions.",
        8: "City sky - Sky glows whitish-gray or orange. Most constellations missing stars. Only the brightest stars visible.",
        9: "Inner city sky - Entire sky brightly lit. Many stars forming constellations invisible. Only a handful of the brightest stars visible."
    };
    
    return descriptions[level] || descriptions[5];
}

// Get location name based on ID
function getLocationName(location) {
    const locations = {
        'wilderness': 'Remote Wilderness',
        'rural': 'Rural Countryside',
        'suburban': 'Suburban Community',
        'urban': 'Urban Downtown',
        'mega-city': 'Major Metropolitan Center'
    };
    
    return locations[location] || 'Suburban Community';
}

// Initialize all visualizations
document.addEventListener('DOMContentLoaded', function() {
    initializeComparisonTool();
    initializeCharts();
    
    console.log('DarkSky Initiative visualizations loaded');
}); 