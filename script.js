function openCIPage() {
  window.location.href = "ci_page.html";
}

function openCubePage() {
  window.location.href = "cube_page.html";
}

// Configuração básica da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(115, window.innerWidth / window.innerHeight, 0.1, 150);
const renderer = new THREE.WebGLRenderer({ antialias: true });

const container = document.querySelector('.container');
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Reposiciona a câmera
camera.position.z = 10;
camera.position.x = -67;

// Criação das partículas
const particleCount = 1000;
const particles = new THREE.Group();
scene.add(particles);

const particleGeometry = new THREE.SphereGeometry(1, 8, 8);
const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });

for (let i = 0; i < particleCount; i++) {
  const particle = new THREE.Mesh(particleGeometry, particleMaterial);
  const radius = 100;
  const theta = Math.random() * 2 * Math.PI;
  const phi = Math.acos((2 * Math.random()) - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  particle.position.set(x, y, z);
  particle.scale.set(0.3, 0.3, 0.3); // Ajuste o tamanho das partículas conforme necessário
  particleMaterial.opacity = Math.random() * 0.8 + 0.2; // Ajuste a opacidade das partículas
  particles.add(particle);
}

// Animação das partículas
function animateParticles() {
  requestAnimationFrame(animateParticles);

  particles.rotation.y += 0.001;

  renderer.render(scene, camera);
}

animateParticles();