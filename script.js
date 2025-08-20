function injectAccessibilitySettings() {
    if (!document.getElementById('open-dyslexic-font')) {
        const link = document.createElement('link');
        link.id = 'open-dyslexic-font';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.cdnfonts.com/css/open-dyslexic';
        document.head.appendChild(link);
    }
    const panel = document.createElement('div');
    panel.id = 'accessibility-panel';
    panel.style.position = 'fixed';
    panel.style.top = '10px';
    panel.style.right = '10px';
    panel.style.background = '#fff';
    panel.style.border = '2px solid #333';
    panel.style.padding = '12px 16px';
    panel.style.zIndex = '9999';
    panel.style.borderRadius = '8px';
    panel.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    panel.style.fontSize = '16px';
    panel.style.maxWidth = '260px';
    panel.style.display = 'none';
    panel.style.background = 'var(--acc-bg, #fff)';
    panel.style.color = 'var(--acc-fg, #222)';
    panel.innerHTML = `
        <strong>Accessibility Settings</strong><br>
        <label>Font Size:
            <select id="acc-font-size">
                <option value="16">Default</option>
                <option value="18">Large</option>
                <option value="22">Extra Large</option>
                <option value="28">Huge</option>
            </select>
        </label><br>
        <label>Font Family:
            <select id="acc-font-family">
                <option value="">Default</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Verdana, sans-serif">Verdana</option>
                <option value="Tahoma, sans-serif">Tahoma</option>
                <option value="Comic Sans MS, cursive, sans-serif">Comic Sans</option>
                <option value="Courier New, monospace">Courier New</option>
                <option value="'OpenDyslexic', 'OpenDyslexicAlta', Arial, sans-serif">OpenDyslexic</option>
            </select>
        </label><br>
        <label>Color Scheme:
            <select id="acc-color-scheme">
                <option value="default">Default</option>
                <option value="dark">Dark</option>
                <option value="high-contrast">High Contrast</option>
                <option value="yellow-black">Yellow on Black</option>
            </select>
        </label><br>
        <button id="acc-close" style="margin-top:8px;">Close</button>
    `;
    document.body.appendChild(panel);
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'acc-toggle';
    toggleBtn.textContent = 'Accessibility';
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.top = '10px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.zIndex = '9998';
    toggleBtn.style.background = '#222';
    toggleBtn.style.color = '#fff';
    toggleBtn.style.border = 'none';
    toggleBtn.style.padding = '8px 14px';
    toggleBtn.style.borderRadius = '8px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.fontSize = '16px';
    document.body.appendChild(toggleBtn);
    toggleBtn.addEventListener('click', () => {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    });
    panel.querySelector('#acc-close').addEventListener('click', () => {
        panel.style.display = 'none';
    });
    panel.querySelector('#acc-font-size').addEventListener('change', function() {
        document.documentElement.style.fontSize = this.value + 'px';
        const container = document.querySelector('.container');
        if (container) container.style.fontSize = this.value + 'px';
        const results = document.querySelector('.results');
        if (results) results.style.fontSize = this.value + 'px';
    });
    panel.querySelector('#acc-font-family').addEventListener('change', function() {
        document.body.style.fontFamily = this.value;
        const container = document.querySelector('.container');
        if (container) container.style.fontFamily = this.value;
        const results = document.querySelector('.results');
        if (results) results.style.fontFamily = this.value;
    });
    panel.querySelector('#acc-color-scheme').addEventListener('change', function() {
        setColorScheme(this.value);
    });
}

function setColorScheme(scheme) {
    let bg, fg;
    if (scheme === 'dark') {
        bg = '#181818'; fg = '#f1f1f1';
    } else if (scheme === 'high-contrast') {
        bg = '#000'; fg = '#fff';
    } else if (scheme === 'yellow-black') {
        bg = '#000'; fg = '#FFD600';
    } else {
        bg = '#fff'; fg = '#222';
    }
    document.documentElement.style.setProperty('--acc-bg', bg);
    document.documentElement.style.setProperty('--acc-fg', fg);
    document.body.style.background = bg === '#fff' ? '' : bg;
    document.body.style.color = bg === '#fff' ? '' : fg;
    const container = document.querySelector('.container');
    if (container) {
        container.style.background = bg;
        container.style.color = fg;
        container.style.borderColor = fg;
    }
}
let animalData = {
    base: [],
    head: [],
    ears: [],
    eyes: [],
    nose: [],
    legs: [],
    feet: [],
    tail: [
        "cat", "lion", "dog", "monkey", "tiger", "horse", "cow", "pig", "goat", "sheep", "deer", "moose", "rabbit", "rat", "mouse", "squirrel", "chipmunk", "vole", "gerbil", "hamster", "fox", "wolf", "zebra", "giraffe", "camel", "alpaca", "llama", "kangaroo", "wallaby", "koala", "opossum", "possum", "sugar glider", "bandicoot", "quokka", "wombat", "numbat", "tasmanian devil", "tree kangaroo", "chimpanzee", "baboon", "lemur", "howler monkey", "spider monkey", "capuchin", "tamarin", "macaque", "gibbon", "sloth", "anteater", "armadillo", "pangolin", "kinkajou", "ringtail", "binturong", "red panda", "raccoon", "skunk", "civet", "marten", "stoat", "mink", "weasel", "otter", "beaver", "porcupine", "platypus", "crocodile", "alligator", "lizard", "gecko", "chameleon", "skink", "iguana", "anole", "snake", "leaf-tailed gecko", "spider-tailed horned viper", "long-tailed grass lizard", "long-eared jerboa", "gundi", "tenrec", "aye-aye", "fossa", "vampire ground finch", "vinegaroon", "vampire squid", "yeti crab", "bat-eared fox", "tentacled snake", "hairy frogfish", "velvet worm", "mount Lyell shrew", "monitor lizard", "Cameroon scaly-tail", "Cuban solenodon", "giant otter shrew", "northern nail-tail wallaby", "bridled nail-tail wallaby", "vampire squirrel", "Long-Tailed Grass Lizard", "Thresher Shark", "Giraffe", "Long-Eared Jerboa", "Spider Monkey", "Long-Tailed Widowbird", "Asian Grass Lizard", "Resplendent Quetzal", "Ring-Tailed Lemur", "Borneos Tufted Ground Squirrel", "Ribbon-Tailed Astrapia", "Whiptail Ray", "Bengal Tiger", "Blue Jay", "Common Marmoset", "African Serval", "Black-Tailed Prairie Dog", "Cheetah", "Common Opossum", "Cotton-Top Tamarin", "Curlew", "Dromedary Camel", "Eastern Gray Squirrel", "European Red Squirrel", "Flying Fox", "Green Tree Python", "Green Iguana", "Harlequin Toad", "Indian Peafowl", "Japanese Macaque", "King Cobra", "Long-Tailed Macaque", "Madagascar Ring-Tailed Lemur", "Malayan Flying Fox", "Northern Alligator Lizard", "Ocelot", "Olive Baboon", "Pygmy Marmoset", "Red Fox", "Red-Tailed Hawk", "Rhesus Macaque", "Sifaka", "Snow Leopard", "Southern Flying Squirrel", "Spotted Hyena", "Squirrel Monkey", "Striped Skunk", "Sugar Glider", "Tamarin", "Tarsier", "Toadfish", "Tree Kangaroo", "Uakari", "Wallaby", "Western Bluebird", "White-Tailed Deer", "Yellow-Bellied Marmot", "Zebra", "Zorro", "African Grey Parrot", "American Alligator", "American Kestrel", "Asian Elephant", "Clouded Leopard", "Dingo", "Eurasian Lynx", "Galago", "Great Blue Heron", "Long-Tailed Duck"
    ],
    coat: [],
    colour: [
        "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white",
        "gray", "cyan", "magenta", "lime", "olive", "navy", "teal", "maroon", "coral", "salmon",
        "gold", "silver", "bronze", "violet", "indigo", "turquoise", "lavender", "peach", "mint", "crimson",
        "beige", "ivory", "tan", "chocolate", "plum", "aqua", "fuchsia", "chartreuse", "khaki", "slate",
        "periwinkle", "sienna", "mahogany", "amber", "ruby", "emerald", "topaz", "onyx", "jade", "cobalt",
        "scarlet", "cerulean", "sepia", "burgundy", "lilac", "wheat", "rainbow", "neon", "transparent"
    ],
extra: [
  "unicorn horn", "moose antlers", "antlers", "dragon wings", "phoenix feathers",
  "fairy dust trail", "cyclops eye", "elemental aura", "floating crown", "tail flame",
  "spectral shimmer", "celestial markings", "crystal growths",
  "bee stinger", "extra eyes", "glowing eyes", "long whiskers", "fangs",
  "prehensile tail", "no mouth", "backwards limbs", "split head", "dual spines",
  "extra limbs", "double tail", "asymmetry", "breathing gills", "armored plates",
  "kinetic pulses", "spines along the back", "sheep horns",
  "iridescence", "bioluminescent", "winter coat/summer coat",
  "albinism", "melanism", "erythrism", "leucism", "xanthochromish",
  "heterochromia", "oil slick sheen", "glowing veins", "shifting patterns",
  "patchwork fur", "prism refractions", "speckled with stars",
  "ink blot markings", "swirling eyes", "chameleon color shift",
  "embedded gems", "plants", "mushrooms", "vine growths", "flowers blooming",
  "mossy fur", "rock-like skin", "cloud-like fluff", "tree bark texture",
  "sandpaper skin", "butterfly wings", "coral growth", "honeycomb structure",
  "top hat", "fedora", "necklace", "earrings", "scarf", "monocle", "flower crown",
  "glasses", "bowtie", "tie", "armband", "cloak", "backpack", "boots", "eyepatch",
  "juvenile", "none", "none", "none", "none"
]

};

let currentAnimal = {};

async function loadAnimals() {
    try {
        console.log('Attempting to load animals.txt...');
        const response = await fetch('animals.txt');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Raw text loaded, length:', text.length);
        
        const allAnimals = text.split(',').map(animal => animal.trim().replace(/^"|"$/g, '')).filter(animal => animal.length > 0);
        console.log('Processed animals count:', allAnimals.length);
        console.log('First few animals:', allAnimals.slice(0, 5));
        
        const fallbackAnimals = [
            "mouse", "duck", "horse", "wolf", "lion", "tiger", "bear", "elephant",
            "giraffe", "rhino", "dragon", "eagle", "owl", "snake", "lizard", "frog",
            "cat", "dog", "rabbit", "fox", "deer", "zebra", "hippo", "crocodile"
        ];
        
        const weightedAnimals = [
            ...allAnimals, ...allAnimals, ...allAnimals,
            ...fallbackAnimals
        ];
        
        const realColors = [
            "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "black", "white",
            "gray", "cyan", "magenta", "lime", "olive", "navy", "teal", "maroon", "coral", "salmon",
            "gold", "silver", "bronze", "violet", "indigo", "turquoise", "lavender", "peach", "mint", "crimson",
            "beige", "ivory", "tan", "chocolate", "plum", "aqua", "fuchsia", "chartreuse", "khaki", "slate",
            "periwinkle", "sienna", "mahogany", "amber", "ruby", "emerald", "topaz", "onyx", "jade", "cobalt",
            "scarlet", "cerulean", "sepia", "burgundy", "lilac", "wheat", "rainbow", "neon", "transparent"
        ];
        
        const weightedColors = [
            ...realColors, ...realColors, ...realColors, ...realColors,
            ...allAnimals
        ];
        
        animalData.base = weightedAnimals;
        animalData.head = weightedAnimals;
        animalData.ears = weightedAnimals;
        animalData.eyes = weightedAnimals;
        animalData.nose = weightedAnimals;
        animalData.legs = weightedAnimals;
        animalData.feet = weightedAnimals;
        animalData.coat = weightedAnimals;
        
        animalData.colour = weightedColors;
        
        console.log(`Loaded ${allAnimals.length} animals from animals.txt with ${fallbackAnimals.length} fallback animals in 3:1 ratio (total: ${weightedAnimals.length})`);
    } catch (error) {
        console.error('Failed to load animals.txt, using fallback data:', error);
        const fallback = [
            "mouse", "duck", "horse", "wolf", "lion", "tiger", "bear", "elephant",
            "giraffe", "rhino", "dragon", "eagle", "owl", "snake", "lizard", "frog",
            "cat", "dog", "rabbit", "fox", "deer", "zebra", "hippo", "crocodile"
        ];
        animalData.base = fallback;
        animalData.head = fallback;
        animalData.ears = fallback;
        animalData.eyes = fallback;
        animalData.nose = fallback;
        animalData.legs = fallback;
        animalData.feet = fallback;
        animalData.coat = fallback;
    }
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generatePart(partType) {
    const resultElement = document.getElementById(`${partType}-result`);
    let spinFrames = 20;
    let frame = 0;
    let spinInterval = setInterval(() => {
        const temp = getRandomItem(animalData[partType]);
        resultElement.textContent = temp;
        resultElement.classList.add('generated', 'new-result');
        frame++;
        if (frame >= spinFrames) {
            clearInterval(spinInterval);
            const result = getRandomItem(animalData[partType]);
            currentAnimal[partType] = result;
            resultElement.textContent = result;
            setTimeout(() => {
                resultElement.classList.remove('new-result');
            }, 500);
            updateFinalDescription();
        }
    }, 100);
}

function updateFinalDescription() {
    const finalElement = document.getElementById('finalDescription');
    if (Object.keys(currentAnimal).length === 0) {
        finalElement.textContent = "Generate some parts to see your creature!";
    } else {
        finalElement.textContent = "";
    }
}

async function generateAllParts() {
    const partTypes = Object.keys(animalData);
    for (let i = 0; i < partTypes.length; i++) {
        await new Promise(resolve => {
            generatePartWithCallback(partTypes[i], resolve);
        });
    }
}

function generatePartWithCallback(partType, callback) {
    const resultElement = document.getElementById(`${partType}-result`);
    let spinFrames = 20;
    let frame = 0;
    let spinInterval = setInterval(() => {
        const temp = getRandomItem(animalData[partType]);
        resultElement.textContent = temp;
        resultElement.classList.add('generated', 'new-result');
        frame++;
        if (frame >= spinFrames) {
            clearInterval(spinInterval);
            const result = getRandomItem(animalData[partType]);
            currentAnimal[partType] = result;
            resultElement.textContent = result;
            setTimeout(() => {
                resultElement.classList.remove('new-result');
            }, 500);
            updateFinalDescription();
            if (typeof callback === 'function') callback();
        }
    }, 100);
}

function clearAllParts() {
    currentAnimal = {};
    
    Object.keys(animalData).forEach(partType => {
        const resultElement = document.getElementById(`${partType}-result`);
        resultElement.textContent = `Click "${partType.charAt(0).toUpperCase() + partType.slice(1)}" to generate`;
        resultElement.classList.remove('generated');
    });
    
    updateFinalDescription();
}

document.addEventListener('DOMContentLoaded', async function() {
    injectAccessibilitySettings();
    await loadAnimals();
    
    document.querySelectorAll('.part-btn').forEach(button => {
        button.addEventListener('click', function() {
            const partType = this.getAttribute('data-part');
            generatePart(partType);
        });
    });
    
    document.getElementById('generateAll').addEventListener('click', generateAllParts);
    
    document.getElementById('clearAll').addEventListener('click', clearAllParts);
    document.querySelector('.buttons').addEventListener('click', function(e) {
        const partType = e.target.getAttribute('data-part');
        if (partType) generatePart(partType);
    });
});
