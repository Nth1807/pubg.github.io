// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("3d-background").appendChild(renderer.domElement);

// Particles
const particleCount = 500;
const particles = new THREE.Geometry();

const material = new THREE.PointsMaterial({
    color: 0xff4655,
    size: 0.1,
});

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    const particle = new THREE.Vector3(x, y, z);
    particles.vertices.push(particle);
}

const particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.002; // Rotate particles slowly
    renderer.render(scene, camera);
}
animate();

// Smooth scroll to sections
function scrollToSection(id) {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
