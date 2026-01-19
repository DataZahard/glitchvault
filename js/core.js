document.addEventListener('DOMContentLoaded', () => {
	// 1. Initial State & Elements
	const state = {
		activeTab: 'home',
		data: window.odliteData || { apps: [], games: [] } // Failsafe if data.js doesn't load
	};
	
	const dom = {
		tabs: document.querySelectorAll('.nav-btn'),
						  sections: document.querySelectorAll('.tab-section'),
						  appsContainer: document.getElementById('appsList'),
						  gamesContainer: document.getElementById('gamesList'),
						  inputs: {
							  apps: document.getElementById('appSearch'),
						  games: document.getElementById('gameSearch')
						  },
						  filters: {
							  apps: document.getElementById('appOsFilter'),
						  games: document.getElementById('gameOsFilter')
						  }
	};
	
	// 2. Initialize
	function init() {
		setupTabs();
		setupSearchListeners();
		// Render initial lists
		renderGrid('apps');
		renderGrid('games');
	}
	
	// 3. Tab Switching Logic
	function setupTabs() {
		dom.tabs.forEach(btn => {
			btn.addEventListener('click', () => {
				const targetId = btn.dataset.tab;
				
				// Visual updates
				dom.tabs.forEach(t => t.classList.remove('active'));
				dom.sections.forEach(s => s.classList.remove('active'));
				
				btn.classList.add('active');
				document.getElementById(targetId).classList.add('active');
			});
		});
	}
	
	// 4. Search & Filter Listeners
	function setupSearchListeners() {
		// Helper to delay search (Debounce)
		const debounce = (fn, ms) => {
			let timer;
			return (...args) => {
				clearTimeout(timer);
				timer = setTimeout(() => fn(...args), ms);
			};
		};
		
		// App Listeners
		if(dom.inputs.apps) dom.inputs.apps.addEventListener('input', debounce(() => renderGrid('apps'), 300));
		if(dom.filters.apps) dom.filters.apps.addEventListener('change', () => renderGrid('apps'));
		
		// Game Listeners
		if(dom.inputs.games) dom.inputs.games.addEventListener('input', debounce(() => renderGrid('games'), 300));
		if(dom.filters.games) dom.filters.games.addEventListener('change', () => renderGrid('games'));
	}
	
	// 5. The Render Engine
	function renderGrid(type) {
		const container = type === 'apps' ? dom.appsContainer : dom.gamesContainer;
		const searchVal = dom.inputs[type].value.toLowerCase();
		const filterVal = dom.filters[type].value;
		const sourceData = state.data[type];
		
		if (!container || !sourceData) return;
		
		// Filter Data
		const filteredItems = sourceData.filter(item => {
			const matchText = item.name.toLowerCase().includes(searchVal) || 
			item.description.toLowerCase().includes(searchVal);
			const matchOs = filterVal === 'all' || item.os.includes(filterVal);
			return matchText && matchOs;
		});
		
		// Handle Empty Results
		if (filteredItems.length === 0) {
			container.innerHTML = `
			<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">
			<i class="fa-solid fa-ghost" style="font-size: 2rem; margin-bottom: 1rem;"></i>
			<p>No signals found in the vault.</p>
			</div>`;
			return;
		}
		
		// Generate Cards
		container.innerHTML = filteredItems.map(item => {
			// Create download buttons for each OS
			const downloadBtns = item.downloadUrls ? Object.entries(item.downloadUrls).map(([os, url]) => {
				// Determine icon based on OS key
				let icon = 'download';
				if(os.includes('win')) icon = 'windows';
				if(os.includes('mac') || os.includes('osx')) icon = 'apple';
				if(os.includes('lin')) icon = 'linux';
				
				return `<a href="${url}" class="btn-dl primary" target="_blank" title="Download for ${os}">
				<i class="fa-brands fa-${icon}"></i> ${os.toUpperCase().slice(0,3)}
				</a>`;
			}).join('') : '<span class="btn-dl">No Link</span>';
			
			// Create OS tags
			const osTags = item.os.map(os => `<span class="tag ${os}">${os}</span>`).join('');
			
			return `
			<article class="card">
			<div class="card-header">
			<h3 class="card-title">${item.name}</h3>
			<span class="card-rating">★ ${item.rating}</span>
			</div>
			<div class="tags">${osTags}</div>
			<p class="card-desc">${item.description}</p>
			<div class="card-meta">
			<span><i class="fa-solid fa-box"></i> ${item.fileSize || 'N/A'}</span>
			<span><i class="fa-solid fa-tag"></i> ${item.category}</span>
			</div>
			<div class="download-group">
			${downloadBtns}
			</div>
			</article>
			`;
		}).join('');
	}
	
	// Run
	init();
	// js/core.js - GlitchVault High Performance Engine
	document.addEventListener('DOMContentLoaded', () => {
		
		// --- 1. THE RENDERING ENGINE (The code you asked about) ---
		const renderGrid = (type) => {
			const container = document.getElementById(`${type}List`);
			if (!container) return; // Safety check
			
			const data = window.odliteData[type];
			
			// Document Fragment prevents the browser from lagging
			const fragment = document.createDocumentFragment();
			
			data.forEach(item => {
				const card = document.createElement('div');
				card.className = 'card';
				card.innerHTML = `
				<div class="card-header">
				<h3 class="card-title">${item.name}</h3>
				<span class="card-rating">★ ${item.rating}</span>
				</div>
				<p class="card-desc">${item.description}</p>
				<div class="card-meta">
				<span><i class="fa-solid fa-box"></i> ${item.fileSize || 'N/A'}</span>
				</div>
				<div class="download-group">
				${Object.keys(item.downloadUrls).map(os => 
					`<a href="${item.downloadUrls[os]}" class="btn-dl primary" target="_blank">${os.toUpperCase()}</a>`
				).join('')}
				</div>
				`;
				fragment.appendChild(card);
			});
			
			container.innerHTML = ''; 
			container.appendChild(fragment); 
		};
		
		// --- 2. TAB SWITCHING LOGIC ---
		const setupTabs = () => {
			const tabs = document.querySelectorAll('.nav-btn');
			tabs.forEach(btn => {
				btn.addEventListener('click', () => {
					const target = btn.dataset.tab;
					
					// Update UI
					document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
					document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
					
					btn.classList.add('active');
					document.getElementById(target).classList.add('active');
				});
			});
		};
		
		// --- 3. INITIALIZE ---
		const init = () => {
			setupTabs();
			// Run the renderers on page load
			renderGrid('apps');
			renderGrid('games');
			console.log("GlitchVault Engine: Operational");
		};
		
		init();
	});
});
