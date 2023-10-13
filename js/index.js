const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

const loader = new THREE.OBJLoader();
loader.load("blackdemon.obj", function (object) {
  scene.add(object);
});

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();