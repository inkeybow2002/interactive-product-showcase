const scene = new THREE.Scene(); // Create a new scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Set up a camera with a perspective view
const renderer = new THREE.WebGLRenderer(); // Create a WebGL renderer

renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer
document.getElementById('model-viewer').appendChild(renderer.domElement); // Add the renderer's DOM element to the document

const geometry = new THREE.BoxGeometry(); // Create a box geometry
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Create a basic material with green color
const cube = new THREE.Mesh(geometry, material); // Create a mesh with the geometry and material
scene.add(cube); // Add the cube to the scene

camera.position.z = 5; // Position the camera away from the cube

function animate() { // Define the animate function to update the scene
    requestAnimationFrame(animate); // Request the next frame
    cube.rotation.x += 0.01; // Rotate the cube on the x-axis
    cube.rotation.y += 0.01; // Rotate the cube on the y-axis
    renderer.render(scene, camera); // Render the scene from the perspective of the camera
}

animate(); // Start the animation loop