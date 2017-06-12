var camera, renderer, scene;

create();

function create(){
  //setup scene
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  scene = new THREE.Scene();

  //add camera
  createCamera();

  //start animation
  animate();
}

function animate(){
  renderer.render(scene, camera);
  requestAnimationFrame(function(){
    animate();
  });
}

function createCamera(){
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.y = -400;
  camera.position.z = 400;
  camera.rotation.x = .70;
}
